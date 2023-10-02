/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/friendly-link/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-10-02 10:28:13
 */
import request from '@/utils/request';
import SERVICE_MAP from '@/utils/service';

const { FRIENDLY_LINK_LIST, FRIENDLY_LINK_ADD, FRIENDLY_LINK_DELETE, FRIENDLY_LINK_UPDATE } =
  SERVICE_MAP;

// 获取网站列表
export async function getFriendlayLinkList(params: any): Promise<FriendlyLink.ResponseData> {
  return request(FRIENDLY_LINK_LIST, {
    method: 'POST',
    data: params,
  });
}

// 新增网站
export async function getWebsiteAdd(params: Website.RequestType): Promise<any> {
  return request(FRIENDLY_LINK_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { _id: string }): Promise<any> {
  return request(FRIENDLY_LINK_DELETE, {
    method: 'DELETE',
    data: params,
  });
}

// 编辑网站
export async function getWebsiteUpdate(params: any): Promise<any> {
  return request(FRIENDLY_LINK_UPDATE, {
    method: 'PUT',
    data: params,
  });
}
