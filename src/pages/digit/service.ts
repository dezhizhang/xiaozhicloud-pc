/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/digit/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-10-27 06:25:14
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

const { DIGIT_ADD, DIGIT_LIST, DIGIT_INFO, DIGIT_DELETE, DIGIT_UPDATE } = SERVICE_MAP;

// 获取人工智能列表
export async function getDigitList(params: any): Promise<Metaverse.ResponseData> {
  return request(DIGIT_LIST, {
    method: 'POST',
    data: params,
  });
}

// 人工智能产品
export async function getAigcAdd(params: Website.RequestType): Promise<any> {
  return request(DIGIT_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getDigitDelete(params: { _id: string }): Promise<any> {
  return request(DIGIT_DELETE, {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request(DIGIT_UPDATE, {
    method: 'PUT',
    data: params,
  });
}

export async function getProductsInfo(params: { id: string }) {
  return request(DIGIT_INFO, {
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
