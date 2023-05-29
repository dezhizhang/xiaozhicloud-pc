/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/[type]/components/DetailDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, xiaozhi
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-05-29 12:58:40
 */

import { Button, Drawer, Row } from 'antd';
import { useParams } from 'umi';
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
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));
  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
      setEditorState(BraftEditor.createEditorState(null));
    },
  }));

  const handleFinish = async () => {
    const htmlContent = editorState?.toHTML();
    const res = await getDetailAdd({ ...params, content: htmlContent });
    if (res.stat) {
      onSuccess?.();
      setVisible(false);
    }
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
      width={800}
      title={'添加详情'}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <BraftEditor
        value={editorState}
        onChange={(value) => setEditorState(value)}
        onSave={handleFinish}
      />
    </Drawer>
  );
});

export default DetailDrawer;
