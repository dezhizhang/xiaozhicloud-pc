/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/[type]/components/DetailDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, xiaozhi
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-02 12:44:33
 */
import OSS from 'ali-oss';
import { useParams } from 'umi';
import { OSS_OBJECT } from '@/constants';
import { ContentUtils } from 'braft-utils';
import { Button, Drawer, Row, Upload, message } from 'antd';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { getDetailAdd } from '@/pages/aigc/service';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './index.less';

interface DetailDrawerProps {
  onSuccess: () => void;
}

const DetailDrawer: React.FC<DetailDrawerProps> = forwardRef((props, ref) => {
  const { onSuccess } = props;
  const params: { detailId: string } = useParams();
  const [fileList, setFileList] = useState<any>([]);
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));
  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
      setEditorState(BraftEditor.createEditorState(null));
    },
  }));

  const handleFinish = async () => {
    console.log('editorState', editorState);
    const htmlContent = editorState?.toHTML();
    const res = await getDetailAdd({ ...params, content: htmlContent });
    if (res.stat) {
      onSuccess?.();
      setVisible(false);
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
    const fileType = file.type;
    const extension = fileType?.split('/')?.[1];
    const dateTime = new Date().getTime();
    const client = await loadClient();
    const result = await client.put(`/detail/${dateTime}.${extension}`, file);
    setEditorState(
      ContentUtils.insertMedias(editorState, [
        {
          uid: dateTime,
          name: result?.name?.split('/')[1],
          type: 'IMAGE',
          url: result.url,
        },
      ]),
    );
    const newFileList = [];
    newFileList.push({
      uid: dateTime,
      name: '',
      url: result.url,
      status: 'done',
    });
    setFileList(newFileList);
  };

  const extendControls = [
    {
      key: 'antd-uploader',
      type: 'component',
      component: (
        <Upload
          listType="picture"
          fileList={fileList}
          name="file"
          customRequest={handleRequest}
          onRemove={() => setFileList([])}
          beforeUpload={beforeUpload}
        >
          {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
          <button type="button" className="control-item button upload-button" data-title="插入图片">
            上传图片
          </button>
        </Upload>
      ),
    },
  ];

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
      width={800}
      title={'添加详情'}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <BraftEditor
        value={editorState}
        onSave={handleFinish}
        onChange={(value) => setEditorState(value)}
        extendControls={extendControls}
      />
    </Drawer>
  );
});

export default DetailDrawer;
