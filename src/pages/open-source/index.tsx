/* eslint-disable react-hooks/exhaustive-deps */
/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/open-source/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-10-02 09:55:04
 */
import moment from 'moment';
import _ from 'lodash';
import React, { useRef, useState, useEffect } from 'react';
import { Button, Table, Divider, Popconfirm, message, Image, Badge, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Filter from './components/Filter';
import { empty, format } from '@/utils/index';
import { baseUrl } from './constants';
import { PAGE_INDEX, PAGE_SIZE, FALLBACK, SUCCESS_CODE } from '@/constants';
import { STATUS_TYPE, OPEN_SOURCE, OPERATION_TYPE, DEFAULT_PAGINATION } from './constants';
import { getOpenSourceList, getWebsiteDelete } from './service';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import AigcDrawer from './components/AigcDrawer';
import styles from './index.less';

const Website: React.FC = () => {
  const ref = useRef();
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<OpenSource.DataType[]>();
  const [pagination, setPagination] = useState<TablePaginationConfig>(DEFAULT_PAGINATION);
  const [filter, setFilter] = useState<IntelligentProducts.RequestType>({
    title: undefined,
    type: undefined,
    status: undefined,
  });

  const fetcOpenSouceList = async (params: any) => {
    setLoading(true);
    const res = await getOpenSourceList(params);
    if (res.code === SUCCESS_CODE) {
      const { data, total } = res || {};
      setLoading(false);
      setDataSource(data);
      setPagination((old) => {
        return { ...old, total };
      });
    }
  };

  const transformToParamsDefault = (params: any, pageIndex?: number, pageSize?: number) => {
    const obj = {};
    for (const key in params) {
      obj[key] = undefined;
    }
    return {
      pageIndex: pageIndex || PAGE_INDEX,
      pageSize: pageSize || PAGE_SIZE,
      filter: obj,
    };
  };

  const handleConfirm = async (id: string) => {
    const res = await getWebsiteDelete({ _id: id });
    if (res.code === SUCCESS_CODE) {
      message.success(res.msg);
      fetcOpenSouceList(transformToParamsDefault(filter));
    }
  };

  const handleSubmit = () => {
    fetcOpenSouceList({ filter, pageIndex: PAGE_INDEX, pageSize: PAGE_SIZE });
  };

  const handleReset = () => {
    const newFilter = transformToParamsDefault(filter);
    setFilter(newFilter);
    fetcOpenSouceList(newFilter);
  };

  const handleChange = (key: string, value: string) => {
    const newFilter = _.cloneDeep(filter);
    if (key === 'title') {
      newFilter[key] = value ? value : undefined;
    } else {
      newFilter[key] = value;
    }
    console.log('newFilter', newFilter);
    setFilter(newFilter);
  };

  const handlePageChange = (pageIndex: number, pageSize: number) => {
    setPagination({
      ...pagination,
      current: pageIndex,
      pageSize,
    });
    fetcOpenSouceList({ filter, pageIndex, pageSize });
  };

  const handleSuccess = () => {
    setFilter(transformToParamsDefault(filter));
    setPagination({
      ...pagination,
      current: 1,
      pageSize: 10,
    });
    fetcOpenSouceList(transformToParamsDefault(filter));
  };

  useEffect(() => {
    fetcOpenSouceList(transformToParamsDefault(filter));
  }, []);

  const columns: ColumnsType<IntelligentProducts.DataType> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text, record: IntelligentProducts.DataType) => (
        <a href={`${baseUrl}/${record._id}`} target="_blank" rel="noreferrer">
          {text || '--'}
        </a>
      ),
    },
    {
      title: '一级分类',
      dataIndex: 'top_classify',
      render: (text: string, record) => {
        console.log({ record });
        const itemType = OPEN_SOURCE.find((item) => item.value === text);
        return <span>{itemType?.label}</span>;
      },
    },
    {
      title: '链接',
      dataIndex: 'link',
      key: 'link',
      render: (text) => {
        return (
          <a href={text} target="_blank" rel="noreferrer">
            {text}
          </a>
        );
      },
    },
    {
      title: '源码',
      dataIndex: 'code',
      key: 'code',
      render: (text) => {
        return (
          <a href={text} target="_blank" rel="noreferrer">
            {text}
          </a>
        );
      },
    },
    {
      title: '封面',
      dataIndex: 'url',
      key: 'url',
      render: (text) => {
        return <Image width={64} height={32} src={text} fallback={FALLBACK} />;
      },
    },

    {
      title: '创建时间',
      key: 'add_time',
      width: '20%',
      dataIndex: 'add_time',
      render: (text) => {
        return <span>{moment(text).format(format()) || empty()}</span>;
      },
    },
    {
      title: '状态',
      key: 'status',

      dataIndex: 'status',
      render: (text) => {
        const statusItem = STATUS_TYPE.find((item) => item.value === text);
        return (
          <span>
            {statusItem ? (
              <Badge
                text={statusItem.label}
                color={statusItem.value === 'enable' ? 'green' : 'volcano'}
              />
            ) : (
              empty()
            )}
          </span>
        );
      },
    },
    {
      title: '描述',
      key: 'description',
      dataIndex: 'description',
      render: (text) => {
        return (
          <Tooltip placement="top" title={text}>
            <span className={styles.desc}>{text || empty()}</span>
          </Tooltip>
        );
      },
    },
    {
      title: '操作',
      key: 'operation',
      // eslint-disable-next-line @typescript-eslint/no-shadow
      render: (_: string, record: IntelligentProducts.DataType) => {
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
            <span>&nbsp;{pagination?.total || 0}&nbsp;</span>开源软件
          </div>
          <Button type="primary" onClick={() => (ref.current as any).show(OPERATION_TYPE.ADD)}>
            新增开源软件
          </Button>
        </div>
        <Table
          bordered
          pagination={{
            ...pagination,
            onChange: handlePageChange,
          }}
          loading={loading}
          columns={columns}
          rowKey={(record) => record?._id}
          dataSource={dataSource}
        />
      </div>
      <AigcDrawer
        onSuccess={handleSuccess}
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default Website;
