import { formatTimeAgo } from '@/shared/helpers';
import type { NewsArticle } from '@/shared/types';
import { Card, Image } from 'antd';

interface NewsBannerProps {
  item: NewsArticle;
}

export const NewsBanner = ({ item }: NewsBannerProps) => {
  return (
    <Card cover={<Image src={item.urlToImage} preview={false} />}>
      <Card.Meta
        title={item.title}
        description={
          <>
            {formatTimeAgo(item.publishedAt)} • by {item.author}
          </>
        }
      ></Card.Meta>
    </Card>
  );
};
