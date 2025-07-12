/* eslint-disable @typescript-eslint/ban-ts-comment, react/prop-types */
// @ts-nocheck
import { Hero } from '@/features/hero';
import { useGetNewsHeadlinesQuery } from '@/shared/api/newsApi';
import { Alert, Card, Flex, Spin, theme } from 'antd';
import { useState, type ReactNode } from 'react';

// import { Countries } from '../Countries/Countries';
import { NewsArticlesList } from '../NewsArticlesList/NewsArticlesList';
import { NewsCategories } from '../NewsCategories/NewsCategories';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './styles.module.css';

export const MainPage = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedCountry, setSelectedCountry] = useState('us');

  const result = useGetNewsHeadlinesQuery({
    category: selectedCategory,
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
            maxWidth: '768px',
            width: '100%',
            margin: '0 auto',
            padding: '24px',
          }}
        >
          <SearchBar />
        </div>

        <div className={styles.container}>
          <Flex vertical gap={16}>
            {/* <Countries
              selected={selectedCountry}
              onClick={setSelectedCountry}
            /> */}
            <NewsCategories
              selected={selectedCategory}
              onClick={setSelectedCategory}
            />
            <Card variant={'borderless'} style={{ background: colorBgLayout }}>
              {/* {result.data?.articles.length && ( */}
              <NewsArticlesList
                articles={result.data.articles}
                loading={result.isFetching}
              />
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
