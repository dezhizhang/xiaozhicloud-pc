/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/typings.d.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-18 12:39:44
 * :last editor: 张德志
 * :date last edited: 2023-06-25 18:25:25
 */
declare namespace Managers {
  type RequestType = {
    username: string;
    phone: string;
    email: string;
    password: string;
    status: number;
  };

  type DataType = {
    _id: string | undefined;
    username?: string;
    phone?: string;
    email?: string;
    status?: number;
    add_time?: string;
  };
  type ResponseList = {
    success: boolean;
    data: DataType[];
    msg: string;
    code: number;
    total: number;
  };
}
