/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/manager/components/FilterTable/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-26 14:22:44
 * :last editor: 张德志
 * :date last edited: 2022-11-18 12:41:33
 */
import React from 'react';
import { Input, Button } from 'antd';
import fcStyles from '@/styles/filter.less';
import styles from './index.less';

export interface FilterTableProps {
  filter: any;
  onReset: () => void;
  onOk: () => void;
  onChange: (key: string, value: string | string[] | undefined) => void;
}

const FilterTable: React.FC<FilterTableProps> = (props) => {
  const { onChange, filter, onReset, onOk } = props;
  return (
    <div className={styles.container}>
      <table className={fcStyles.filterContainer}>
        <tbody className={styles.tableTable}>
          <tr>
            <th className={styles.labelArea}>用户名：</th>
            <td>
              <Input
                placeholder="请输入用户名"
                value={filter.username}
                onChange={(event) => onChange('username', event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th className={styles.labelArea}>手机号：</th>
            <td>
              <Input
                placeholder="请输入手机号"
                value={filter.phone}
                onChange={(event) => onChange('phone', event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th className={styles.labelArea}>邮箱地址：</th>
            <td>
              <Input
                value={filter.email}
                placeholder="请输入邮箱地址"
                onChange={(event) => onChange('email', event.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.clear}>
        <Button
          size="small"
          type="primary"
          role="button"
          style={{ marginRight: 16 }}
          onClick={onOk}
        >
          搜索
        </Button>
        <a role="button" style={{ textDecoration: 'none' }} onClick={onReset}>
          重置
        </a>
      </div>
    </div>
  );
};

export default FilterTable;
