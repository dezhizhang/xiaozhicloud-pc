/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/intelligent-products/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-25 16:32:16
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

const {
  INTELLIGENT_PRODUCTS_ADD,
  INTELLIGENT_PRODUCTS_LIST,
  INTELLIGENT_PRODUCTS_INFO,
  INTELLIGENT_PRODUCTS_DELETE,

  INTELLIGENT_PRODUCTS_UPDATE,
} = SERVICE_MAP;

// 获取人工智能列表
export async function getIntelligentProductList(params: any): Promise<Website.ResponseInfo> {
  return request(INTELLIGENT_PRODUCTS_LIST, {
    method: 'POST',
    data: params,
  });
}

// 人工智能产品
export async function getAigcAdd(params: Website.RequestType): Promise<any> {
  return request(INTELLIGENT_PRODUCTS_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { _id: string }): Promise<any> {
  return request(INTELLIGENT_PRODUCTS_DELETE, {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request(INTELLIGENT_PRODUCTS_UPDATE, {
    method: 'PUT',
    data: params,
  });
}

export async function getProductsInfo(params: { id: string }) {
  return request(INTELLIGENT_PRODUCTS_INFO, {
    method: 'GET',
    params,
  });
}

// 详情添加
export async function getDetailAdd(params: any): Promise<any> {
  return request(SERVICE_MAP.DETAIL_ADD, {
    method: 'POST',
    data: params,
  });
}

// 获取详情
export async function getDetailInfo(params: { detailId: string }): Promise<any> {
  return request(SERVICE_MAP.DETAIL_INFO, {
    method: 'GET',
    params,
  });
}
