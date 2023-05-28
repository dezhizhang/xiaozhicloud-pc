/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/[type]/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-26 17:36:27
 * :last editor: 张德志
 * :date last edited: 2023-05-26 20:51:50
 */
import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';
import { useParams } from 'umi';
import { Button } from 'antd';
import { getDetailInfo } from '@/pages/aigc/service';
import Header from './components/Header';
import DetailDrawer from './components/DetailDrawer';

const AigcDetail: React.FC = () => {
  const ref = useRef();

  const params: { detailId: string } = useParams();
  const [content, setContent] = useState<string>();

  const fetchDetailInfo = async () => {
    const res = await getDetailInfo(params);
    if (res.stat) {
      setContent(res.data.content);
    }
  };
  useEffect(() => {
    fetchDetailInfo();
  }, [params]);

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
        onSuccess={handleSuccess}
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default AigcDetail;
