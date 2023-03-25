/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/banner/service.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-12 21:38:54
 * :last editor: 张德志
 * :date last edited: 2022-11-19 08:56:40
 */
import { request } from 'umi';

/** 获取当前的用户 GET /api/currentUser */
export async function getBannerList(params: Managers.DataType) {
  return request<Managers.ResponseList>('/api/v1/banner/list', {
    method: 'POST',
    data: params,
  });
}

export async function postUserAdd(params: Managers.RequestType) {
  return request<Managers.ResponseList>('/api/v1/banner/add', {
    method: 'POST',
    data: params,
  });
}

export async function deleteManager(params: { id: string }) {
  return request<Managers.ResponseList>('/api/v1/banner/delete', {
    method: 'DELETE',
    data: params,
  });
}
