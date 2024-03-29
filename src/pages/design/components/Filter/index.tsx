/*
 * :file description:
 * :name: /xiaozhicloud-pc/src/pages/design/components/Filter/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, xiaozhi
 * :date created: 2022-08-26 14:22:44
 * :last editor: 张德志
 * :date last edited: 2023-05-02 16:41:30
 */
import React, { ChangeEvent } from 'react';
import { Input, Select } from 'antd';
import { FILTER_WIDTH } from '@/constants';
import fcStyles from '@/styles/filter.less';
import { WEBSITE_TYPE, STATUS_TYPE } from '../../constants';
import styles from './index.less';

export interface FilterTableProps {
  filter: Website.RequestType;
  onReset?: () => void;
  onOk?: () => void;
  onChange?: (key: string, value: string) => void;
}

const FilterTable: React.FC<FilterTableProps> = (props) => {
  const { filter, onChange, onReset, onOk } = props;

  const handleChange = (key: string, ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    onChange?.(key, value);
  };

  return (
    <div className={styles.container}>
      <table className={fcStyles.filterContainer}>
        <tbody className={styles.tableTable}>
          <tr>
            <th className={styles.labelArea}>标题：</th>
            <td>
              <Input
                allowClear
                value={filter.title}
                placeholder="请输入标题"
                style={{ width: FILTER_WIDTH }}
                onChange={(event) => handleChange('title', event)}
              />
            </td>
          </tr>
          <tr>
            <th className={styles.labelArea}>类型：</th>
            <td>
              <Select
                allowClear
                value={filter.type}
                placeholder="请选择网站类型"
                style={{ width: FILTER_WIDTH }}
                onChange={(value) => onChange?.('type', value)}
              >
                {WEBSITE_TYPE.map((item) => (
                  <Select.Option value={item.value} key={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </td>
          </tr>
          <tr>
            <th className={styles.labelArea}>状态：</th>
            <td>
              <Select
                allowClear
                value={filter.status}
                onChange={(value) => onChange?.('status', value)}
                style={{ width: FILTER_WIDTH }}
                placeholder="请选择网站状态"
              >
                {STATUS_TYPE.map((item) => (
                  <Select.Option value={item.value} key={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.clear}>
        <a role="button" onClick={onReset}>
          重置
        </a>
        <a role="button" onClick={onOk}>
          搜索
        </a>
      </div>
    </div>
  );
};

export default FilterTable;
