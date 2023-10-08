/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/constants.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-18 22:55:29
 * :last editor: 张德志
 * :date last edited: 2023-10-09 07:46:40
 */

export const FILTER_CONFIG = {
  search_config: [
    {
      input_type: 2,
      key: 'report_type',
      label: '报告类型',
      value: [
        {
          label: '行业研究',
          value: `行业研究`,
        },
        {
          label: '公司研究',
          value: `公司研究`,
        },
        {
          label: '宏观策略',
          value: '宏观策略',
        },
        {
          label: '招股书',
          value: '招股书',
        },
        {
          label: '其他',
          value: '其他',
        },
      ],
    },

    {
      input_type: 10,
      key: 'institution_name',
      maxKeywordLength: 20,
      label: '机构名称',
      value: [],
    },
  ],
};

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
