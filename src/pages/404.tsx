/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/404.tsx
 * :author: 张德志
 * :copyright: (c) 2023, xiaozhi
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-04-28 13:34:57
 */
import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="对不起你访问的页面没有找到"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;
