/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-25 12:44:12
 * :last editor: 张德志
 * :date last edited: 2023-05-26 17:37:34
 */

export const baseUrl = '/aigc/intelligent-products';

export enum TOP_CLASSIFY_TYPE {
  WRITING_PLATFORM = 'writing-platform',
}

export const TOP_CLASSIFY = [
  {
    label: '写作平台',
    value: TOP_CLASSIFY_TYPE.WRITING_PLATFORM,
  },
  {
    label: '互动平台',
    value: 'interactive-platform',
  },
  {
    label: '绘画平台',
    value: 'painting-platform',
  },
  {
    label: '视觉平台',
    value: 'visual-platform',
  },
  {
    label: '影视平台',
    value: 'television-platforms',
  },
  {
    label: '语音平台',
    value: 'voice-platform',
  },
  {
    label: '企业平台',
    value: 'enterprise-platform',
  },
  {
    label: '办公平台',
    value: 'office-platform',
  },
  {
    label: '运营平台',
    value: 'operation-platform',
  },
  {
    label: '学习平台',
    value: 'learning-platform',
  },
  {
    label: '科研平台',
    value: 'research-platform',
  },
  {
    label: '开发平台',
    value: 'development-platform',
  },
  {
    label: '生活平台',
    value: 'living-platform',
  },
  {
    label: '游戏平台',
    value: 'game-platform',
  },
  {
    label: '权威机构',
    value: 'authority-platform',
  },
];

// 二级分类
export const SECONDARY_CLASSIFY = {
  [TOP_CLASSIFY_TYPE.WRITING_PLATFORM]: [
    {
      label: '写作工具',
      value: 'writing-tools',
    },
    {
      label: '自然语言',
      value: 'natural-language',
    },
    {
      label: '写作提示',
      value: 'writing-tips',
    },
    {
      label: '内容检测',
      value: 'content-detection',
    },
  ],
};

// 操作类型
export const OPERATION_TYPE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

export const OPERATION_TEXT = {
  [OPERATION_TYPE.ADD]: '新增人工智能',
  [OPERATION_TYPE.EDIT]: '编辑人工智能',
};

export const AIGC_TYPE = [
  {
    label: '新闻',
    value: 'news',
  },
  {
    label: '工具',
    value: 'tool',
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
