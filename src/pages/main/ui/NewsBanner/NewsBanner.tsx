import type { News } from '@/shared/api/generated';
import { formatTimeAgo } from '@/shared/helpers';
import { Card } from 'antd';

interface NewsBannerProps {
  item: News;
}

export const NewsBanner = ({ item }: NewsBannerProps) => {
  return (
    <Card>
      <Card.Meta
        title={item.title}
        description={
          <>
            {formatTimeAgo(item.published)} • by {item.author}
          </>
        }
      ></Card.Meta>
    </Card>
  );
};
