/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-06-21 17:00:55
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
        component: '@/pages/aigc/news-information',
      },
      {
        path: '/aigc/news-information/:detailId',
        name: '新闻资讯详情',
        hideInMenu: true,
        component: '@/pages/aigc/news-information/[type]',
      },
      {
        name: '智能产品',
        path: '/aigc/intelligent-products',
        component: '@/pages/aigc/intelligent-products',
      },
      {
        path: '/aigc/intelligent-products/:detailId',
        name: '智能产品详情',
        hideInMenu: true,
        component: '@/pages/aigc/intelligent-products/[type]',
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
    routes: [
      {
        path: '/website',
        key: 'website',
        hideInMenu: true,
        component: '@/pages/website',
      },
      {
        name: '网站建设详情',
        path: '/website/:detailId',
        key: 'website-id',
        hideInMenu: true,
        component: '@/pages/website/[type]',
      },
    ],
  },
  {
    name: '办公文档',
    icon: 'icon-bangongwendangshenqing',
    path: '/office',
    key: 'office',
    routes: [
      {
        name: '办公文档',
        hideInMenu: true,
        key: 'office',
        path: '/office',
        component: '@/pages/office',
      },
      {
        name: '网站建设详情',
        path: '/office/:detailId',
        key: 'office-id',
        hideInMenu: true,
        component: '@/pages/office/[type]',
      },
    ],
  },
  {
    name: '设计资源',
    icon: 'icon-UIsheji',
    path: '/design',
    component: '@/pages/design',
  },
  {
    path: '/',
    redirect: '/workbench',
  },
  {
    component: './404',
  },
];
