/* eslint-disable @typescript-eslint/ban-ts-comment, react/prop-types */
// @ts-nocheck
import {
  NewsArticlesGrid,
  NewsArticlesList,
  NewsArticlesTable,
} from '@/features/news';
import { useGetNewsHeadlinesQuery } from '@/shared/api/newsApi';
import { Alert, Spin } from 'antd';
import { type ReactNode } from 'react';

interface NewsArticlesProps {
  category: string;
  viewMode: string;
  showModal: () => void;
}

export const NewsArticles = ({
  category = 'business',
  viewMode = 'grid',
  showModal,
}: NewsArticlesProps) => {
  const result = useGetNewsHeadlinesQuery({
    category: category,
  });

  let content: ReactNode;

  const articlesView = {
    grid: (
      <NewsArticlesGrid
        articles={result.data?.articles}
        loading={result.isFetching}
        showModal={showModal}
      />
    ),
    table: (
      <NewsArticlesTable
        articles={result.data?.articles}
        loading={result.isFetching}
      />
    ),
    list: (
      <NewsArticlesList
        articles={result.data?.articles}
        loading={result.isFetching}
      />
    ),
  };

  if (result.isLoading) {
    content = <Spin percent={'auto'} fullscreen />;
  } else if (result.isSuccess) {
    content = <>{result.data?.articles.length && articlesView[viewMode]}</>;
  } else if (result.isError) {
    content = (
      <Alert
        message={`Error ${result.error.status}`}
        description={<>{result.error.error}.</>}
        type="error"
        showIcon
      />
    );
  }

  return <>{content}</>;
};
