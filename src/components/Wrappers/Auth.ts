/*
 * :file description:验证用户是否有权进入
 * :name: /xiaozhicloud-pc/src/components/Wrappers/Auth.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-09-29 16:51:49
 * :last editor: 张德志
 * :date last edited: 2023-09-29 17:06:05
 */

import { message } from 'antd';
import React, { useEffect } from 'react';
import { useLocation, history } from 'umi';

export interface AuthProps {
  children: React.ReactElement;
}

const Auth: React.FC<AuthProps> = (props) => {
  const { children } = props;
  const location: any = useLocation();
  // 登录地址
  const loginPath = '/user/login';

  useEffect(() => {
    debugger;
    const { query } = location;
    const token = localStorage.getItem('token');
    // 没有token不让登录后台中间件进行token验证
    if (!token) {
      message.warn('请登录');
      history.push({
        pathname: loginPath,
        query,
      });
      return;
    }
  }, [location]);
  return children;
};

export default Auth;
