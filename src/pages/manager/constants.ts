/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/constants.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-18 22:55:29
 * :last editor: 张德志
 * :date last edited: 2022-11-18 22:57:04
 */

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

// 操作类型
export const OPERATION_TYPE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

export const OPERATION_TEXT = {
  [OPERATION_TYPE.ADD]: '新增网站',
  [OPERATION_TYPE.EDIT]: '编辑网站',
};

export const SEX_MAP = [
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 2,
  },
];
