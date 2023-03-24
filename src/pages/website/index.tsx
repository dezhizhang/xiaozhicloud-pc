import React, { useState } from 'react';
import styles from './index.less';

import Filter from './components/Filter';

const Website: React.FC = () => {
  const [filter, setFilter] = useState<Website.RequestType>({
    title: undefined,
    type: undefined,
    status: undefined,
  });

  const handleOk = () => {};

  const handleReset = () => {};

  const handleChange = (key: string, value: string) => {
    filter[key] = value;
    setFilter(filter);
  };

  return (
    <div className={styles.container}>
      <Filter filter={filter} onReset={handleReset} onOk={handleOk} onChange={handleChange} />
      <div className={styles.content}></div>
    </div>
  );
};

export default Website;
