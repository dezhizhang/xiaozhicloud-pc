/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/components/RightContent/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, xiaozhi
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-05-02 16:11:31
 */
import { Space } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
