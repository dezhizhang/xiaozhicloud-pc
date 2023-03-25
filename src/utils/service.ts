export const BASE_URL = '/api/v1';

const SERVICE_MAP = {
  // 获取网站列表
  WEBSITE_LIST: `/website/list`,
  WEBSITE_ADD: `/website/add`,
  WEBSITE_DELETE: `/website/delete`,
  WEBSITE_UPDATE: `/website/edit`,

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
