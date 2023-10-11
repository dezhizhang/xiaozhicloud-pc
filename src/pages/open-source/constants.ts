/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/open-source/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-25 12:44:12
 * :last editor: 张德志
 * :date last edited: 2023-10-11 09:21:19
 */

export const OPEN_SOURCE_TYPE = {
  //AI聊天
  AI_CHAT: 'ai-chat',
  //AI绘画
  AI_PAINTING: 'ai-painting',
  //视频直播
  LIVE_VIDEO: 'live-video',
  //电商新零售
  COMMERCE_NEW_RETAIL: 'commerce-new-retail',
  //云知识库
  CLOUD_KNOWLEDGE_BASE: 'cloud-knowledge-base',
  //活动投票
  ACTIVITY_VOTING: 'activity-voting',
  //协同办公
  COLLABORATIVE_OFFICE: 'collaborative-office',
  //教育教学
  EDUCATION_TEACHING: 'education-teaching',
  //分类系统
  CLASSIFICATION_SYSTEM: 'classification-system',
  //医疗健康
  MEDICAL_HEALTH: 'medical-health',
  // 预算管理
  BUDGET_MANAGEMENT: 'budget-management',
  //生产制造
  MANUFACTURING: 'manufacturing',
  //流程管理
  PROCESS_MANAGEMENT: 'process-management',
  //智慧物联
  AI_INTERNET_THINGS: 'ai-internet-things',
  // 商业智能
  BUSINESS_INTELLIGENCE: 'business-intelligence',
};

export const OPEN_SOURCE = [
  {
    label: 'AI聊天',
    value: OPEN_SOURCE_TYPE.AI_CHAT,
  },
  {
    label: 'AI绘画',
    value: OPEN_SOURCE_TYPE.AI_PAINTING,
  },
  {
    label: '视频直播',
    value: OPEN_SOURCE_TYPE.LIVE_VIDEO,
  },
  {
    label: '电商新零售',
    value: OPEN_SOURCE_TYPE.COMMERCE_NEW_RETAIL,
  },
  {
    label: '协同办公',
    value: OPEN_SOURCE_TYPE.COLLABORATIVE_OFFICE,
  },
  {
    label: '云知识库',
    value: OPEN_SOURCE_TYPE.CLOUD_KNOWLEDGE_BASE,
  },
  {
    label: '活动投票',
    value: OPEN_SOURCE_TYPE.ACTIVITY_VOTING,
  },
  {
    label: '分类系统',
    value: OPEN_SOURCE_TYPE.CLASSIFICATION_SYSTEM,
  },
  {
    label: '教育教学',
    value: OPEN_SOURCE_TYPE.EDUCATION_TEACHING,
  },
  {
    label: '医疗健康',
    value: OPEN_SOURCE_TYPE.MEDICAL_HEALTH,
  },
  {
    label: '预算管理',
    value: OPEN_SOURCE_TYPE.BUDGET_MANAGEMENT,
  },
  {
    label: '生产制造',
    value: OPEN_SOURCE_TYPE.MANUFACTURING,
  },
  {
    label: '流程管理',
    value: OPEN_SOURCE_TYPE.PROCESS_MANAGEMENT,
  },
  {
    label: '智慧物联',
    value: OPEN_SOURCE_TYPE.AI_INTERNET_THINGS,
  },
  {
    label: '商业智能',
    value: OPEN_SOURCE_TYPE.BUSINESS_INTELLIGENCE,
  },
];

export const baseUrl = '/open-source';

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
