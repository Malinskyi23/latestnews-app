// Note: totalResults and pageSize don't guarantee the actual number of returned articles.
// Sometimes the API returns fewer articles than expected, possibly due to internal filtering,
// licensing restrictions, or how the API rounds or calculates totalResults.

import { formatTimeAgo } from '@/shared/helpers';
import type { NewsArticle } from '@/shared/types';
import { ExportOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton } from 'antd';

interface NewsArticlesListProps {
  articles: NewsArticle[];
  loading: boolean;
}

export const NewsArticlesList = ({
  articles,
  loading = true,
}: NewsArticlesListProps) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={articles}
      renderItem={article => (
        <List.Item
          actions={[
            <a key="list-read" href={article.url} target="blank">
              read <ExportOutlined />
            </a>,
          ]}
        >
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={
                <Avatar size={64} shape="square" src={article.urlToImage} />
              }
              title={article.title}
              description={
                <>
                  {formatTimeAgo(article.publishedAt)} • by {article.author}
                </>
              }
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
