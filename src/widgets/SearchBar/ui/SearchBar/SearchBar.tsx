import { useGetNewsArticlesQuery } from '@/shared/api/newsApi';
import { formatTimeAgo } from '@/shared/helpers';
import type { NewsArticle } from '@/shared/types';
import { ExportOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Avatar,
  Descriptions,
  Empty,
  Flex,
  Image,
  Input,
  Modal,
  Spin,
} from 'antd';
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
  const [isOpen, setIsOpen] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState('');

  const result = useGetNewsArticlesQuery({ q: keywords }, { skip: !keywords });

  const foundArticle = selectedArticle
    ? result.data?.articles.find(article => article.title === selectedArticle)
    : undefined;

  return (
    <div>
      <AutoComplete
        options={result.data?.articles?.map(renderArticle) ?? []}
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
        onSelect={value => {
          console.log('onSelect value', value);
          setSelectedArticle(value);
          setIsOpen(true);
          // onOpen();
        }}
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

      <Modal
        title={foundArticle?.title ?? ''}
        width={768}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        {foundArticle ? (
          <Flex vertical gap={16}>
            <Image src={foundArticle.urlToImage} preview={false} />
            <Descriptions
              bordered
              items={[
                {
                  label: 'Author',
                  children: foundArticle.author,
                  span: 3,
                },
                {
                  label: 'Content',
                  children: foundArticle.content,
                  span: 3,
                },
                {
                  label: 'Description',
                  children: foundArticle.description,
                  span: 3,
                },
                {
                  label: 'Resource Article',
                  children: (
                    <a
                      href={foundArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      read <ExportOutlined />
                    </a>
                  ),
                  span: 3,
                },
                {
                  label: 'Published At',
                  children: formatTimeAgo(foundArticle.publishedAt),
                  span: 3,
                },
              ]}
            />
          </Flex>
        ) : (
          <Spin size="large" tip="Loading article..." />
        )}
      </Modal>
    </div>
  );
};
