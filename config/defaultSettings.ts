/*
 * :file description:
 * :name: /xiaozhicloud-pc/config/defaultSettings.ts
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-03 09:05:54
 * :last editor: 张德志
 * :date last edited: 2023-09-29 10:40:13
 */
import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,

  title: '晓智科技',
  pwa: false,
  logo: 'https://xiaozhicloud.oss-cn-hangzhou.aliyuncs.com/icon.png',
  iconfontUrl: '//at.alicdn.com/t/c/font_3976594_ie1k2h5pjxj.js',
};

export default Settings;
