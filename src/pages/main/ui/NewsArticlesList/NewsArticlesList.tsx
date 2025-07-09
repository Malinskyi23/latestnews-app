import type { News } from '@/shared/api/generated';
import { formatTimeAgo } from '@/shared/helpers';
import { ExportOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, List, Skeleton, Space } from 'antd';

interface NewsArticlesListProps {
  articles: News[];
  loading: boolean;
  current: number;
  pageSize: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const NewsArticlesList = ({
  articles,
  loading = true,
  current,
  pageSize,
  onPreviousPage,
  onNextPage,
}: NewsArticlesListProps) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={articles}
      header={
        <Flex justify="end">
          <Space>
            <Button
              disabled={current === 1}
              icon={<LeftOutlined />}
              onClick={onPreviousPage}
            >
              Previous
            </Button>
            <Button
              disabled={articles.length < pageSize}
              icon={<RightOutlined />}
              iconPosition="end"
              onClick={onNextPage}
            >
              Next
            </Button>
          </Space>
        </Flex>
      }
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
              avatar={<Avatar size={64} shape="square" src={article.image} />}
              title={article.title}
              description={
                <>
                  {formatTimeAgo(article.published)} • by {article.author}
                </>
              }
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
