/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-10 12:30:33
 * :last editor: 张德志
 * :date last edited: 2022-11-18 23:08:06
 */
import styles from './index.less';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getManagerList } from './service';
import { empty } from '@/utils/index';
import { SEX_MAP } from './constants';
import UserDrawer from './components/UserDrawer';
import FilterTable from './components/FilterTable';
import React, { useState, useEffect, useRef } from 'react';

const Manager: React.FC = () => {
  const userRef = useRef();
  const [filter, setFilter] = useState<Managers.DataType>({
    username: undefined,
    phone: undefined,
    email: undefined,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<Managers.DataType[]>();

  const render = (text: string) => {
    return <span>{text ?? empty()}</span>;
  };
  const columns: ColumnsType<Managers.DataType> = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      render,
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      key: 'mobile',
      render,
    },
    {
      title: '姓别',
      dataIndex: 'sex',
      key: 'sex',
      render: (text: number) => {
        const lanel = SEX_MAP.find((item) => item.value == text)?.label;
        return <span>{lanel || empty()}</span>;
      },
    },
    {
      title: '邮箱地址',
      dataIndex: 'email',
      key: 'email',
      render,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '创建时间',
      dataIndex: 'add_time',
      key: 'add_time',
      render: (text: string) => {
        // return <span>{dayjs(text).format('YYYY-MM-DD HH:mm:ss')}</span>;
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => {
        return (
          <div>
            <Button type="primary" size="small">
              修改
            </Button>
            <Button danger type="primary" size="small" style={{ marginLeft: 8 }}>
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  const handleAddUser = () => {
    (userRef.current as any).show();
  };

  const fetchManagerList = async (params: Managers.DataType) => {
    setLoading(true);
    const res = await getManagerList(params);
    console.log('res', res);
    if (res?.code === 200) {
      setLoading(false);
      setDataSource(res?.data);
    }
  };

  const handleSuccess = () => {
    fetchManagerList(filter);
  };

  const handleChange = (key: string, value: any) => {
    filter[key] = value;

    setFilter(filter);
  };

  const hadleReset = () => {
    filter.username = undefined;
    filter.phone = undefined;
    filter.email = undefined;
    fetchManagerList(filter);
    setFilter(filter);
  };

  useEffect(() => {
    fetchManagerList(filter);
  }, []);
  return (
    <div className={styles.container}>
      <FilterTable
        onChange={handleChange}
        onOk={() => fetchManagerList(filter)}
        filter={filter}
        onReset={hadleReset}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <div>
            共查询到&nbsp;<span style={{ color: 'red' }}>100</span>&nbsp;个用户
          </div>
          <Button type="primary" onClick={handleAddUser}>
            添加用户
          </Button>
        </div>

        <Table loading={loading} dataSource={dataSource} columns={columns} />
      </div>
      <UserDrawer
        //@ts-ignore
        ref={userRef}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default Manager;
