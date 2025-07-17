import { NEWS_CATEGORIES } from '@/shared/consts/constants';
import { Button, Flex, Typography } from 'antd';
import { type ReactNode } from 'react';

interface NewsCategoriesProps {
  category: string;
  setCategory: (category: string) => void;
}

export const NewsCategories = ({
  category = 'business',
  setCategory,
}: NewsCategoriesProps) => {
  const content: ReactNode = (
    <>
      <Typography.Title level={4} style={{ margin: 0 }}>
        Find sources that display news of this category:{' '}
      </Typography.Title>
      <div
        style={{
          overflowX: 'auto',
          paddingBottom: 8,
        }}
      >
        <Flex wrap="nowrap" gap={8}>
          {NEWS_CATEGORIES.map((item, idx) => (
            <Button
              key={`${item}-${idx}`}
              shape="round"
              variant="filled"
              color={item === category ? 'danger' : 'default'}
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </Flex>
      </div>
    </>
  );

  return <>{content}</>;
};
