/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any,react/prop-types */
// @ts-nocheck
import { setArticle } from '@/entitry/news/model/newsArticleSlice';
import { useGetNewsArticlesQuery } from '@/shared/api/newsApi';
import { useAppDispatch } from '@/shared/lib/hooks';
import type { NewsArticle } from '@/shared/types';
import { AutoComplete, Avatar, Empty, Flex, Space, Spin } from 'antd';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

const renderItem = (article: NewsArticle) => ({
  value: article.title,
  label: (
    <Flex align="center" gap={8}>
      <Avatar size={32} shape="square" src={article.urlToImage} />
      {article.title}
    </Flex>
  ),
  article,
});

interface SearchProps {
  showModal: () => void;
}

export const Search = ({ showModal }: SearchProps) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const [keywords, setKeywords] = useState('');

  const debouncedKeywords = useCallback(
    debounce((value: string) => {
      setKeywords(value);
    }, 500),
    [],
  );

  const handleSearch = (value: string) => {
    setInputValue(value);
    debouncedKeywords(value);
  };

  const handleSelect = (_, option: any) => {
    debouncedKeywords.cancel(); // Cancel debounce if it is active
    dispatch(setArticle(option.article));
    showModal();
  };

  const result = useGetNewsArticlesQuery({ q: keywords }, { skip: !keywords });

  const options =
    (inputValue &&
      result.data?.articles?.map(article => renderItem(article))) ??
    [];

  const notFoundContent = result.isFetching ? (
    <Space>
      <Spin size="small" tip="Loading..." />
      Loading...
    </Space>
  ) : keywords && result.data?.articles.length === 0 ? (
    <Empty
      description="No articles found"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  ) : null;

  return (
    <>
      <AutoComplete
        style={{ width: '100%' }}
        placeholder="Search for news articles on specific topics, such as 'iPhone,' 'Apple,' 'Trump,' or 'Bitcoin.'"
        options={options}
        onSearch={handleSearch}
        onSelect={handleSelect}
        notFoundContent={notFoundContent}
        allowClear
        value={inputValue}
      />
    </>
  );
};
