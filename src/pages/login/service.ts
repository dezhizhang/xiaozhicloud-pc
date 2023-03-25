/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/user/Login/service.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 23:23:06
 * :last editor: 张德志
 * :date last edited: 2022-11-18 12:23:34
 */
/** 登录接口 POST /api/login/account */
import request from '@/utils/request';

/** 登录接口 POST /api/login/account */
export async function login(body: User.LoginParams): Promise<API.LoginResult> {
  return request('/api/v1/login/account', {
    method: 'POST',
    data: body,
  });
}
