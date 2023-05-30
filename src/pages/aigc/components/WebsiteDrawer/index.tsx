/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/components/WebsiteDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, xiaozhi
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-05-30 12:45:32
 */
import OSS from 'ali-oss';
import { OSS_OBJECT } from '@/constants';
import { Button, Form, Input, Drawer, Row, message, Select, Upload } from 'antd';
import { getWebsiteAdd, getWebsiteUpdate } from '../../service';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { OPERATION_TYPE, OPERATION_TEXT, STATUS_TYPE, AIGC_TYPE } from '../../constants';
import styles from './index.less';
const { Option } = Select;

const { TextArea } = Input;

interface UserDrawerProps {
  onSuccess: () => void;
}

const WebsiteDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const { onSuccess } = props;
  const [fileList, setFileList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState<Website.DataType>();
  const [operation, setOperation] = useState<String>(OPERATION_TYPE.ADD);

  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: (active: string, params: any) => {
      setVisible(true);
      const dateTime = new Date().getTime();
      if (active === OPERATION_TYPE.EDIT) {
        setRecord(params);
        setFileList([
          {
            uid: dateTime,
            name: '',
            url: params.url,
            status: 'done',
          },
        ]);
        form.setFieldsValue({
          url: params.url,
          link: params.link,
          title: params.title,
          type: params.type,
          status: params.status,
          description: params.description,
        });
      }
      setOperation(active);
    },
  }));

  const fetchWebsiteAdd = async (values: Website.RequestType) => {
    const res = await getWebsiteAdd(values);
    if (res.stat) {
      setVisible(false);
      form.resetFields();
      message.success('新增网站成功');
      onSuccess?.();
    }
  };

  const fetchWebsiteUpdate = async (values: Website.RequestType) => {
    const res = await getWebsiteUpdate({ _id: record?._id, ...values });
    if (res.stat) {
      setVisible(false);
      form.resetFields();
      message.success('编辑网站成功');
      onSuccess?.();
    }
  };

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();
    values.url = fileList[0]?.url;
    if (operation === OPERATION_TYPE.ADD) {
      fetchWebsiteAdd(values);
      return;
    }
    if (operation === OPERATION_TYPE.EDIT) {
      fetchWebsiteUpdate(values);
    }
  };

  const beforeUpload = async (file: { type: string; size: number }) => {
    // 检查图片类型
    const IMAGE_TYPE = ['image/jpeg', 'image/png', 'image/bmp', 'image/webp'];

    if (!IMAGE_TYPE.includes(file.type)) {
      message.error('请上传图片');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('上传图片必须小于 2MB!');
      return false;
    }
    return IMAGE_TYPE.includes(file.type) && isLt2M;
  };

  const loadClient = async () => {
    return new OSS(OSS_OBJECT);
  };

  const handleRequest = async ({ file }: any) => {
    setLoading(true);
    const fileType = file.type;
    const extension = fileType?.split('/')?.[1];
    const dateTime = new Date().getTime();
    const client = await loadClient();
    const result = await client.put(`/website/${dateTime}.${extension}`, file);
    const uploadObj = {
      uid: dateTime,
      name: result?.name?.split('/')[1],
      url: result.url,
      status: 'done',
    };
    setLoading(false);
    setFileList([uploadObj]);
  };

  return (
    <Drawer
      className={styles.container}
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
        <Form.Item label="封面" name="url" rules={[{ required: true, message: '链接不能为空' }]}>
          <Upload
            accept="image/*"
            listType="picture"
            fileList={fileList}
            name="file"
            customRequest={handleRequest}
            onRemove={() => setFileList([])}
            beforeUpload={beforeUpload}
          >
            {fileList.length <= 0 && (
              <div className={styles.upload}>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
              </div>
            )}
          </Upload>
        </Form.Item>
        <Form.Item label="状态" name="type" rules={[{ required: true, message: '类型不能为空' }]}>
          <Select placeholder="请选择类型">
            {AIGC_TYPE.map((item) => (
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
