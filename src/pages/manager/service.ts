/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/service.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-12 21:38:54
 * :last editor: 张德志
 * :date last edited: 2022-11-18 23:23:30
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

// /** 获取当前的用户 GET /api/currentUser */
export async function getManagerList(params: Managers.DataType): Promise<any> {
  return request(SERVICE_MAP.MANAGER_LIST, {
    method: 'POST',
    data: params,
  });
}

export async function getManagerAdd(params: Managers.RequestType) {
  return request(SERVICE_MAP.MANAGER_ADD, {
    method: 'POST',
    data: params,
  });
}

export async function deleteManager(params: { id: string }) {
  return request(SERVICE_MAP.MANAGER_DELETE, {
    method: 'DELETE',
    data: params,
  });
}
