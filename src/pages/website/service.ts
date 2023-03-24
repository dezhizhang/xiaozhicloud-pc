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

export async function deleteManager(params: { id: string }) {
  return request<Managers.ResponseList>('/api/v1/manager/delete', {
    method: 'DELETE',
    data: params,
  });
}
