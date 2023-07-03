/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/website/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-03 22:57:15
 */
export const baseURL = '/website';

// 操作类型
export const OPERATION_TYPE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

export const OPERATION_TEXT = {
  [OPERATION_TYPE.ADD]: '新增网站',
  [OPERATION_TYPE.EDIT]: '编辑网站',
};

// 一级分类
export const WEBSITE_TYPE = [
  {
    label: '企业网站',
    value: 'enterprise',
  },
  {
    label: '个人网站',
    value: 'personal',
  },
  {
    label: '商城网站',
    value: 'mall',
  },
  {
    label: '后台网站',
    value: 'backend',
  },
  {
    label: '免费建站',
    value: 'free',
  },
];

// 网站颜色
export const WEBSITE_COLOR = [
  {
    label: '红色',
    value: 'red',
  },
  {
    label: '粉色',
    value: 'pink',
  },
  {
    label: '橙色',
    value: 'orange',
  },
  {
    label: '黄色',
    value: 'yellow',
  },
  {
    label: '绿色',
    value: 'green',
  },
  {
    label: '蓝色',
    value: 'blue',
  },
  {
    label: '紫色',
    value: 'purple',
  },
  {
    label: '棕色',
    value: 'brown',
  },
  {
    label: '黑色',
    value: 'black',
  },
  {
    label: '灰色',
    value: 'grey',
  },
  {
    label: '灰色',
    value: 'grey',
  },
];

// 行业分类
export const INDUSTRY_CLASSIFICATION = [
  {
    label: '装修',
    value: 'renovation',
  },
  {
    label: '招聘',
    value: 'recruit',
  },
  {
    label: '中介',
    value: 'intermediary',
  },
  {
    label: '法律',
    value: 'law',
  },
  {
    label: '金融',
    value: 'finance',
  },
  {
    label: '能源',
    value: 'energy',
  },
  {
    label: '物流',
    value: 'logistics',
  },
  {
    label: '建筑',
    value: 'build',
  },
  {
    label: '工业',
    value: 'industry',
  },
  {
    label: '农业',
    value: 'agriculture',
  },
  {
    label: '通信',
    value: 'communication',
  },
  {
    label: 'IT科技',
    value: 'it-technology',
  },
  {
    label: 'IDC服务器',
    value: 'idc-server',
  },
  {
    label: '汽车',
    value: 'car',
  },
  {
    label: '旅行',
    value: 'travel',
  },
  {
    label: '酒店',
    value: 'hotel',
  },
  {
    label: '运动',
    value: 'motion',
  },
  {
    label: '健康',
    value: 'health',
  },
  {
    label: '时尚',
    value: 'fashion',
  },
  {
    label: '服饰',
    value: 'equipage',
  },
  {
    label: '房产',
    value: 'real-estate',
  },
  {
    label: '医疗',
    value: 'medical-treatment',
  },
];

// 网站风格
export const WEBSITE_STYLES = [
  {
    label: '欧美',
    value: 'europe-america',
  },
  {
    label: '韩国',
    value: 'south-korea',
  },
  {
    label: '韩国',
    value: 'china',
  },
  {
    label: '日本',
    value: 'japan',
  },
  {
    label: '创意',
    value: 'originality',
  },
  {
    label: '复古',
    value: 'retro',
  },
];

export const STATUS_TYPE = [
  {
    label: '启用',
    value: 'enable',
  },
  {
    label: '禁用',
    value: 'disable',
  },
];

export const DEFAULT_PAGINATION = {
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true,
  pageSizeOptions: ['10', '50', '100', '150', '200'],
};
