/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/open-source/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-05-25 12:44:12
 * :last editor: 张德志
 * :date last edited: 2023-09-26 07:57:34
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
  //教育教学
  EDUCATION_TEACHING: 'education-teaching',
  //医疗健康
  MEDICAL_HEALTH: 'medical-health',
  BUDGET_MANAGEMENT: 'budget-management',
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
    label: '云知识库',
    value: OPEN_SOURCE_TYPE.CLOUD_KNOWLEDGE_BASE,
  },
  {
    label: '活动投票',
    value: OPEN_SOURCE_TYPE.ACTIVITY_VOTING,
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
];

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
  //开发平台
  DEVELOPMENT_PLATFORM = 'development-platform',
  // 生活平台
  LIVING_PLATFORM = 'living-platform',
  //游戏平台
  GAME_PLATFORM = 'game-platform',

  //权威机构
  AUTHORITY_INSTITUTION = 'authority-institution',
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
    value: TOP_CLASSIFY_TYPE.DEVELOPMENT_PLATFORM,
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
    {
      label: '文献阅读',
      value: 'literature-reading',
    },
    {
      label: '网络文学',
      value: 'network-literature',
    },
  ],
  //互动平台
  [TOP_CLASSIFY_TYPE.INTERACTIVE_PLATFORM]: [
    {
      label: '聊天机器人',
      value: 'chatbot',
    },
    {
      label: '知识问答',
      value: 'question-answering',
    },
    {
      label: '搜索引擎',
      value: 'search-engines',
    },
    {
      label: '搜索图书',
      value: 'search-books',
    },
  ],
  //绘画平台
  [TOP_CLASSIFY_TYPE.PAINTING_PLATFORM]: [
    {
      label: '绘画生成',
      value: 'drawing-generation',
    },
    {
      label: '绘画提示',
      value: 'drawing-tips',
    },
    {
      label: '绘画社区',
      value: 'painting-community',
    },
    {
      label: '绘画模型',
      value: 'painting-models',
    },
    {
      label: '图形工作站',
      value: 'graphic-work-station',
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
    {
      label: '图像处理',
      value: 'image-processing',
    },
    {
      label: '图像擦除',
      value: 'image-erase',
    },
    {
      label: '服装设计',
      value: 'costume-designing',
    },
    {
      label: '空间设计',
      value: 'space-design',
    },
    {
      label: '商业摄影',
      value: 'photography',
    },
    {
      label: '平面素材',
      value: 'flat-materials',
    },
    {
      label: '字体设计',
      value: 'font-design',
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
    {
      label: '视频后期',
      value: 'video-post',
    },
    {
      label: '视频后期',
      value: 'video-post',
    },
    {
      label: '动作捕捉',
      value: 'motion-capture',
    },
    {
      label: '人物换脸',
      value: 'character-face-changing',
    },
    {
      label: '视频模型',
      value: 'video-model',
    },
    {
      label: '视频模型',
      value: 'video-model',
    },
    {
      label: '字幕翻译',
      value: 'subtitling',
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
    {
      label: '语音合成',
      value: 'speech-synthesis',
    },
    {
      label: '语音降噪',
      value: 'speech-noise-reduction',
    },
    {
      label: '音乐制作',
      value: 'music-production',
    },
    {
      label: '音乐鉴赏',
      value: 'music-appreciation',
    },
  ],
  //企业平台
  [TOP_CLASSIFY_TYPE.ENTERPRISE_PLATFORM]: [
    {
      label: '企业服务',
      value: 'enterprise-services',
    },
    {
      label: '企业效率',
      value: 'enterprise-efficiency',
    },
    {
      label: '人力资源',
      value: 'human-resources',
    },
    {
      label: '电子合同',
      value: 'electronic-contract',
    },
    {
      label: '法律服务',
      value: 'legal-service',
    },
    {
      label: '金融事务',
      value: 'financial-affairs',
    },
  ],
  //办公平台
  [TOP_CLASSIFY_TYPE.OFFICE_PLATFORM]: [
    {
      label: '办公工具',
      value: 'office-tools',
    },
    {
      label: '办公效率',
      value: 'office-efficiency',
    },
    {
      label: '文档处理',
      value: 'document-processing',
    },
    {
      label: '思维导图',
      value: 'mind-mapping',
    },
    {
      label: '语言翻译',
      value: 'translation',
    },
    {
      label: '制作ppt',
      value: 'create-ppt',
    },
    {
      label: 'ppt资源',
      value: 'ppt-resources',
    },
  ],
  // 运营平台
  [TOP_CLASSIFY_TYPE.OPERATION_PLATFORM]: [
    {
      label: '营销工具',
      value: 'marketing-tools',
    },
    {
      label: '行业门户',
      value: 'industry-portal',
    },
    {
      label: '流量优化',
      value: 'traffic-optimization',
    },
    {
      label: '流量优化',
      value: 'traffic-optimization',
    },
    {
      label: '自媒体账号',
      value: 'personal-media-account',
    },
    {
      label: '舆情分析',
      value: 'public-opinion-analysis',
    },
    {
      label: '数据分析',
      value: 'data-analysis',
    },
    {
      label: '行业报告',
      value: 'industry-reports',
    },
  ],
  //学习平台
  [TOP_CLASSIFY_TYPE.LEARNING_PLATFORM]: [
    {
      label: 'AIGC视频课',
      value: 'aigc-video',
    },
    {
      label: 'AIGC视频课',
      value: 'aigc-video',
    },
    {
      label: '运营启发',
      value: 'operational-inspiration',
    },
    {
      label: '好书推荐',
      value: 'good-book-recommendation',
    },
    {
      label: '好书推荐',
      value: 'good-book-recommendation',
    },
    {
      label: '教育助理',
      value: 'education-assistant',
    },
  ],
  // 科研平台
  [TOP_CLASSIFY_TYPE.RESEARCH_PLATFORM]: [
    {
      label: '',
      value: '',
    },
  ],
  //开发平台
  [TOP_CLASSIFY_TYPE.DEVELOPMENT_PLATFORM]: [
    {
      label: '开发框架',
      value: 'framework',
    },
    {
      label: '开发者社区',
      value: 'developer-community',
    },
    {
      label: '开放平台',
      value: 'open-platform',
    },
    {
      label: '辅助编程',
      value: 'computer-programing',
    },
    {
      label: '开发课堂',
      value: 'developing-classrooms',
    },
    {
      label: 'SQL数据库',
      value: 'sql-database',
    },
    {
      label: '代码编程',
      value: 'code-programming',
    },
    {
      label: '训练模型',
      value: 'training-model',
    },
    {
      label: '应用接口',
      value: 'application-interface',
    },
  ],
  //生活平台
  [TOP_CLASSIFY_TYPE.LIVING_PLATFORM]: [
    {
      label: '生活助手',
      value: 'life-assistant',
    },
    {
      label: '旅行助手',
      value: 'travel-assistant',
    },
    {
      label: '好玩有趣',
      value: 'fun-and-fun',
    },
    {
      label: '好玩有趣',
      value: 'fun-and-fun',
    },
    {
      label: '美妆工具',
      value: 'beauty-tools',
    },
    {
      label: '公益应用',
      value: 'public-applications',
    },
  ],
  // 游戏平台
  [TOP_CLASSIFY_TYPE.GAME_PLATFORM]: [
    {
      label: '游戏应用',
      value: 'game-applications',
    },
    {
      label: '元宇宙',
      value: 'metaverse',
    },
    {
      label: '游戏开发',
      value: 'game-develop',
    },
  ],

  //权威机构
  [TOP_CLASSIFY_TYPE.AUTHORITY_INSTITUTION]: [
    {
      label: '相关组织',
      value: 'related-organizations',
    },
    {
      label: '官方活动',
      value: 'official-activities',
    },
    {
      label: '管理机构',
      value: 'government',
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
