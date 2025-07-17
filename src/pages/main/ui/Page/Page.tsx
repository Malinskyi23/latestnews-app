import { NewsArticleModal } from '@/features/news';
import { Search } from '@/features/Search';
import { useState, type ReactNode } from 'react';

// import styles from './styles.module.css';

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          maxWidth: '768px',
          width: '100%',
          margin: '0 auto',
          padding: '24px',
        }}
      >
        <Search showModal={showModal} />
      </div>
      <NewsArticleModal open={isModalOpen} onCancel={handleCancel} />
      {/* <Hero /> */}
    </>
  );

  return <>{content}</>;
};
