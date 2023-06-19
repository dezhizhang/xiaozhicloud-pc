/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-06-19 09:08:54
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: '@/pages/login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/workbench',
    name: '工作台',
    icon: 'icon-gongzuotai',
    component: '@/pages/workbench',
  },
  {
    name: '会员管理',
    icon: 'icon-huiyuanguanli',
    path: '/manager',
    component: '@/pages/manager',
  },
  {
    name: '人工智能',
    icon: 'icon-guanggaoguanli',
    path: '/aigc',
    routes: [
      {
        name: '新闻资讯',
        path: '/aigc/news-information',
        key: 'aigc-news-information',
        component: '@/pages/aigc',
      },
      {
        name: '智能产品',
        path: '/aigc/intelligent-products',
        component: '@/pages/aigc',
      },
      {
        path: '/aigc/:detailId',
        name: '众工智能详情',
        hideInMenu: true,
        component: '@/pages/aigc/[type]',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '广告管理',
    icon: 'icon-guanggaoguanli',
    path: '/advert',
    component: '@/pages/advert',
  },
  {
    name: '网站建设',
    icon: 'icon-a-wangzhanguanli2x',
    path: '/website',
    key: 'website',
    component: '@/pages/website',
  },
  {
    name: '网站建设详情',
    icon: 'icon-a-wangzhanguanli2x',
    path: '/website/:id',
    key: 'website-id',
    hideInMenu: true,
    component: '@/pages/website/[type]',
  },
  {
    name: '办公文档',
    icon: 'icon-bangongwendangshenqing',
    path: '/office',
    component: '@/pages/office',
  },
  {
    name: '设计资源',
    icon: 'icon-UIsheji',
    path: '/design',
    component: '@/pages/design',
  },
  {
    name: '软件工具',
    icon: 'icon-ruanjian-',
    path: '/tool',
    component: '@/pages/tool',
  },
  {
    path: '/',
    redirect: '/workbench',
  },
  {
    component: './404',
  },
];
