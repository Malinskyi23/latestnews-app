import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

export const LayoutContent = () => {
  return (
    <Layout.Content className={styles.layoutContent}>
      <Outlet />
    </Layout.Content>
  );
};
