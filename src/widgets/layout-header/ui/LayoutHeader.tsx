// import { Search } from '@/features/search';
import { CurrentsNewsApiLogoMini } from '@/shared/assets/icons';
import { Layout, Tag, theme, Typography } from 'antd';
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
        <img src={CurrentsNewsApiLogoMini} />
      </Link>
      <Typography.Text>
        Subscription Plan: <Tag color="green">Developer</Tag>{' '}
        <Typography.Text type="danger">100</Typography.Text> requests available
        per day.
      </Typography.Text>
    </Layout.Header>
  );
};
