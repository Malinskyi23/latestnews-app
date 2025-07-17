import { NewsArticleModal } from '@/features/news';
import { Flex } from 'antd';
import { useState, type ReactNode } from 'react';

import { NewsArticles } from '../NewsArticles/NewsArticles';
import { NewsCategories } from '../NewsCategories/NewsCategories';
import { NewsViewSwitcher } from '../NewsViewSwitcher/NewsViewSwitcher';
import styles from './styles.module.css';

export const NewsArticlesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [category, setCategory] = useState('business');
  const [viewMode, setViewMode] = useState('grid');

  const content: ReactNode = (
    <>
      <Flex gap={16} vertical>
        <Flex justify="end">
          <NewsViewSwitcher viewMode={viewMode} setViewMode={setViewMode} />
        </Flex>
        <NewsCategories category={category} setCategory={setCategory} />
        <NewsArticles
          category={category}
          viewMode={viewMode}
          showModal={showModal}
        />
      </Flex>
      <NewsArticleModal open={isModalOpen} onCancel={handleCancel} />
    </>
  );
  return <div className={styles.container}>{content}</div>;
};
