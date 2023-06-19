/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/intelligent-products/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-19 13:43:11
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

const { INTELLIGENT_PRODUCTS_LIST, INTELLIGENT_PRODUCTS_ADD, INTELLIGENT_PRODUCTS_DELETE } =
  SERVICE_MAP;

// 获取人工智能列表
export async function getAIGCList(params: any): Promise<Website.ResponseInfo> {
  console.log('hello');
  return request(INTELLIGENT_PRODUCTS_LIST, {
    method: 'POST',
    data: params,
  });
}

// 新增网站
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
  return request(SERVICE_MAP.AIGC_UPDATE, {
    method: 'PUT',
    data: params,
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
