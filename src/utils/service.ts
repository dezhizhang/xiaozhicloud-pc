/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/utils/service.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-21 20:07:32
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
  WEBSITE_INFO: '/website/info',

  // 获取网站列表
  ADVERT_LIST: `/advert/list`,
  ADVERT_ADD: `/advert/add`,
  ADVERT_DELETE: `/advert/delete`,
  ADVERT_UPDATE: `/advert/edit`,

  // 详情
  DETAIL_INFO: '/detail/info',
  DETAIL_ADD: '/detail/add',

  // 获取网站列表
  NEWS_INFORMATION_LIST: `/aigc/news-information/list`,
  NEWS_INFORMATION_ADD: `/aigc/news-information/add`,
  NEWS_INFORMATION_INFO: '/aigc/news-information/info',
  NEWS_INFORMATION_DELETE: `/aigc/news-information/delete`,
  NEWS_INFORMATION_UPDATE: `/aigc/news-information/edit`,

  // 智能产品
  INTELLIGENT_PRODUCTS_LIST: '/aigc/intelligent-products/list',
  INTELLIGENT_PRODUCTS_ADD: '/aigc/intelligent-products/add',
  INTELLIGENT_PRODUCTS_INFO: '/aigc/intelligent-products/info',
  INTELLIGENT_PRODUCTS_UPDATE: '/aigc/intelligent-products/edit',
  INTELLIGENT_PRODUCTS_DELETE: '/aigc/intelligent-products/delete',

  // 办公文档
  OFFICE_LIST: `/office/list`,
  OFFICE_ADD: `/office/add`,
  OFFICE_INFO: `/office/info`,
  OFFICE_DELETE: `/office/delete`,
  OFFICE_UPDATE: `/office/edit`,

  // 办公文档
  DESIGIN_LIST: `/design/list`,
  DESIGIN_ADD: `/design/add`,
  DESIGIN_INFO: `/design/info`,
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
