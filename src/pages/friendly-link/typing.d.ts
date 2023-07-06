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
    stat: number;
    msg: string;
    result: ResponseData;
  }
  interface ResponseData {
    total?: number;
    data?: DataType[];
  }
}
