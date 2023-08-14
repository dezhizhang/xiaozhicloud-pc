/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/metaverse/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-08-15 00:04:17
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

const { METAVERSE_ADD, METAVERSE_LIST, METAVERSE_INFO, METAVERSE_DELETE, METAVERSE_UPDATE } =
  SERVICE_MAP;

// 获取人工智能列表
export async function getMetaverseList(params: any): Promise<Website.ResponseInfo> {
  return request(METAVERSE_LIST, {
    method: 'POST',
    data: params,
  });
}

// 人工智能产品
export async function getAigcAdd(params: Website.RequestType): Promise<any> {
  return request(METAVERSE_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { _id: string }): Promise<any> {
  return request(METAVERSE_DELETE, {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request(METAVERSE_UPDATE, {
    method: 'PUT',
    data: params,
  });
}

export async function getProductsInfo(params: { id: string }) {
  return request(METAVERSE_INFO, {
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
