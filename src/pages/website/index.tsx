import React, { useRef, useState, useEffect } from 'react';
import styles from './index.less';
import type { ColumnsType } from 'antd/es/table';
import Filter from './components/Filter';
import { empty } from '@/utils/index';
import { OPERATION_TYPE, DEFAULT_PAGINATION, WEBSITE_TYPE } from './constants';
import { getWebsiteList } from './service';
import type { TablePaginationConfig } from 'antd/lib/table/Table';
import WebsiteDrawer from './components/WebsiteDrawer';
import { Button, Table } from 'antd';

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

  const handleOk = () => {};

  const handleReset = () => {};

  const handleChange = (key: string, value: string) => {
    filter[key] = value;
    setFilter(filter);
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
    },
    {
      title: '操作',
      key: 'operation',
      render: () => {
        return (
          <span>
            <Button type="primary" size="small">
              编辑
            </Button>
          </span>
        );
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <Filter filter={filter} onReset={handleReset} onOk={handleOk} onChange={handleChange} />
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
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default Website;
