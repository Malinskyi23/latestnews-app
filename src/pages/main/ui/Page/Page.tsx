/* eslint-disable @typescript-eslint/ban-ts-comment, react/prop-types */
// @ts-nocheck
import { Hero } from '@/features/hero';
import { useGetNewsHeadlinesQuery } from '@/shared/api/newsApi';
import { Alert, Card, Col, Flex, Row, Spin, theme } from 'antd';
import { useState, type ReactNode } from 'react';

import { SearchBar } from '../../../../widgets/SearchBar/ui/SearchBar/SearchBar';
import { BannersList } from '../BannersList/BannersList';
import { NewsArticlesList } from '../NewsArticlesList/NewsArticlesList';
import { NewsCategories } from '../NewsCategories/NewsCategories';
import styles from './styles.module.css';

export const MainPage = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const [selectedCategory, setSelectedCategory] = useState('');

  const result = useGetNewsHeadlinesQuery(
    {
      category: selectedCategory,
    },
    // { skip: !selectedCategory },
  );

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
            <NewsCategories
              selected={selectedCategory}
              onClick={setSelectedCategory}
            />
            <Row gutter={[16, 16]}>
              <Col span={14}>
                <BannersList
                  articles={result.data.articles}
                  loading={result.isFetching}
                />
              </Col>
              <Col span={10}>
                <Card
                  variant={'borderless'}
                  style={{ background: colorBgLayout }}
                >
                  {result.data?.articles.length && (
                    <NewsArticlesList
                      articles={result.data.articles}
                      loading={result.isFetching}
                    />
                  )}
                </Card>
              </Col>
            </Row>
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
