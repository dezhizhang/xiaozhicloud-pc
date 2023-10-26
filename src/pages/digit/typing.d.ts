/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/metaverse/typing.d.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-06-19 09:13:58
 * :last editor: 张德志
 * :date last edited: 2023-10-02 09:27:30
 */
declare namespace Metaverse {
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
    code: number;
    msg: string;
    total: number;
    data: DataType[];
  }
}
