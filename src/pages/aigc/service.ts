/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-05-25 12:47:12
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

// 获取网站列表
export async function getAIGCList(params: any): Promise<Website.ResponseInfo> {
  return request(SERVICE_MAP.AIGC_LIST, {
    method: 'POST',
    data: params,
  });
}

// 新增网站
export async function getWebsiteAdd(params: Website.RequestType): Promise<any> {
  return request(SERVICE_MAP.AIGC_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { _id: string }): Promise<any> {
  return request(SERVICE_MAP.AIGC_DELETE, {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request(SERVICE_MAP.AIGC_UPDATE, {
    method: 'PUT',
    data: params,
  });
}
