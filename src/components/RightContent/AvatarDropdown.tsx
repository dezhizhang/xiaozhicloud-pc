/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/components/RightContent/AvatarDropdown.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-26 01:37:22
 * :last editor: 张德志
 * :date last edited: 2023-10-02 17:20:52
 */
import { outLogin } from '@/services';
import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { connect, history } from 'umi';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  user: any;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  await outLogin();

  if (window.location.pathname !== '/user/login') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.replace({
      pathname: '/user/login',
    });
  }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, user }) => {
  const onMenuClick = useCallback((event: MenuInfo) => {
    const { key } = event;
    if (key === 'logout') {
      loginOut();
      return;
    }
  }, []);

  console.log(user);

  const menuItems: ItemType[] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick} items={menuItems} />
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          style={{ marginRight: '8px' }}
          size="small"
          className={styles.avatar}
          // src={'1111'}
          alt="avatar "
        />
        <span className={`${styles.name} anticon`}>{user?.userInfo?.username}</span>
      </span>
    </HeaderDropdown>
  );
};

export default connect(({ user }: { user: any }) => ({
  user,
}))(AvatarDropdown);
