declare namespace Website {
  type RequestType = {
    title?: string;
    type?: string;
    status?: string;
    pageIndex?: number;
    pageSize?: number;
  };

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
  interface ResponseData {
    stat: number;
    msg: string;
    total: number;
    data: DataType[];
  }
}
