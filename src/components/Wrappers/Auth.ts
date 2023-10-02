/*
 * :file description:验证用户是否有权进入
 * :name: /xiaozhicloud-pc/src/components/Wrappers/Auth.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-09-29 16:51:49
 * :last editor: 张德志
 * :date last edited: 2023-10-02 15:37:33
 */
import { message } from 'antd';
import React, { useEffect } from 'react';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import { useLocation, history } from 'umi';

export interface AuthProps {
  dispatch: Dispatch;
  children: React.ReactElement;
}

const Auth: React.FC<AuthProps> = (props) => {
  const { children, dispatch } = props;
  const location: any = useLocation();
  const { query } = location;
  // 登录地址
  const loginPath = '/user/login';

  // 验证用户是否有登录系统的权限
  const fetchAuthUserIntoSystem = async () => {
    try {
      const userString = localStorage.getItem('user');
      const user: any = userString ? JSON.parse(userString) : {};

      dispatch({
        type: 'user/getCurrentAuth',
        payload: { user_id: user.userId },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    // 没有token不存在不让其登录
    if (!token) {
      message.warn('请登录');
      history.push({
        pathname: loginPath,
        query,
      });
      return;
    }
    // 验证当前用户是否可以进入登录
    fetchAuthUserIntoSystem();
  }, [location]);
  return children;
};

export default connect()(Auth);
