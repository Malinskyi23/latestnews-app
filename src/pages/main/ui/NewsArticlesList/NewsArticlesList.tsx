import type { News } from '@/shared/api/generated';
import { formatTimeAgo } from '@/shared/helpers';
import { ExportOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';

interface NewsArticlesListProps {
  newsArticles: News[];
}

export const NewsArticlesList = ({ newsArticles }: NewsArticlesListProps) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={newsArticles}
      renderItem={article => (
        <List.Item
          actions={[
            <a key="list-read" href={article.url} target="blank">
              read <ExportOutlined />
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar size={64} shape="square" src={article.image} />}
            title={article.title}
            description={
              <>
                {formatTimeAgo(article.published)} • by {article.author}
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};
