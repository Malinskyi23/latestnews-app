import { formatTimeAgo } from '@/shared/helpers';
import { useAppSelector } from '@/shared/lib/hooks';
import { ExportOutlined } from '@ant-design/icons';
import { Descriptions, Image } from 'antd';

import { selectArticle } from '../../model/newsArticleSlice';

export const NewsArticleDetails = () => {
  const article = useAppSelector(selectArticle);

  return (
    <>
      <Descriptions
        bordered
        items={[
          {
            label: 'Image',
            children: <Image src={article.urlToImage} preview={false} />,
            span: 3,
          },
          {
            label: 'Author',
            children: article.author,
            span: 3,
          },
          {
            label: 'Content',
            children: article.content,
            span: 3,
          },
          {
            label: 'Description',
            children: article.description,
            span: 3,
          },
          {
            label: 'Resource Article',
            children: (
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                read <ExportOutlined />
              </a>
            ),
            span: 3,
          },
          {
            label: 'Published At',
            children: formatTimeAgo(article.publishedAt),
            span: 3,
          },
        ]}
      />
    </>
  );
};
