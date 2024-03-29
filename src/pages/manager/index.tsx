/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-10 12:30:33
 * :last editor: 张德志
 * :date last edited: 2023-10-09 07:50:50
 */
import styles from './index.less';
import dayjs from 'dayjs';
import { CommonFilter } from '@ui/sales';
import { FORMAT } from '@/utils/constants';
import type { ColumnsType } from 'antd/es/table';
import { Button, Table, Popconfirm, message, Divider, Badge } from 'antd';
import { getManagerList, deleteManager } from './service';
import { empty } from '@/utils/index';
import { OPERATION_TYPE, STATUS_TYPE, FILTER_CONFIG } from './constants';
import { GENDER_MAP } from './constants';
import UserDrawer from './components/UserDrawer';

import React, { useState, useEffect, useRef } from 'react';

const Manager: React.FC = () => {
  const ref = useRef();
  const [filter, setFilter] = useState<Managers.DataType>({
    _id: undefined,
    username: undefined,
    phone: undefined,
    email: undefined,
  });
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<Managers.DataType[]>();

  const render = (text: string) => {
    return <span>{text || empty()}</span>;
  };

  const fetchManagerList = async (params: Managers.DataType) => {
    setLoading(true);
    const res = await getManagerList(params);
    if (res?.success) {
      setLoading(false);
      setTotal(res?.total);
      setDataSource(res?.data);
    }
  };

  const handleConfirm = async (id: string) => {
    const res = await deleteManager({ id });
    if (res.success) {
      message.success('删除成功');
      fetchManagerList(filter);
    }
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
      dataIndex: 'phone',
      key: 'phone',
      render,
    },
    {
      title: '姓别',
      dataIndex: 'gender',
      key: 'gender',
      render: (text: number) => {
        const lanel = GENDER_MAP.find((item) => item.value == text)?.label;
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
      render: (text) => {
        const statusItem = STATUS_TYPE.find((item) => item.value === text);
        return (
          <span>
            {statusItem ? (
              <Badge
                text={statusItem.label}
                color={statusItem.value === '1' ? 'green' : 'volcano'}
              />
            ) : (
              empty()
            )}
          </span>
        );
      },
    },
    {
      title: '超级管理员',
      dataIndex: 'is_admin',
      key: 'is_admin',
      render: (text: string) => {
        return <span>{text ? '是' : '否'}</span>;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'add_time',
      key: 'add_time',
      render: (text: string) => {
        return <span>{dayjs(text).format(FORMAT)}</span>;
      },
    },
    {
      title: '更新时间',
      dataIndex: 'update_time',
      key: 'update_time',
      render: (text: string) => {
        return <span>{text ? dayjs(text).format(FORMAT) : empty()}</span>;
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (_: string, record: Managers.DataType) => {
        return (
          <div>
            <a role="button" onClick={() => (ref.current as any).show(OPERATION_TYPE.EDIT, record)}>
              修改
            </a>
            <Divider type="vertical" />
            <Popconfirm
              placement="topLeft"
              title="您确定要删除吗"
              onConfirm={() => handleConfirm(record?._id as string)}
              okText="确认"
              cancelText="取消"
            >
              <a role="button">删除</a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

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
      <div className={styles.filter}>
        <CommonFilter
          config={FILTER_CONFIG as any}
          storageId={''}
          style={styles.commonFilter}
          focusSearch={false}
          arrayItemMaxWidth={0}
          cascaderColumnWidth={0}
          cascaderColumnWidthMap={undefined}
          checkResultSolt={undefined}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <div>
            共查询到&nbsp;<span style={{ color: 'red' }}>{total}</span>&nbsp;个用户
          </div>
          <Button type="primary" onClick={() => (ref.current as any).show(OPERATION_TYPE.ADD)}>
            添加会员
          </Button>
        </div>

        <Table
          loading={loading}
          dataSource={dataSource}
          columns={columns}
          rowKey={(record) => record?._id as string}
        />
      </div>
      <UserDrawer
        //@ts-ignore
        ref={ref}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default Manager;
