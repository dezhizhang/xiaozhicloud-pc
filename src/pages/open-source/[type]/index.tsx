/* eslint-disable react-hooks/exhaustive-deps */
/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/open-source/[type]/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-26 17:36:27
 * :last editor: 张德志
 * :date last edited: 2023-10-07 20:45:56
 */
import React, { useRef, useEffect, useState } from 'react';
import styles from './index.less';
import { useParams } from 'umi';
import { Button } from 'antd';
import { getDetailInfo } from '../service';
import Header from '@/components/Header';
import DetailDrawer from '@/components/DetailDrawer';

const AigcDetail: React.FC = () => {
  const ref = useRef();

  const params: { detailId: string } = useParams();
  const [content, setContent] = useState<string>();

  const fetchDetailInfo = async () => {
    const res = await getDetailInfo(params);
    if (res.stat) {
      const value = res.result.data?.content;
      setContent(value);
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
          <div className="braft-output-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <DetailDrawer
        onSuccess={() => fetchDetailInfo()}
        //@ts-ignore
        ref={ref}
      />
    </div>
  );
};

export default AigcDetail;
