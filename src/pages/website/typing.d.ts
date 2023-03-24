declare namespace Website {
  type RequestType = {
    title?: string;
    type?: string;
    status?: string;
  };

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }
}
