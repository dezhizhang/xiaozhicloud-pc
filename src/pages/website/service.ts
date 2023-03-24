import request from '@/utils/request';
import { SERVICE_MAP } from '@/utils/service';

// router.post(`${APIV1}/website/list`, controller.website.list);
// router.post(`${APIV1}/website/list`, controller.website.add);

// 获取网站列表
export async function getWebsiteList(params: Website.RequestType): Promise<Website.ResponseData> {
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
