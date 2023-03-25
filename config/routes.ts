/*
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
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  {
    name: '管理员管理',
    icon: 'table',
    path: '/manager',
    component: '@/pages/manager',
  },
  {
    name: '轮播图管理',
    icon: 'table',
    path: '/banner',
    component: '@/pages/banner',
  },
  {
    name: '网站建设',
    icon: 'table',
    path: '/website',
    component: '@/pages/website',
  },
  {
    name: '办公文档',
    icon: 'table',
    path: '/office',
    component: '@/pages/office',
  },
  {
    name: '设计资源',
    icon: 'table',
    path: '/design',
    component: '@/pages/design',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
