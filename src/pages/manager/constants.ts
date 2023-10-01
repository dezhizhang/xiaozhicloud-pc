/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/constants.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-18 22:55:29
 * :last editor: 张德志
 * :date last edited: 2023-10-01 17:03:18
 */

export const STATUS_TYPE = [
  {
    label: '启用',
    value: '1',
  },
  {
    label: '禁用',
    value: '0',
  },
];

export const IS_ADMIN_LIST = [
  {
    label: '是',
    value: 1,
  },
  {
    label: '否',
    value: 0,
  },
];

// 操作类型
export const OPERATION_TYPE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

export const OPERATION_TEXT = {
  [OPERATION_TYPE.ADD]: '新增管理员',
  [OPERATION_TYPE.EDIT]: '编辑管理员',
};

export const GENDER_MAP = [
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 2,
  },
];
