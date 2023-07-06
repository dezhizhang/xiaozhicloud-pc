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
    label: '开发IDE',
    value: 'ide',
  },
  {
    label: '摄影工具',
    value: 'photographic',
  },
  {
    label: '翻墙通道',
    value: 'wall-climbing',
  },
  {
    label: '设计神器',
    value: 'design-artifact',
  },
  {
    label: 'chatgpt',
    value: 'chatgpt',
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
