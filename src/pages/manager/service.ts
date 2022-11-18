/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/service.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-12 21:38:54
 * :last editor: 张德志
 * :date last edited: 2022-11-18 12:40:24
 */
import { request } from 'umi';

/** 获取当前的用户 GET /api/currentUser */
export async function getManagerList(params: Managers.DataType) {
  return request<Managers.ResponseList>('/api/v1/manager/list', {
    method: 'POST',
    data: params,
  });
}

export async function postUserAdd(params: Managers.RequestType) {
  return request<Managers.ResponseList>('/api/v1/manager/add', {
    method: 'POST',
    data: params,
  });
}
