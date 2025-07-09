/* eslint-disable @typescript-eslint/ban-ts-comment, react/prop-types */
// @ts-nocheck
import { Hero } from '@/features/hero';
import { useGetLatestNewsQuery } from '@/shared/api/currentsApi';
import { Alert, Card, Flex, Spin, theme } from 'antd';
import { useState, type ReactNode } from 'react';

import { NewsArticlesList } from '../NewsArticlesList/NewsArticlesList';
import { NewsCategories } from '../NewsCategories/NewsCategories';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './styles.module.css';

const PAGE_SIZE = 20;

export const MainPage = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');

  const goToPreviousPage = () => setPageNumber(state => Math.max(state - 1, 1));
  const goToNextPage = () => setPageNumber(state => state + 1);

  const result = useGetLatestNewsQuery({
    page_number: pageNumber,
    page_size: PAGE_SIZE,
    category: selectedCategory ? selectedCategory : '',
  });

  let content: ReactNode;

  if (result.isLoading) {
    content = <Spin percent={'auto'} fullscreen />;
  } else if (result.isSuccess) {
    content = (
      <>
        <Hero />

        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <SearchBar />
        </div>

        <div className={styles.container}>
          <Flex vertical gap={16}>
            <NewsCategories
              selected={selectedCategory}
              onClick={setSelectedCategory}
            />
            <Card variant={'borderless'} style={{ background: colorBgLayout }}>
              {result.data?.news.length && (
                <NewsArticlesList
                  articles={result.data.news}
                  loading={result.isFetching}
                  current={pageNumber}
                  pageSize={PAGE_SIZE}
                  onPreviousPage={goToPreviousPage}
                  onNextPage={goToNextPage}
                />
              )}
            </Card>
          </Flex>
        </div>
      </>
    );
  } else if (result.isError) {
    content = (
      <Alert
        message={`Error ${result.error.status}`}
        description={
          <>
            {result.error.error}. No API requests left for today. You may have
            reached the daily limit.
          </>
        }
        type="error"
        showIcon
      />
    );
  }

  return <>{content}</>;
};
