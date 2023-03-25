import React, { useRef, useState, useEffect } from 'react';
import { Button, Table, Divider, Popconfirm, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Filter from './components/Filter';
import { empty } from '@/utils/index';
import { PAGE_INDEX, PAGE_SIZE } from '@/constants/index';
import { OPERATION_TYPE, DEFAULT_PAGINATION, WEBSITE_TYPE, STATUS_TYPE } from './constants';
import { getWebsiteList, getWebsiteDelete } from './service';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import WebsiteDrawer from './components/WebsiteDrawer';
import styles from './index.less';

const Website: React.FC = () => {
  const ref = useRef();
  const [loading, setLoading] = useState<boolean>(true);
  const [responseData, setResponseData] = useState<Website.ResponseData>();
  const [pagination, setPagination] = useState<TablePaginationConfig>(DEFAULT_PAGINATION);
  const [filter, setFilter] = useState<Website.RequestType>({
    title: undefined,
    type: undefined,
    status: undefined,
  });

  const fetchWebsiteList = async (params: any) => {
    const res = await getWebsiteList(params);
    if (res.stat) {
      setResponseData(res?.result);
      setLoading(false);
    }
  };

  const transformToParamsDefault = (params: any) => {
    const obj = {};
    for (let key in params) {
      obj[key] = undefined;
    }
    return {
      pageIndex: PAGE_INDEX,
      pageSize: PAGE_SIZE,
      filter: obj,
    };
  };

  const handleSubmit = () => {
    fetchWebsiteList({ filter, pageIndex: PAGE_INDEX, pageSize: PAGE_SIZE });
  };

  const handleConfirm = async (id: string) => {
    const res = await getWebsiteDelete({ id });
    if (res.stat) {
      message.success(res.msg);
      fetchWebsiteList(transformToParamsDefault(filter));
    }
  };

  const handleReset = () => {
    const newFilter = transformToParamsDefault(filter);
    setFilter(newFilter);
    fetchWebsiteList({ filter: newFilter, pageIndex: PAGE_INDEX, pageSize: PAGE_SIZE });
  };

  const handleChange = (key: string, value: string) => {
    if (key === 'title') {
      filter[key] = value ? value : undefined;
    } else {
      filter[key] = value;
    }
    setFilter(filter);
  };

  const handlePageChange = (pageIndex: number, pageSize: number) => {
    setPagination({
      ...pagination,
      current: pageIndex,
      pageSize,
    });
    fetchWebsiteList({ filter, pageIndex, pageSize });
  };

  const handleSuccess = () => {
    setFilter(transformToParamsDefault(filter));
    setPagination({
      ...pagination,
      current: 1,
      pageSize: 10,
    });
    fetchWebsiteList(transformToParamsDefault(filter));
  };

  useEffect(() => {
    fetchWebsiteList(transformToParamsDefault(filter));
  }, []);

  const columns: ColumnsType<Website.DataType> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text || '--'}</a>,
    },
    {
      title: '链接',
      dataIndex: 'link',
      key: 'link',
      render: (text) => {
        return (
          <a href={`//${text}`} target="_blank">
            {text}
          </a>
        );
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (text) => {
        const typeItem = WEBSITE_TYPE.find((item) => item.value === text);
        return <span>{typeItem?.label || empty()} </span>;
      },
    },
    {
      title: '描述',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (text) => {
        const statusItem = STATUS_TYPE.find((item) => item.value === text);
        return <span>{statusItem?.label || empty()}</span>;
      },
    },
    {
      title: '操作',
      key: 'operation',
      render: (_, record: Website.DataType) => {
        return (
          <div>
            <a
              type="primary"
              role="button"
              onClick={() => (ref.current as any).show(OPERATION_TYPE.EDIT, record)}
            >
              编辑
            </a>
            <Divider type="vertical" />
            <Popconfirm
              okText="确定"
              placement="topLeft"
              title={'您确定要删除吗？'}
              onConfirm={() => handleConfirm(record._id)}
              cancelText="取消"
            >
              <a type="primary" role="button">
                删除
              </a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Filter filter={filter} onReset={handleReset} onOk={handleSubmit} onChange={handleChange} />
      </div>
      <div className={styles.content}>
        <div className={styles.operation}>
          <div className={styles.left}>
            共有
            <span>&nbsp;{responseData?.total || 0}&nbsp;</span>个网站
          </div>
          <Button type="primary" onClick={() => (ref.current as any).show(OPERATION_TYPE.ADD)}>
            新增网站
          </Button>
        </div>
        <Table
          bordered
          pagination={{
            ...pagination,
            onChange: handlePageChange,
            total: responseData?.total,
          }}
          loading={loading}
          columns={columns}
          dataSource={responseData?.data || []}
        />
      </div>
      <WebsiteDrawer
        onSuccess={handleSuccess}
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default Website;
