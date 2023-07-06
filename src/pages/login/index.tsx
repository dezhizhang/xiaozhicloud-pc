/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/login/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-07-07 07:58:06
 */

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import SparkMD5 from 'spark-md5';
import { login } from './service';
import { history, useModel } from 'umi';
import styles from './index.less';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  const handleSubmit = async (values: User.LoginParams) => {
    try {
      // 登录
      values.password = SparkMD5.hash(values.password as string);
      const res = await login({ ...values });
      if (!res.stat) {
        message.warn(res.msg);
        return;
      }
      message.success('登录成功！');
      await fetchUserInfo();
      /** 此方法会跳转到 redirect 参数所在的位置 */
      if (!history) return;
      const { query } = history.location;
      const { redirect } = query as { redirect: string };
      history.push(redirect || '/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{/* <h2>晓智云</h2> */}</div>
        <LoginForm
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as User.LoginParams);
          }}
        >
          <ProFormText
            name="phone"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder="请办入手机号"
            rules={[
              {
                required: true,
                message: '手机号不能为空',
              },
              {
                pattern:
                  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                message: '手机号不会法',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={styles.prefixIcon} />,
            }}
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '密码不能为空',
              },
              {
                min: 6,
                message: '密码不能小于6位',
              },
              {
                max: 20,
                message: '密码不能超过20位',
              },
            ]}
          />
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
