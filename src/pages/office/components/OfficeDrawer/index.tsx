/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/office/components/OfficeDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, xiaozhi
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-19 22:33:52
 */
import OSS from 'ali-oss';
import { OSS_OBJECT, STORE_BUCKET } from '@/constants';
import { Button, Form, Input, Drawer, Row, message, Select, Upload } from 'antd';
import { getWebsiteAdd, getWebsiteUpdate } from '../../service';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import {
  STYLES,
  OFFICE_MAP,
  STATUS_TYPE,
  OFFICE_TYPE,
  OPERATION_TYPE,
  OPERATION_TEXT,
  OFFICE_TYPE_LIST,
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
  const [type, setType] = useState<string>(OFFICE_TYPE_LIST[0].value);
  const [record, setRecord] = useState<Office.DataType>();
  const [operation, setOperation] = useState<string>(OPERATION_TYPE.ADD);

  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: (active: string, params: any) => {
      setVisible(true);
      form.resetFields();
      if (active === OPERATION_TYPE.EDIT) {
        setRecord(params);
        const dateTime = new Date().getTime();
        const uploadObj = {
          uid: dateTime,
          name: '',
          url: params.url,
          status: 'done',
        };
        setLoading(false);
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
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('上传图片必须小于 2MB!');
      return false;
    }
    return IMAGE_TYPE.includes(file.type) && isLt2M;
  };

  const beforeUpload1 = async (file: { type: string; size: number }) => {
    // 检查图片类型
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error('上传图片必须小于 2MB!');
      return false;
    }
    return isLt2M;
  };

  const loadClient = async () => {
    return new OSS(OSS_OBJECT);
  };

  const responseUpload = async (file: any) => {
    const fileName = file?.name;
    const dateTime = new Date().getTime();
    const client = await loadClient();
    const result = await client.put(`/${STORE_BUCKET}/office/${dateTime}/${fileName}`, file);
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
    console.log('file2');
    setLoading(true);
    const uploadObj = await responseUpload(file);
    setLoading(false);
    setDownFileList([uploadObj]);
  };

  console.log(OFFICE_MAP[type]);

  return (
    <Drawer
      className={styles.container}
      maskClosable={false}
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
      open={visible}
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
            accept="aplication/zip"
            listType="picture"
            fileList={downFileList}
            name="file"
            customRequest={handleCustomRequestDown}
            onRemove={() => setDownFileList([])}
            beforeUpload={beforeUpload1}
          >
            {downFileList.length <= 0 && (
              <div className={styles.upload}>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item label="类型" name="type" rules={[{ required: true, message: '类型不能为空' }]}>
          <Select
            placeholder="请选择类型"
            onChange={(value) => {
              setType(value);
              form.setFieldsValue({
                applicable: undefined,
              });
            }}
          >
            {OFFICE_TYPE_LIST.map((item) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="场景"
          name="applicable"
          rules={[{ required: true, message: '场景不能为空' }]}
        >
          <Select placeholder="请选择场景">
            {(OFFICE_MAP[type] || []).map((item: Office.OptionType) => (
              <Option key={item?.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {type === OFFICE_TYPE.PTT && (
          <Form.Item
            label="风格"
            name="style"
            rules={[{ required: true, message: '场景不能为空' }]}
          >
            <Select placeholder="请选择场景">
              {(STYLES || []).map((item: Office.OptionType) => (
                <Option key={item?.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
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
