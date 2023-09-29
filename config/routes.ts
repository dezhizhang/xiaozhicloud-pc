﻿/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-09-29 16:58:21
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
    path: '/',
    component: '@/layout/BasicLayout',
    wrappers: ['@/components/Wrappers/Auth'],
    routes: [
      {
        path: '/',
        name: '工作台',
        icon: 'icon-gongzuotai',
        component: '@/pages/workbench',
      },
      {
        name: '广告管理',
        icon: 'icon-guanggaoguanli',
        path: '/advert',
        component: '@/pages/advert',
      },
      {
        name: '会员管理',
        icon: 'icon-huiyuanguanli',
        path: '/manager',
        component: '@/pages/manager',
      },
      {
        name: '宇宙管理',
        icon: 'icon-huiyuanguanli',
        path: '/metaverse',
        component: '@/pages/metaverse',
      },
      {
        name: 'AIGC管理',
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
            name: 'AIGC产品',
            path: '/aigc/intelligent-products',
            component: '@/pages/aigc/intelligent-products',
          },
          {
            path: '/aigc/intelligent-products/:detailId',
            name: 'AIGC产品详情',
            hideInMenu: true,
            component: '@/pages/aigc/intelligent-products/[type]',
          },
          {
            component: './404',
          },
        ],
      },
      {
        name: '开源管理',
        icon: 'icon-huiyuanguanli',
        key: 'open-source',
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
        name: '友情链接',
        icon: 'icon-guanggaoguanli',
        path: '/friendly-link',
        component: '@/pages/friendly-link',
      },
    ],
  },
  {
    component: './404',
  },
];
