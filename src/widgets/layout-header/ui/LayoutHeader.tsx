// import { Search } from '@/features/search';
// import { Search } from '@/features/Search';
import { ChangeTheme } from '@/features/theme';
import { CurrentsNewsApiLogoMini } from '@/shared/assets/icons';
import { Layout, Menu, Space, theme } from 'antd';
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
      <Space size={16}>
        <Menu
          onClick={e => {
            navigate(e.key);
          }}
          selectedKeys={[currentPath]}
          mode="horizontal"
          items={[
            { label: 'Search', key: '/' },
            { label: 'News Articles', key: '/news-articles' },
          ]}
          style={{ minWidth: '140px' }}
        />
        <ChangeTheme />
      </Space>
    </Layout.Header>
  );
};
