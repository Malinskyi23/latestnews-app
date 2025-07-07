import { NewsArticlesList } from '@/pages/main/ui/NewsArticlesList/NewsArticlesList';
import { useGetLatestNewsQuery } from '@/shared/api/currentsApi';
import { Layout } from 'antd';

export const LayoutSider = () => {
  const result = useGetLatestNewsQuery({});
  return (
    <Layout.Sider theme="light">
      <NewsArticlesList newsArticles={result.data.news} />
    </Layout.Sider>
  );
};
