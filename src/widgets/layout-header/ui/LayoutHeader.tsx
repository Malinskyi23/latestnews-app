// import { Search } from '@/features/search';
import { CurrentsNewsApiLogo } from '@/shared/assets/icons';
import { Layout, theme } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export const LayoutHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      className={styles.layoutHeader}
      style={{ backgroundColor: colorBgContainer }}
    >
      <Link to="/" className={styles.layoutLink}>
        <img src={CurrentsNewsApiLogo} />
      </Link>
      {/* <Search /> */}
    </Layout.Header>
  );
};
