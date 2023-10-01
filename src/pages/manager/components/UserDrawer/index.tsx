/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/components/UserDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-12 22:03:26
 * :last editor: 张德志
 * :date last edited: 2023-10-01 17:19:40
 */
import SparkMD5 from 'spark-md5';
import { SUCCESS_CODE } from '@/constants';

import { Button, Form, Input, Drawer, Row, message, Select } from 'antd';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { getManagerAdd, getManagerUpdate } from '../../service';
import {
  OPERATION_TYPE,
  IS_ADMIN_LIST,
  STATUS_TYPE,
  GENDER_MAP,
  OPERATION_TEXT,
} from '../../constants';

const { Option } = Select;

interface UserDrawerProps {
  onSuccess: () => void;
}

const UserDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const { onSuccess } = props;
  const [record, setRecord] = useState<Managers.DataType>();
  const [visible, setVisible] = useState<boolean>();
  const [operation, setOperation] = useState<string>(OPERATION_TYPE.ADD);

  useImperativeHandle(ref, () => ({
    show: (action: string, record: any) => {
      setOperation(action);
      setVisible(true);
      if (action === OPERATION_TYPE.EDIT) {
        setRecord(record);
        form.setFieldsValue({
          ...record,
        });
      }
    },
  }));

  const fetchManagerAdd = async (params: any) => {
    const res = await getManagerAdd(params);
    if (!res.stat) {
      message.warn(res.msg);
      return;
    }
    message.success(res.msg);
    form.resetFields();
    setVisible(false);
    onSuccess && onSuccess();
  };

  const fetchManagerUpdate = async (params: any) => {
    const res = await getManagerUpdate(params);
    if (res.code === SUCCESS_CODE) {
      onSuccess?.();
      form.resetFields();
      setVisible(false);
      message.success('更新成功');
      return;
    }
    message.warn('更新失败');
  };

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();
    // 如果是新增
    if (operation === OPERATION_TYPE.ADD) {
      values.password = SparkMD5.hash(values.password as string);
      fetchManagerAdd(values);
      return;
    }
    if (operation === OPERATION_TYPE.EDIT) {
      const _id = record?._id;
      fetchManagerUpdate({ _id, ...values });
    }
  };

  return (
    <Drawer
      footer={
        <Row justify="end">
          <Button onClick={() => setVisible(false)} style={{ marginRight: 16 }}>
            取消
          </Button>
          <Button onClick={handleFinish} type="primary">
            确认
          </Button>
        </Row>
      }
      width={500}
      visible={visible}
      title={OPERATION_TEXT[operation]}
      onClose={() => setVisible(false)}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        {operation === OPERATION_TYPE.EDIT ? (
          <Form.Item
            label="会员id"
            name="_id"
            style={{ display: 'none' }}
            rules={[{ required: true, message: '会员id名不能为空!' }]}
          >
            <Input placeholder="请输入会员id" />
          </Form.Item>
        ) : null}

        <Form.Item
          label="手机号"
          name="phone"
          rules={[
            { required: true, message: '手机号不能为空' },
            {
              pattern:
                /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/,
              message: '手机号不合法',
            },
          ]}
        >
          <Input placeholder="请输入手机号" />
        </Form.Item>
        {operation === OPERATION_TYPE.ADD ? (
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
        ) : null}

        <Form.Item label="姓别" name="gender" rules={[{ required: true, message: '姓别不能为空' }]}>
          <Select placeholder="请选择性别">
            {GENDER_MAP.map((item) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="超级管理员"
          name="is_admin"
          rules={[{ required: true, message: '超级管理员不能为空' }]}
        >
          <Select placeholder="请选择状态">
            {IS_ADMIN_LIST.map((item) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="状态" name="status" rules={[{ required: true, message: '状态不能为空' }]}>
          <Select placeholder="请选择状态">
            {STATUS_TYPE.map((item) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="电子邮箱"
          name="email"
          rules={[
            { required: false, message: '密码不能为空' },
            {
              pattern: /^\w+@[\da-z\.-]+\.([a-z]{2,6}|[\u2E80-\u9FFF]{2,3})$/,
              message: '邮箱不合法',
            },
          ]}
        >
          <Input placeholder="请输入电子邮箱" />
        </Form.Item>
      </Form>
    </Drawer>
  );
});

export default UserDrawer;
