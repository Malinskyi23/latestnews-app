import { Flex, Grid, Skeleton } from 'antd';
import React from 'react';

const { useBreakpoint } = Grid;

const NUMBER_OF_ELEMENTS = 4;

export const SkeletonGrid = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md; // anything below 768px is considered mobile

  return (
    <>
      {Array.from({ length: NUMBER_OF_ELEMENTS }).map((_, idx) => (
        <React.Fragment key={idx}>
          <Flex vertical>
            <Skeleton.Image
              active
              style={{
                height: isMobile ? '520px' : '352px',
                width: isMobile ? '100%' : '230px',
              }}
            />
            <Skeleton active title={false} paragraph={{ rows: 2 }} />
          </Flex>
        </React.Fragment>
      ))}
    </>
  );
};
