/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-09-27 07:20:14
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
    name: '超级管理',
    icon: 'icon-huiyuanguanli',
    path: '/manager',
    component: '@/pages/manager',
  },
  {
    name: '元宇宙',
    icon: 'icon-huiyuanguanli',
    path: '/metaverse',
    component: '@/pages/metaverse',
  },
  {
    name: '开源管理',
    icon: 'icon-huiyuanguanli',
    path: '/open-source',

    routes: [
      {
        path: '/open-source',
        component: '@/pages/open-source',
      },
      {
        path: '/open-source/:detailId',
        component: '@/pages/open-source/[type]',
      },
      {
        component: './404',
      },
    ],
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
    key: 'design',
    routes: [
      {
        name: '设计资源',
        icon: 'icon-UIsheji',
        path: '/design',
        key: 'design',
        hideInMenu: true,
        component: '@/pages/design',
      },
      {
        name: '设计资源',
        icon: 'icon-UIsheji',
        hideInMenu: true,
        key: 'design-detailId',
        path: '/design/:detailId',
        component: '@/pages/design/[type]',
      },
    ],
  },
  {
    name: '友情链接',
    icon: 'icon-guanggaoguanli',
    path: '/friendly-link',
    component: '@/pages/friendly-link',
  },
  {
    path: '/',
    redirect: '/workbench',
  },
  {
    component: './404',
  },
];
