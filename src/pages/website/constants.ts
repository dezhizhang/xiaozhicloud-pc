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
    label: '免费建站',
    value: 'free',
  },
];

export const STATUS_TYPE = [
  {
    label: '禁用',
    value: 'disable',
  },
  {
    label: '启用',
    value: 'enable',
  },
];

export const DEFAULT_PAGINATION = {
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true,
  pageSizeOptions: ['10', '50', '100', '150', '200'],
};
