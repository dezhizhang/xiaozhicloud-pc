/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/office/constants.ts
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-07-04 19:13:01
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
      value: '',
    },
    {
      label: '工作总结',
      value: '',
    },
    {
      label: '教育课件',
      value: '',
    },
    {
      label: '晚会颁奖',
      value: '',
    },
    {
      label: '节假节日',
      value: '',
    },
    {
      label: '企业培训',
      value: '',
    },
    {
      label: '企业宣传',
      value: '',
    },
    {
      label: '相册图集',
      value: '',
    },
    {
      label: '营销策划',
      value: '',
    },
    {
      label: '商业计划书',
      value: '',
    },
    {
      label: '个人简历',
      value: '',
    },
    {
      label: '岗位竞聘',
      value: '',
    },
    {
      label: '论文答辩',
      value: '',
    },
    {
      label: '产品发布',
      value: '',
    },
    {
      label: '婚庆爱情',
      value: '',
    },
    {
      label: '生日聚会',
      value: '',
    },
    {
      label: 'PPT图表',
      value: '',
    },
    {
      label: 'PPT背景',
      value: '',
    },
    {
      label: 'Keynote模板',
      value: '',
    },
    {
      label: '医学护理',
      value: '',
    },
    {
      label: '其他',
      value: '',
    },
  ],
  [OFFICE_TYPE.WORD]: [{}],
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

export const WEBSITE_TYPE = [
  {
    label: 'word模板',
    value: 'word',
  },
  {
    label: 'ptt模板',
    value: 'ptt',
  },
  {
    label: 'excel模板',
    value: 'excel',
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
