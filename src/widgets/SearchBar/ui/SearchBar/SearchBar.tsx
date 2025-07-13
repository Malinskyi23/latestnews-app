import { useGetNewsArticlesQuery } from '@/shared/api/newsApi';
import type { NewsArticle } from '@/shared/types';
import { AutoComplete, Avatar, Empty, Flex, Input, Spin } from 'antd';
import { useState } from 'react';

const renderArticle = (article: NewsArticle) => ({
  value: article.title,
  label: (
    <Flex align="center" gap={8}>
      <Avatar size={32} shape="square" src={article.urlToImage} />
      {article.title}
    </Flex>
  ),
});

export const SearchBar = () => {
  const [keywords, setKeywords] = useState('');
  const result = useGetNewsArticlesQuery({ q: keywords }, { skip: !keywords });

  return (
    <div>
      <AutoComplete
        options={
          keywords && result.data?.articles.length
            ? result.data.articles.map(renderArticle)
            : []
        }
        style={{ width: '100%' }}
        notFoundContent={
          result.isFetching ? (
            <Spin size="small" tip="Searching..." />
          ) : keywords && result.data?.articles.length === 0 ? (
            <Empty
              description="No articles found"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ) : null
        }
      >
        <Input.Search
          size="large"
          placeholder="Search for news articles on specific topics, such as 'iPhone,' 'Apple,' 'Trump,' or 'Bitcoin.'"
          onSearch={value => {
            if (value.length > 3) setKeywords(value);
          }}
          loading={result.isFetching}
          disabled={result.isFetching}
        />
      </AutoComplete>
    </div>
  );
};
