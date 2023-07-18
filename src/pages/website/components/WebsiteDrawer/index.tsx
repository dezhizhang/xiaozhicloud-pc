/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/website/components/WebsiteDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-19 07:42:22
 */
import OSS from 'ali-oss';
import { OSS_OBJECT } from '@/constants/index';
import { Button, Form, Input, Drawer, Row, message, Select, Upload } from 'antd';
import { getWebsiteAdd, getWebsiteUpdate } from '../../service';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import {
  OPERATION_TYPE,
  OPERATION_TEXT,
  WEBSITE_TYPE,
  STATUS_TYPE,
  WEBSITE_COLOR,
  WEBSITE_STYLES,
  INDUSTRY_CLASSIFICATION,
} from '../../constants';
import styles from './index.less';

const { Option } = Select;

const { TextArea } = Input;

interface UserDrawerProps {
  onSuccess: () => void;
}

const WebsiteDrawer: React.FC<UserDrawerProps> = forwardRef((props, ref) => {
  const [form] = Form.useForm();
  const { onSuccess } = props;
  const [urlFileList, setUrlFileList] = useState<any>([]);
  const [downFileList, setDownFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState<Website.DataType>();
  const [operation, setOperation] = useState<string>(OPERATION_TYPE.ADD);

  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: (active: string, params: any) => {
      setVisible(true);
      setUrlFileList([]);
      form.resetFields();
      if (active === OPERATION_TYPE.EDIT) {
        setRecord(params);
        const dateTime = new Date().getTime();
        const uploadObj = {
          uid: dateTime,
          name: '',
          url: params?.url,
          status: 'done',
        };
        setUrlFileList([uploadObj]);
        form.setFieldsValue({
          url: params.url,
          title: params.title,
          link: params.link,
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
      message.success('新增成功');
      onSuccess?.();
    }
  };

  const fetchWebsiteUpdate = async (values: Website.RequestType) => {
    const res = await getWebsiteUpdate({ _id: record?._id, ...values });
    if (res.stat) {
      setVisible(false);
      form.resetFields();
      message.success('编辑成功');
      onSuccess?.();
    }
  };

  const handleFinish = async () => {
    await form.validateFields();
    const values = await form.getFieldsValue();
    values.url = urlFileList[0]?.url;
    values.download = downFileList[0]?.url;
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
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error('上传图片必须小于 2MB!');
      return false;
    }
    return IMAGE_TYPE.includes(file.type) && isLt2M;
  };

  const loadClient = async () => {
    return new OSS(OSS_OBJECT);
  };

  const responseUpload = async (file: any) => {
    const fileType = file?.type;
    const extension = fileType?.split('/')?.[1];
    const dateTime = new Date().getTime();
    const client = await loadClient();
    const result = await client.put(`/xiaozhicloud/website/${dateTime}.${extension}`, file);
    const uploadObj = {
      uid: dateTime,
      name: result?.name?.split('/')[1],
      url: result.url,
      status: 'done',
    };
    return uploadObj;
  };

  const handleCustomRequestUrl = async ({ file }: any) => {
    console.log(file);
    setLoading(true);
    const uploadObj = await responseUpload(file);
    setLoading(false);
    setUrlFileList([uploadObj]);
  };

  const handleCustomRequestDown = async ({ file }: any) => {
    setLoading(true);
    const uploadObj = await responseUpload(file);
    setLoading(false);
    setDownFileList([uploadObj]);
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
        <Form.Item
          label="源码"
          name="github"
          rules={[{ required: true, message: '标题不能为空!' }]}
        >
          <Input placeholder="请输入标题" />
        </Form.Item>

        <Form.Item label="链接" name="link" rules={[{ required: true, message: '链接不能为空' }]}>
          <Input placeholder="请输入链接" />
        </Form.Item>
        <Form.Item label="封面" name="url" rules={[{ required: true, message: '封面不能为空' }]}>
          <Upload
            accept="image/*"
            listType="picture"
            fileList={urlFileList}
            name="file"
            customRequest={handleCustomRequestUrl}
            onRemove={() => setUrlFileList([])}
            beforeUpload={beforeUpload}
          >
            {urlFileList.length <= 0 && (
              <div className={styles.upload}>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
              </div>
            )}
          </Upload>
        </Form.Item>
        <Form.Item
          label="文件"
          name="download"
          rules={[{ required: true, message: '封面不能为空' }]}
        >
          <Upload
            accept="image/*"
            listType="picture"
            fileList={downFileList}
            name="file"
            customRequest={handleCustomRequestDown}
            onRemove={() => setDownFileList([])}
            beforeUpload={beforeUpload}
          >
            {downFileList.length <= 0 && (
              <div className={styles.upload}>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
              </div>
            )}
          </Upload>
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
        <Form.Item label="风格" name="style" rules={[{ required: true, message: '类型不能为空' }]}>
          <Select placeholder="请选择类型">
            {WEBSITE_STYLES.map((item) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="颜色" name="color" rules={[{ required: true, message: '颜色不能为空' }]}>
          <Select placeholder="请选择类型">
            {WEBSITE_COLOR.map((item) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="行业分类"
          name="industry"
          rules={[{ required: true, message: '类型不能为空' }]}
        >
          <Select placeholder="请选择类型">
            {INDUSTRY_CLASSIFICATION.map((item) => (
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
