/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/components/UserDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-12 22:03:26
 * :last editor: 张德志
 * :date last edited: 2022-11-18 23:01:12
 */
import { Button, Form, Input, Drawer, Row, message, Select } from 'antd';
import { getManagerAdd } from '../../service';
import SparkMD5 from 'spark-md5';
import { OPERATION_TYPE } from '../../constants';
import { STATUS_TYPE } from '../../constants';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { SEX_MAP } from '../../constants';
const { Option } = Select;

interface UserDrawerProps {
  onSuccess: () => void;
}

const UserDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const { onSuccess } = props;

  const [visible, setVisible] = useState<boolean>();
  const [operation, setOperation] = useState<String>(OPERATION_TYPE.ADD);
  useImperativeHandle(ref, () => ({
    show: (action: string) => {
      setOperation(action);
      setVisible(true);
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

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();
    values.password = SparkMD5.hash(values.password as string);
    // 如果是新增
    if (operation === OPERATION_TYPE.ADD) {
      fetchManagerAdd(values);
      return;
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
      title="添加用户"
      onClose={() => setVisible(false)}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item
          label="会员名"
          name="username"
          rules={[{ required: true, message: '会员名不能为空!' }]}
        >
          <Input placeholder="请输入会员名" />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="mobile"
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
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item label="姓别" name="sex" rules={[{ required: true, message: '姓别不能为空' }]}>
          <Select placeholder="请选择性别">
            {SEX_MAP.map((item) => (
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
