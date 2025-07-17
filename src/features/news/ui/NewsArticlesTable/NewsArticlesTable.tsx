import type { NewsArticle } from '@/shared/types';
import { ExportOutlined } from '@ant-design/icons';
import { Avatar, Table, type TableProps } from 'antd';

interface NewsArticlesTableProps {
  articles: NewsArticle[];
  loading: boolean;
}
export const NewsArticlesTable = ({
  articles,
  loading,
}: NewsArticlesTableProps) => {
  // const data = articles.map(article => )
  const columns: TableProps['columns'] = [
    {
      title: 'Image',
      dataIndex: 'urlToImage',
      key: 'urlToImage',
      render: urlToImage => (
        <Avatar size={32} shape="square" src={urlToImage} />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Resource',
      dataIndex: 'url',
      render: url => (
        <a key="list-read" href={url} target="blank">
          read <ExportOutlined />
        </a>
      ),
    },
  ];
  return <Table dataSource={articles} columns={columns} loading={loading} />;
};
