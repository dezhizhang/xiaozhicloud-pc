/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/layout/BasicLayout.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-09-29 10:08:18
 * :last editor: 张德志
 * :date last edited: 2023-10-02 14:05:51
 */
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import { Link, connect } from 'umi';
import RightContent from '@/components/RightContent';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
} & ProLayoutProps;

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;

  return (
    <ProLayout
      {...props}
      logo={() => <div></div>}
      {...props.settings}
      layout={'side'}
      //   headerRender={false}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom as any}</Link>;
      }}
      breadcrumbRender={false}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
    >
      {children}
    </ProLayout>
  );
};

export default connect(({ settings }: { settings: any }) => ({
  settings,
}))(BasicLayout);
