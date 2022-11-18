/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/routes.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2022-11-18 12:31:30
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
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
