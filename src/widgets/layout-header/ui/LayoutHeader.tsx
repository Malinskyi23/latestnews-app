// import { Search } from '@/features/search';
// import { Search } from '@/features/Search';
import { CurrentsNewsApiLogoMini } from '@/shared/assets/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

export const LayoutHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Layout.Header
      className={styles.layoutHeader}
      style={{ backgroundColor: colorBgContainer }}
    >
      <Link to="/" className={styles.layoutLink}>
        <img src={CurrentsNewsApiLogoMini} />
      </Link>
      <Menu
        onClick={e => {
          console.log('click ', e);
          navigate(e.key);
        }}
        selectedKeys={[currentPath]}
        mode="horizontal"
        items={[
          { label: 'Search', key: '/' },
          { label: 'News Articles', key: '/news-articles' },
        ]}
      />
    </Layout.Header>
  );
};
