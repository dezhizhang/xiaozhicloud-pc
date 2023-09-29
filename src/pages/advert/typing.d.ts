/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/advert/typing.d.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-09-29 12:12:01
 */
declare namespace Website {
  type RequestType = {
    title?: string;
    type?: string;
    status?: string;
    pageIndex?: number;
    pageSize?: number;
  };

  interface DataType {
    add_time: string;
    description: string;
    link: string;
    review: string;
    title: string;
    status: string;
    _id: string;
  }
  interface ResponseInfo {
    code: number;
    msg: string;
    result: ResponseData;
  }
  interface ResponseData {
    total?: number;
    data?: DataType[];
  }
}
