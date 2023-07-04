/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/office/typing.d.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-04 17:33:46
 */
declare namespace Office {
  interface OptionType {
    label: string;
    value: string;
  }
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
    applicable: string; // 适用场景
    _id: string;
  }
  interface ResponseInfo {
    stat: number;
    msg: string;
    result: ResponseData;
  }
  interface ResponseData {
    total?: number;
    data?: DataType[];
  }
}
