/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/user/Login/service.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 23:23:06
 * :last editor: 张德志
 * :date last edited: 2022-11-15 12:43:39
 */
/** 登录接口 POST /api/login/account */
import request from '@/utils/request';

/** 登录接口 POST /api/login/account */
export async function login(body: User.LoginParams): Promise<API.LoginResult> {
  return request('/api/login/account', {
    method: 'POST',
    data: body,
  });
}
