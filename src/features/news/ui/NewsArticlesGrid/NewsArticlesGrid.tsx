import { NewsBanner } from '@/features/NewsBanner';
import type { NewsArticle } from '@/shared/types';
import { Col, Row, Skeleton } from 'antd';

interface NewsArticlesGridProps {
  articles: NewsArticle[];
  loading: boolean;
  showModal: () => void;
}

export const NewsArticlesGrid = ({
  articles,
  loading,
  showModal,
}: NewsArticlesGridProps) => {
  return (
    <Row gutter={[16, 16]}>
      {articles.map((article, idx) => (
        <Col key={`${idx}-${article.title}`} span={24} xs={24} sm={12} md={8}>
          <Skeleton loading={loading}>
            {/* onOpen={onOpen} onSelect={onSelect} */}
            <NewsBanner item={article} showModal={showModal} />
          </Skeleton>
        </Col>
      ))}
    </Row>
  );
};
