/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/news-information/typing.d.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-06-19 09:14:00
 * :last editor: 张德志
 * :date last edited: 2023-10-02 10:55:47
 */
declare namespace NewsInformation {
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

  interface ResponseData {
    total?: number;
    code: number;
    msg: string;
    data?: DataType[];
  }
}
