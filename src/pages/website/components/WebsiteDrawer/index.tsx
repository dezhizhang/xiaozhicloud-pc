import { Button, Form, Input, Drawer, Row, message, Select } from 'antd';
import { getWebsiteAdd } from '../../service';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { OPERATION_TYPE, OPERATION_TEXT, WEBSITE_TYPE, STATUS_TYPE } from '../../constants';
const { Option } = Select;

const { TextArea } = Input;

interface UserDrawerProps {
  onSuccess: () => void;
}

const WebsiteDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const { onSuccess } = props;
  const [operation, setOperation] = useState<String>(OPERATION_TYPE.ADD);
  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: (active: string, id: string) => {
      setVisible(true);
      setOperation(active);
    },
  }));

  const fetchWebsiteAdd = async (values: Website.RequestType) => {
    const res = await getWebsiteAdd(values);
    if (res.stat) {
      setVisible(false);
      message.success('新增网站成功');
      onSuccess && onSuccess();
    }
  };

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();

    if (operation === OPERATION_TYPE.ADD) {
      fetchWebsiteAdd(values);
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
      title={OPERATION_TEXT[operation]}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item label="标题" name="title" rules={[{ required: true, message: '标题不能为空!' }]}>
          <Input placeholder="请输入标题" />
        </Form.Item>

        <Form.Item label="链接" name="link" rules={[{ required: true, message: '链接不能为空' }]}>
          <Input placeholder="请输入链接" />
        </Form.Item>

        <Form.Item label="类型" name="type" rules={[{ required: true, message: '类型不能为空' }]}>
          <Select placeholder="请选择类型">
            {WEBSITE_TYPE.map((item) => (
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

        <Form.Item label="描述" name="description">
          <TextArea rows={4} placeholder="请输入描述最多支持200字符" maxLength={200} />
        </Form.Item>
      </Form>
    </Drawer>
  );
});

export default WebsiteDrawer;
