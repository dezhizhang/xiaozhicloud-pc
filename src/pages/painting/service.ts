/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/painting/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-11-11 17:30:59
 */
import request from '@/utils/request';

// 获取人工智能列表
export async function getDigitList(params: any): Promise<Metaverse.ResponseData> {
  return request('/api/v1/painting/list', {
    method: 'POST',
    data: params,
  });
}

// 人工智能产品
export async function getAigcAdd(params: Website.RequestType): Promise<any> {
  return request('/api/v1/painting/add', {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getDigitDelete(params: { _id: string }): Promise<any> {
  return request('/api/v1/painting/delete', {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request('/api/v1/painting/edit', {
    method: 'PUT',
    data: params,
  });
}

// export async function getProductsInfo(params: { id: string }) {
//   return request(DIGIT_INFO, {
//     method: 'GET',
//     params,
//   });
// }

// // 详情添加
// export async function getDetailAdd(params: any): Promise<any> {
//   return request(SERVICE_MAP.DETAIL_ADD, {
//     method: 'POST',
//     data: params,
//   });
// }

// // 获取详情
// export async function getDetailInfo(params: { detailId: string }): Promise<any> {
//   return request(SERVICE_MAP.DETAIL_INFO, {
//     method: 'GET',
//     params,
//   });
// }
