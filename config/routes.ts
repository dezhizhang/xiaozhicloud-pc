﻿/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2022-11-19 08:53:27
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
    name: '广告管理',
    icon: 'icon-guanggaoguanli',
    path: '/advert',
    component: '@/pages/advert',
  },
  {
    name: '网站建设',
    icon: 'icon-a-wangzhanguanli2x',
    path: '/website',
    component: '@/pages/website',
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
