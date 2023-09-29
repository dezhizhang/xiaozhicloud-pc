/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/app.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-09-29 10:58:48
 */
import { PageLoading } from '@ant-design/pro-components';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
