/* eslint-disable @typescript-eslint/ban-ts-comment, react/prop-types */
// @ts-nocheck

import { useGetLatestNewsQuery } from '@/shared/api/currentsApi';
import { Alert, Card, Divider, Spin, theme } from 'antd';
import { useState, type ReactNode } from 'react';

import homeDesktopLight from '../../../../shared/assets/images/home-desktop-light2x.webp';
import { NewsArticlesList } from '../NewsArticlesList/NewsArticlesList';
import { NewsSlider } from '../NewsSlider/NewsSlider';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './styles.module.css';

const PAGE_SIZE = 20;

export const MainPage = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const [pageNumber, setPageNumber] = useState(1);

  const goToPreviousPage = () => setPageNumber(state => Math.max(state - 1, 1));
  const goToNextPage = () => setPageNumber(state => state + 1);

  const result = useGetLatestNewsQuery({
    page_number: pageNumber,
    page_size: PAGE_SIZE,
  });

  let content: ReactNode;

  if (result.isLoading) {
    content = <Spin percent={'auto'} fullscreen />;
  } else if (result.isSuccess) {
    content = (
      <>
        <div className={styles.container}>
          {result.data?.news.length && <NewsSlider list={result.data?.news} />}
        </div>
        <Divider style={{ marginBottom: 0 }} />
        <div
          style={{
            minHeight: 400,
            backgroundImage: `url(${homeDesktopLight})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center ',
          }}
        >
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
        </div>
        <Divider style={{ marginTop: 0 }} />
        <div className={styles.container}>
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

//  <Flex vertical style={{ width: '100%' }} gap={16}>
//         <NewsBanner item={result.data.news[0]} />

//         <SearchBar />
//         <NewsArticlesList newsArticles={result.data.news} />
//       </Flex>
