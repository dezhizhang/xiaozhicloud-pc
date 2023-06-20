/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/website/[type]/components/Header/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-26 18:31:49
 * :last editor: 张德志
 * :date last edited: 2023-06-20 22:31:52
 */
import React from 'react';
import styles from './index.less';
import { Descriptions } from 'antd';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Descriptions
          title="网站详情"
          bordered
          column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 3, xs: 3 }}
        >
          <Descriptions.Item label="标题">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="类型">Prepaid</Descriptions.Item>
          <Descriptions.Item label="封面">18:00:00</Descriptions.Item>
          <Descriptions.Item label="创建时间">$80.00</Descriptions.Item>
          <Descriptions.Item label="状态">$20.00</Descriptions.Item>
          <Descriptions.Item label="描述">$60.00</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default Header;
