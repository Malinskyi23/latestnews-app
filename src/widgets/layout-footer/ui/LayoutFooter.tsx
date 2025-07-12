import { CurrentsNewsApiLogoMini } from '@/shared/assets/icons';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

export const LayoutFooter = () => {
  return (
    <Layout.Footer>
      <Typography
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
        }}
      >
        <Typography.Text type="secondary">
          &copy; {new Date().getFullYear()} &laquo;latestnews&raquo; 18+ <br />
          This website was created for educational purposes only. <br />
          All rights to the materials belong to their respective owners.
        </Typography.Text>

        <Link to="/" className={styles.layoutLink}>
          <img src={CurrentsNewsApiLogoMini} />
        </Link>
      </Typography>
    </Layout.Footer>
  );
};
