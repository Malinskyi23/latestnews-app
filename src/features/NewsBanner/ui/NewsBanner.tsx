import { formatTimeAgo } from '@/shared/helpers';
import type { NewsArticle } from '@/shared/types';
import { Card, Image } from 'antd';

interface NewsBannerProps {
  item: NewsArticle;
  onSelect: (title: string) => void;
  onOpen: () => void;
}

export const NewsBanner = ({ item, onOpen, onSelect }: NewsBannerProps) => {
  return (
    <Card
      cover={<Image src={item.urlToImage} preview={false} />}
      hoverable
      onClick={() => {
        onSelect(item.title);
        onOpen();
      }}
    >
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
