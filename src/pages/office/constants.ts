/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/office/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-04 21:51:28
 */

export const baseURL = '/office';

export enum OFFICE_TYPE {
  PTT = 'ppt',
  WORD = 'word',
  EXCEL = 'excel',
}

// 操作类型
export const OPERATION_TYPE = {
  ADD: 'ADD',
  EDIT: 'EDIT',
};

export const OFFICE_MAP = {
  //ppt适用场影
  [OFFICE_TYPE.PTT]: [
    {
      label: '述职汇报',
      value: 'report-work',
    },
    {
      label: '工作总结',
      value: 'work-summary',
    },
    {
      label: '教育课件',
      value: 'educational-courseware',
    },
    {
      label: '晚会颁奖',
      value: 'evening-awards',
    },
    {
      label: '节假节日',
      value: 'holidays-festivals',
    },
    {
      label: '企业培训',
      value: 'enterprise-training',
    },
    {
      label: '企业宣传',
      value: 'propaganda',
    },
    {
      label: '相册图集',
      value: 'album-atlas',
    },
    {
      label: '营销策划',
      value: 'marketing-planning',
    },
    {
      label: '商业计划书',
      value: 'business-plan',
    },
    {
      label: '个人简历',
      value: 'personal-resume',
    },
    {
      label: '岗位竞聘',
      value: 'job-competition',
    },
    {
      label: '论文答辩',
      value: 'thesis-defense',
    },
    {
      label: '产品发布',
      value: 'product-launch',
    },
    {
      label: '婚庆爱情',
      value: 'wedding-love',
    },
    {
      label: '生日聚会',
      value: 'birthday-party',
    },
    {
      label: 'PPT图表',
      value: 'ppt-chart',
    },
    {
      label: 'PPT背景',
      value: 'ppt-background',
    },
    {
      label: 'Keynote模板',
      value: 'Keynote-template',
    },
    {
      label: '医学护理',
      value: 'medical-care',
    },
    {
      label: '其他',
      value: 'other',
    },
  ],
  [OFFICE_TYPE.WORD]: [
    {
      label: '简历',
      value: 'biographical-notes',
    },
    {
      label: '手抄报/小报',
      value: 'manuscript/tabloid',
    },
    {
      label: 'Word设计',
      value: 'word-design',
    },
    {
      label: '工作范文',
      value: 'work-model',
    },
    {
      label: '企业管理',
      value: 'enterprise-management',
    },
    {
      label: '校园教育',
      value: 'campus-education',
    },
    {
      label: '合同协议',
      value: 'contract-agreement',
    },
    {
      label: 'XMind',
      value: 'xmind',
    },
    {
      label: '期它',
      value: '',
    },
  ],
  // excel适用场影
  [OFFICE_TYPE.EXCEL]: [],
};

export const OPERATION_TEXT = {
  [OPERATION_TYPE.ADD]: '新增网站',
  [OPERATION_TYPE.EDIT]: '编辑网站',
};

//ppt风格
export const STYLES = [
  {
    label: '商务',
    value: 'commercial-affairs',
  },
  {
    label: '简约',
    value: 'simplicity',
  },
  {
    label: '酷炫',
    value: 'cool-dazzling',
  },
  {
    label: '微粒体',
    value: 'microsome',
  },
  {
    label: '中国风',
    value: 'chinoiserie',
  },
  {
    label: '小清新',
    value: 'little-fresh',
  },
  {
    label: '卡通',
    value: 'cartoon-film',
  },
];

export const OFFICE_TYPE_LIST = [
  {
    label: 'word模板',
    value: OFFICE_TYPE.WORD,
  },
  {
    label: 'ptt模板',
    value: OFFICE_TYPE.PTT,
  },
  {
    label: 'excel模板',
    value: OFFICE_TYPE.EXCEL,
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
