import React, { useRef, useState, useEffect } from 'react';
import styles from './index.less';
import type { ColumnsType } from 'antd/es/table';
import Filter from './components/Filter';
import { empty } from '@/utils/index';
import { PAGE_INDEX, PAGE_SIZE } from '@/constants/index';
import { OPERATION_TYPE, DEFAULT_PAGINATION, WEBSITE_TYPE, STATUS_TYPE } from './constants';
import { getWebsiteList } from './service';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import WebsiteDrawer from './components/WebsiteDrawer';
import { Button, Table, Divider } from 'antd';

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

  const fetchWebsiteList = async (params: Website.RequestType) => {
    const res = await getWebsiteList(params);
    if (res.stat) {
      setResponseData(res);
      setLoading(false);
    }
  };

  const transformToParamsDefault = (params: Website.RequestType) => {
    const obj = {};
    for (let key in params) {
      obj[key] = undefined;
    }
    obj['pageIndex'] = PAGE_INDEX;
    obj['pageSize'] = PAGE_SIZE;
    return obj;
  };

  const handleSubmit = () => {
    fetchWebsiteList({ ...filter, pageIndex: PAGE_INDEX, pageSize: PAGE_SIZE });
  };

  const handleReset = () => {
    const newFilter = transformToParamsDefault(filter);
    setFilter(newFilter);
    fetchWebsiteList({ ...newFilter, pageIndex: PAGE_INDEX, pageSize: PAGE_SIZE });
  };

  const handleChange = (key: string, value: string) => {
    filter[key] = value;
    setFilter(filter);
    fetchWebsiteList(transformToParamsDefault(filter));
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
    fetchWebsiteList(filter);
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
      render: () => {
        return (
          <div>
            <a type="primary" role="button">
              编辑
            </a>
            <Divider type="vertical" />
            <a type="primary" role="button">
              删除
            </a>
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
            <span>&nbsp;{responseData?.total || 0}&nbsp;</span>个资产
          </div>
          <Button type="primary" onClick={() => (ref.current as any).show(OPERATION_TYPE.ADD)}>
            新增网站
          </Button>
        </div>
        <Table
          bordered
          pagination={{
            ...pagination,
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
