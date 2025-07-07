import { ScrollToTop } from '@/shared/ui';
import { LayoutContent } from '@/widgets/layout-content/ui/LayoutContent';
import { LayoutFooter } from '@/widgets/layout-footer';
import { LayoutHeader } from '@/widgets/layout-header';
// import { LayoutSider } from '@/widgets/layout-sider';
import { Layout, theme } from 'antd';

import styles from './styles.module.css';

export const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <ScrollToTop />
      <Layout className={styles.mainLayout}>
        <LayoutHeader />
        <Layout style={{ backgroundColor: colorBgContainer }}>
          <LayoutContent />
          <LayoutFooter />
        </Layout>
      </Layout>
    </>
  );
};
