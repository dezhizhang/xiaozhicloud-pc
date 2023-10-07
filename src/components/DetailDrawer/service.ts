/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/components/DetailDrawer/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-10-07 20:42:26
 * :last editor: 张德志
 * :date last edited: 2023-10-07 20:50:56
 */

import request from '@/utils/request';

// 详情添加
export async function detailAdd(params: any): Promise<any> {
  return request('/api/v1/detail/add', {
    method: 'POST',
    data: params,
  });
}
