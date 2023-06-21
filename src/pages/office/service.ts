/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/office/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-21 16:59:38
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

const { OFFICE_LIST, OFFICE_ADD, OFFICE_DELETE, OFFICE_UPDATE, OFFICE_INFO, DETAIL_INFO } =
  SERVICE_MAP;

// 获取网站列表
export async function getWebsiteList(params: any): Promise<Website.ResponseInfo> {
  return request(OFFICE_LIST, {
    method: 'POST',
    data: params,
  });
}

// 新增网站
export async function getWebsiteAdd(params: Website.RequestType): Promise<any> {
  return request(OFFICE_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { _id: string }): Promise<any> {
  return request(OFFICE_DELETE, {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request(OFFICE_UPDATE, {
    method: 'PUT',
    data: params,
  });
}

export async function getOfficeInfo(params: any): Promise<any> {
  return request(OFFICE_INFO, {
    method: 'get',
    params,
  });
}

// 获取详情
export async function getDetailInfo(params: { detailId: string }): Promise<any> {
  return request(DETAIL_INFO, {
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
