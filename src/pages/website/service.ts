import request from '@/utils/request';
import { SERVICE_MAP } from '@/utils/service';

// 获取网站列表
export async function getWebsiteList(params: any): Promise<Website.ResponseInfo> {
  return request(SERVICE_MAP.WEBSITE_LIST, {
    method: 'POST',
    data: params,
  });
}

// 新增网站
export async function getWebsiteAdd(params: Website.RequestType): Promise<any> {
  return request(SERVICE_MAP.WEBSITE_ADD, {
    method: 'POST',
    data: params,
  });
}

//删除网站
export async function getWebsiteDelete(params: { id: string }): Promise<any> {
  return request(SERVICE_MAP.WEBSITE_DELETE, {
    method: 'DELETE',
    data: params,
  });
}
