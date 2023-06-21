/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/office/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-06-21 15:28:25
 */
// 操作类型
export const OPERATION_TYPE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

export const OPERATION_TEXT = {
  [OPERATION_TYPE.ADD]: '新增网站',
  [OPERATION_TYPE.EDIT]: '编辑网站',
};

export const WEBSITE_TYPE = [
  {
    label: 'world模板',
    value: 'world',
  },
  {
    label: 'ptt模板',
    value: 'ptt',
  },
  {
    label: 'exce模板',
    value: 'excel',
  },
  {
    label: '简历模板',
    value: 'resume',
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
