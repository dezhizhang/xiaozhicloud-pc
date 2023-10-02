/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/components/RightContent/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, xiaozhi
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-10-02 16:16:44
 */
import { Space } from 'antd';
import React from 'react';
import Avatar from './AvatarDropdown';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
