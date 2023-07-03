/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/website/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-03 20:47:10
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
