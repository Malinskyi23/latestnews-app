import { setArticle } from '@/entitry/news/model/newsArticleSlice';
import { formatTimeAgo } from '@/shared/helpers';
import { useAppDispatch } from '@/shared/lib/hooks';
import type { NewsArticle } from '@/shared/types';
import { Card, Image } from 'antd';

interface NewsBannerProps {
  item: NewsArticle;
  showModal: () => void;
}

export const NewsBanner = ({ item, showModal }: NewsBannerProps) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      cover={<Image src={item.urlToImage} preview={false} />}
      hoverable
      onClick={() => {
        dispatch(setArticle(item));
        showModal();
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
