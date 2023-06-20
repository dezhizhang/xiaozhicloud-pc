/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/aigc/intelligent-products/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-25 12:44:12
 * :last editor: 张德志
 * :date last edited: 2023-06-20 20:40:08
 */

export const baseUrl = '/aigc/intelligent-products';

export enum TOP_CLASSIFY_TYPE {
  //写作平台
  WRITING_PLATFORM = 'writing-platform',
  //互动平台
  INTERACTIVE_PLATFORM = 'interactive-platform',
  //绘画平台
  PAINTING_PLATFORM = 'painting-platform',
  //视觉平台
  VISUAL_PLATFORM = 'visual-platform',
  //影视平台
  TELEVISION_PLATFORMS = 'television-platforms',
  //语音平台
  VOICE_PLATFORM = 'voice-platform',
  //企业平台
  ENTERPRISE_PLATFORM = 'enterprise-platform',
  //办公平台
  OFFICE_PLATFORM = 'office-platform',
  //运营平台
  OPERATION_PLATFORM = 'operation-platform',
  //学习平台
  LEARNING_PLATFORM = 'learning-platform',
  //科研平台
  RESEARCH_PLATFORM = 'research-platform',
}

export const TOP_CLASSIFY = [
  {
    label: '写作平台',
    value: TOP_CLASSIFY_TYPE.WRITING_PLATFORM,
  },
  {
    label: '互动平台',
    value: TOP_CLASSIFY_TYPE.INTERACTIVE_PLATFORM,
  },
  {
    label: '绘画平台',
    value: TOP_CLASSIFY_TYPE.PAINTING_PLATFORM,
  },
  {
    label: '视觉平台',
    value: TOP_CLASSIFY_TYPE.VISUAL_PLATFORM,
  },
  {
    label: '影视平台',
    value: TOP_CLASSIFY_TYPE.TELEVISION_PLATFORMS,
  },
  {
    label: '语音平台',
    value: TOP_CLASSIFY_TYPE.VOICE_PLATFORM,
  },
  {
    label: '企业平台',
    value: TOP_CLASSIFY_TYPE.ENTERPRISE_PLATFORM,
  },
  {
    label: '办公平台',
    value: TOP_CLASSIFY_TYPE.OFFICE_PLATFORM,
  },
  {
    label: '运营平台',
    value: TOP_CLASSIFY_TYPE.OPERATION_PLATFORM,
  },
  {
    label: '学习平台',
    value: TOP_CLASSIFY_TYPE.LEARNING_PLATFORM,
  },
  {
    label: '科研平台',
    value: TOP_CLASSIFY_TYPE.RESEARCH_PLATFORM,
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
  //写作平台
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
  //互动平台
  [TOP_CLASSIFY_TYPE.INTERACTIVE_PLATFORM]: [
    {
      label: '聊天机器人',
      value: 'chatbot',
    },
  ],
  //绘画平台
  [TOP_CLASSIFY_TYPE.PAINTING_PLATFORM]: [
    {
      label: '聊天机器人',
      value: 'chatbot',
    },
  ],
  //视觉平台
  [TOP_CLASSIFY_TYPE.VISUAL_PLATFORM]: [
    {
      label: '视觉设计',
      value: 'visual-design',
    },
    {
      label: '头像化身',
      value: 'avatar-design',
    },
  ],
  //影视平台
  [TOP_CLASSIFY_TYPE.TELEVISION_PLATFORMS]: [
    {
      label: '视频生成',
      value: 'video-generation',
    },
    {
      label: '数字虚拟人',
      value: 'digital-virtual-humans',
    },
  ],
  //语音平台
  [TOP_CLASSIFY_TYPE.VOICE_PLATFORM]: [
    {
      label: '语音生成',
      value: 'speech-generation',
    },
    {
      label: '语音识别',
      value: 'speech-recognition',
    },
  ],
  //企业平台
  [TOP_CLASSIFY_TYPE.ENTERPRISE_PLATFORM]: [
    {
      label: '企业服务',
      value: 'enterprise-services',
    },
  ],
  //
  [TOP_CLASSIFY_TYPE.OFFICE_PLATFORM]: [
    {
      label: '办公工具',
      value: 'office-tools',
    },
  ],
  // 运营平台
  [TOP_CLASSIFY_TYPE.OPERATION_PLATFORM]: [
    {
      label: '',
      value: '',
    },
  ],
  //学习平台
  [TOP_CLASSIFY_TYPE.LEARNING_PLATFORM]: [
    {
      label: '',
      value: '',
    },
  ],
  // 科研平台
  [TOP_CLASSIFY_TYPE.RESEARCH_PLATFORM]: [
    {
      label: '',
      value: '',
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
