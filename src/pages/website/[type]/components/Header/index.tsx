/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/website/[type]/components/Header/index.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-26 18:31:49
 * :last editor: 张德志
 * :date last edited: 2023-06-20 23:05:54
 */
import React from 'react';
import dayjs from 'dayjs';
import { Image } from 'antd';
import { format } from '@/utils';
import styles from './index.less';
import { Descriptions } from 'antd';

export interface HeaderProps {
  baseInfo: any;
}

const Header: React.FC<HeaderProps> = ({ baseInfo }) => {
  const { title, url, type, add_time, description, status } = baseInfo || {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Descriptions
          title="网站详情"
          bordered
          column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 3, xs: 3 }}
        >
          <Descriptions.Item label="标题">{title}</Descriptions.Item>
          <Descriptions.Item label="类型">{type}</Descriptions.Item>
          <Descriptions.Item label="封面">
            <Image src={url} alt="title" style={{ width: 40, height: 20 }} />
          </Descriptions.Item>
          <Descriptions.Item label="创建时间">{dayjs(add_time).format(format())}</Descriptions.Item>
          <Descriptions.Item label="状态">{status}</Descriptions.Item>
          <Descriptions.Item label="描述">{description}</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default Header;
