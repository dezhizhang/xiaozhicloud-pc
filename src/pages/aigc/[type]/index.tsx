/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/[type]/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-26 17:36:27
 * :last editor: 张德志
 * :date last edited: 2023-05-26 19:04:13
 */
import React, { useRef } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import Header from './components/Header';
import DetailDrawer from './components/DetailDrawer';

const AigcDetail: React.FC = () => {
  const ref = useRef();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.operation}>
            <Button type="primary" onClick={() => (ref as any).current.show()}>
              添加详情
            </Button>
          </div>
        </div>
      </div>
      <DetailDrawer
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default AigcDetail;
