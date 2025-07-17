import { NewsArticleModal } from '@/features/news';
import { Search } from '@/features/Search';
import { selectIsDarkMode } from '@/features/theme/model/themeSlice';
import { useAppSelector } from '@/shared/lib/hooks';
import { Typography } from 'antd';
import { useState, type ReactNode } from 'react';

import homeDesktopDark from '../../../../shared/assets/images/home-desktop-dark2x.webp';
// import styles from './styles.module.css';

import homeDesktopLight from '../../../../shared/assets/images/home-desktop-light2x.webp';

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const {
  //   token: { colorBgLayout, borderRadiusLG },
  // } = theme.useToken();

  const content: ReactNode = (
    <>
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${isDarkMode ? homeDesktopDark : homeDesktopLight})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: '800px 380px',
        }}
      >
        <div
          style={{
            maxWidth: '768px',
            width: '100%',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <Typography.Title style={{ textAlign: 'center' }}>
            Latestnews Seacrh
          </Typography.Title>
          <Search showModal={showModal} />
        </div>
        <NewsArticleModal open={isModalOpen} onCancel={handleCancel} />
        {/* <Hero /> */}
      </div>
    </>
  );

  return <>{content}</>;
};
