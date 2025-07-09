import { useGetNewsCategoriesQuery } from '@/shared/api/currentsApi';
import { Button, Flex } from 'antd';
import { type ReactNode } from 'react';

interface NewsCategoriesProps {
  selected?: string;
  onClick: (category: string) => void;
}

export const NewsCategories = ({ selected, onClick }: NewsCategoriesProps) => {
  const result = useGetNewsCategoriesQuery({});

  let content: ReactNode;
  if (result.isLoading) {
    content = 'Loading...';
  } else if (result.isSuccess) {
    content = (
      <div
        style={{
          overflowX: 'auto',
          paddingBottom: 8,
        }}
      >
        <Flex wrap="nowrap" gap={8}>
          {result.data?.categories.map((category, idx) => (
            <Button
              key={`${category}-${idx}`}
              shape="round"
              variant="filled"
              color={category === selected ? 'purple' : 'default'}
              onClick={() => onClick(category)}
            >
              {category}
            </Button>
          ))}
        </Flex>
      </div>
    );
  }
  return <>{content}</>;
};
