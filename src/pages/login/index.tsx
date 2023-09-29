/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/login/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-09-29 17:55:18
 */

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import SparkMD5 from 'spark-md5';
import { login } from './service';
import { history } from 'umi';
import styles from './index.less';

const Login: React.FC = () => {
  const handleSubmit = async (values: User.LoginParams) => {
    try {
      // 登录
      values.password = SparkMD5.hash(values.password as string);
      const res = await login({ ...values });
      if (res.code !== 200) {
        message.warn(res.msg);
        return;
      }
      // 用户登录完成
      if (res.token && res.userId) {
        const { query } = history.location;
        message.success('登录成功！');
        history.push({
          pathname: '/',
          query,
        });
        const { token, userId, username, gender, status, email } = res;
        localStorage.setItem('token', token);
        localStorage.setItem(
          'user',
          JSON.stringify({ token, userId, username, gender, status, email }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>晓智科技</h2>
        </div>
        <LoginForm
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as User.LoginParams);
          }}
        >
          <ProFormText
            name="email"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder="请输入邮箱"
            rules={[
              {
                required: true,
                message: '邮箱不能为空',
              },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: '邮箱不会法',
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
