/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/utils/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-19 12:23:34
 */
export const BASE_URL = '/api/v1';

const SERVICE_MAP = {
  // 会员管理
  MANAGER_LIST: `/manager/list`,
  MANAGER_ADD: `/manager/add`,
  MANAGER_UPDATE: `/manager/edit`,
  MANAGER_DELETE: `/manager/delete`,
  // 获取网站列表
  WEBSITE_LIST: `/website/list`,
  WEBSITE_ADD: `/website/add`,
  WEBSITE_DELETE: `/website/delete`,
  WEBSITE_UPDATE: `/website/edit`,

  // 获取网站列表
  ADVERT_LIST: `/advert/list`,
  ADVERT_ADD: `/advert/add`,
  ADVERT_DELETE: `/advert/delete`,
  ADVERT_UPDATE: `/advert/edit`,

  // 详情
  DETAIL_INFO: '/detail/info',
  DETAIL_ADD: '/detail/add',

  // 获取网站列表
  AIGC_LIST: `/aigc/list`,
  AIGC_ADD: `/aigc/add`,
  AIGC_INFO: '/aigc/info',
  AIGC_DELETE: `/aigc/delete`,
  AIGC_UPDATE: `/aigc/edit`,

  // 智能产品
  INTELLIGENT_PRODUCTS_LIST: '/aigc/intelligent-products/list',

  // 办公文档
  OFFICE_LIST: `/office/list`,
  OFFICE_ADD: `/office/add`,
  OFFICE_DELETE: `/office/delete`,
  OFFICE_UPDATE: `/office/edit`,

  // 办公文档
  DESIGIN_LIST: `/design/list`,
  DESIGIN_ADD: `/design/add`,
  DESIGIN_DELETE: `/design/delete`,
  DESIGIN_UPDATE: `/design/edit`,

  // 软件工具
  TOOL_LIST: `/tool/list`,
  TOOL_ADD: `/tool/add`,
  TOOL_DELETE: `/tool/delete`,
  TOOL_UPDATE: `/tool/edit`,
};

Object.keys(SERVICE_MAP).map((item: string) => {
  SERVICE_MAP[item] = `${BASE_URL}${SERVICE_MAP[item]}`;
});

export default SERVICE_MAP;
