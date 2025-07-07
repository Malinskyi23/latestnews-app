import type { News } from '@/shared/api/generated';
import { formatTimeAgo } from '@/shared/helpers';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, theme, Typography } from 'antd';

import copilot from '../../../../shared/assets/images/copilot.png';

interface HeroBannerProps {
  item: News;
}

export const HeroBanner = ({ item }: HeroBannerProps) => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  return (
    <Card
      variant={'borderless'}
      style={{
        position: 'relative',
        height: 500,
        background: colorBgLayout,
        backgroundImage: `url(${copilot})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0 bottom 0',
      }}
      styles={{ body: { padding: '54px 208px 54px 54px' } }}
    >
      <Typography>
        <Typography.Text color="primary">
          {formatTimeAgo(item.published)} • by {item.author}
        </Typography.Text>
      </Typography>
      <Typography.Title>{item.title}</Typography.Title>
      <Typography>
        <Typography.Text style={{ marginTop: 20 }}>
          {item.description}
        </Typography.Text>
      </Typography>
      {/* <Typography></Typography> */}

      <Button
        style={{
          marginTop: 50,
          padding: '14px 42px',
          backgroundColor: '#2C2B36',
          color: 'white',
        }}
        iconPosition="end"
        icon={<ArrowRightOutlined />}
        href={item.url}
        target="_blanc"
      >
        Read
      </Button>
    </Card>
  );
};
