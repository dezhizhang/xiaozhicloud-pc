/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/open-source/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-10-02 09:59:56
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

/**
 * @description:获取开源列表
 * @return {*}
 */
export async function getOpenSourceList(params: any): Promise<OpenSource.ResponseData> {
  return request('/api/v1/open-source/list', {
    method: 'POST',
    data: params,
  });
}

/**
 * @description:
 * @param {Website} params
 * @return {*}
 */
export async function getAigcAdd(params: Website.RequestType): Promise<any> {
  return request('/api/v1/open-source/add', {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { _id: string }): Promise<any> {
  return request('/api/v1/open-source/delete', {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getOpenSourceUpdate(params: any): Promise<any> {
  return request('/api/v1/open-source/edit', {
    method: 'PUT',
    data: params,
  });
}

export async function getOpenSource(params: { id: string }) {
  return request('/api/v1/open-source/info', {
    method: 'GET',
    params,
  });
}

// 详情添加
export async function getDetailAdd(params: any): Promise<any> {
  return request('/api/v1/detail/add', {
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
