import { NEWS_CATEGORIES } from '@/shared/consts/constants';
import { Button, Flex, Typography } from 'antd';
import { type ReactNode } from 'react';

interface NewsCategoriesProps {
  selected?: string;
  onClick: (category: string) => void;
}

export const NewsCategories = ({ selected, onClick }: NewsCategoriesProps) => {
  const content: ReactNode = (
    <>
      <Typography.Text>
        Find sources that display news of this category:{' '}
      </Typography.Text>
      <div
        style={{
          overflowX: 'auto',
          paddingBottom: 8,
        }}
      >
        <Flex wrap="nowrap" gap={8}>
          {NEWS_CATEGORIES.map((category, idx) => (
            <Button
              key={`${category}-${idx}`}
              shape="round"
              variant="solid"
              color={category === selected ? 'purple' : 'default'}
              onClick={() => onClick(category)}
            >
              {category}
            </Button>
          ))}
        </Flex>
      </div>
    </>
  );

  return <>{content}</>;
};
