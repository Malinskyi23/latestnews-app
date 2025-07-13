import { NewsBanner } from '@/features/NewsBanner';
import type { NewsArticle } from '@/shared/types';
import { Col, Row, Skeleton } from 'antd';
import React from 'react';

interface BannersListProps {
  articles: NewsArticle[];
  loading: boolean;
}

export const BannersList = ({
  articles = [],
  loading = true,
}: BannersListProps) => {
  return (
    <Row gutter={[16, 16]}>
      {articles.map((article, idx) => (
        <Col key={`${idx}-${article.title}`} span={8}>
          <Skeleton loading={loading}>
            <NewsBanner item={article} />
          </Skeleton>
        </Col>
      ))}
    </Row>
  );
};
