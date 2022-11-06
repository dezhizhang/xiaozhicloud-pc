/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/user/Login/service.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 23:23:06
 * :last editor: 张德志
 * :date last edited: 2022-11-06 23:29:05
 */
/** 登录接口 POST /api/login/account */
import { request } from 'umi';

export async function login(params: User.LoginParams) {
  return request<User.LoginResult>('/api/v1/manager/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}
