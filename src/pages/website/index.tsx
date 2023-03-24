import React, { useRef, useState } from 'react';
import styles from './index.less';
import type { ColumnsType } from 'antd/es/table';
import Filter from './components/Filter';
import { OPERATION_TYPE } from './constants';
import WebsiteDrawer from './components/WebsiteDrawer';
import { Button, Table } from 'antd';

const Website: React.FC = () => {
  const ref = useRef();
  const [filter, setFilter] = useState<Website.RequestType>({
    title: undefined,
    type: undefined,
    status: undefined,
  });

  const handleOk = () => {};

  const handleReset = () => {};

  const handleChange = (key: string, value: string) => {
    filter[key] = value;
    setFilter(filter);
  };

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
            <span>&nbsp;3&nbsp;</span>个资产
          </div>
          <Button type="primary" onClick={() => (ref.current as any).show(OPERATION_TYPE.ADD)}>
            新增网站
          </Button>
        </div>
        <Table columns={columns} dataSource={[]} />
      </div>
      <WebsiteDrawer
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default Website;
