/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/user/Login/typings.d.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 23:26:58
 * :last editor: 张德志
 * :date last edited: 2022-11-06 23:31:12
 */

declare namespace User {
  type LoginParams = {
    email?: string;
    password?: string;
  };

  type LoginResult = {
    status?: number;
    msg?: string;
    success?: string;
    data: any[];
  };
}
