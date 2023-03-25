/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/banner/components/BannerDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-12 22:03:26
 * :last editor: 张德志
 * :date last edited: 2022-11-20 09:19:21
 */
import { Button, Form, Input, Drawer, Row, message, Select } from 'antd';
import { postUserAdd } from '../../service';
import SparkMD5 from 'spark-md5';
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
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
  }));

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();
    values.password = SparkMD5.hash(values.password as string);
    const res = await postUserAdd(values);
    if (res.code === 200) {
      setVisible(false);
      message.success('增加用户成功');
      onSuccess?.();
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
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="name"
          rules={[{ required: true, message: '用户名不能为空!' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          label="位置"
          name="position"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="mobile"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input placeholder="请输入手机号" />
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

        <Form.Item
          label="电子邮箱"
          name="email"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input placeholder="请输入电子邮箱" />
        </Form.Item>
      </Form>
    </Drawer>
  );
});

export default UserDrawer;
