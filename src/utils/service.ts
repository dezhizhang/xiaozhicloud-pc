export const BASE_URL = '/api/v1';

const SERVICE_MAP = {
  // 获取网站列表
  WEBSITE_LIST: `/website/list`,
  WEBSITE_ADD: `/website/add`,
  WEBSITE_DELETE: `/website/delete`,
  WEBSITE_UPDATE: `/website/edit`,

  // 获取网站
};

Object.keys(SERVICE_MAP).map((item: string) => {
  SERVICE_MAP[item] = `${BASE_URL}${SERVICE_MAP[item]}`;
});

export default SERVICE_MAP;
