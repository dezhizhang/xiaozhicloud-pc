/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/[type]/components/DetailDrawer/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, xiaozhi
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-05-26 19:15:24
 */

import { Button, Drawer, Row } from 'antd';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './index.less';

interface DetailDrawerProps {
  onSuccess: () => void;
}

const DetailDrawer: React.FC<DetailDrawerProps> = forwardRef((props, ref) => {
  const editorState = BraftEditor.createEditorState(null);
  const [visible, setVisible] = useState<boolean>();
  useImperativeHandle(ref, () => ({
    show: (active: string, params: any) => {
      setVisible(true);
    },
  }));

  const handleFinish = () => {};

  const handleEditorChange = () => {};

  const submitContent = () => {};

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
      <BraftEditor value={editorState} onChange={handleEditorChange} onSave={submitContent} />
    </Drawer>
  );
});

export default DetailDrawer;
