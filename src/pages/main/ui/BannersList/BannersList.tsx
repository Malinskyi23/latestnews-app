import { NewsBanner } from '@/features/NewsBanner';
import type { NewsArticle } from '@/shared/types';
import { Col, Row, Skeleton } from 'antd';

interface BannersListProps {
  articles: NewsArticle[];
  loading: boolean;
  onSelect: (title: string) => void;
  onOpen: () => void;
}

export const BannersList = ({
  articles = [],
  loading = true,
  onSelect,
  onOpen,
}: BannersListProps) => {
  return (
    <Row gutter={[16, 16]}>
      {articles.map((article, idx) => (
        <Col key={`${idx}-${article.title}`} span={8}>
          <Skeleton loading={loading}>
            <NewsBanner item={article} onOpen={onOpen} onSelect={onSelect} />
          </Skeleton>
        </Col>
      ))}
    </Row>
  );
};
