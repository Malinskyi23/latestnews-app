import { formatTimeAgo } from '@/shared/helpers';
import type { NewsArticle } from '@/shared/types';
import { ExportOutlined } from '@ant-design/icons';
import { Descriptions, Drawer, Flex, Image } from 'antd';

interface ArticlePanelProps {
  item: NewsArticle;
  open: boolean;
  onClose: () => void;
}

export const ArticlePanel = ({ item, open, onClose }: ArticlePanelProps) => {
  return (
    <Drawer
      title={item.title}
      placement={'right'}
      width={'50%'}
      onClose={onClose}
      open={open}
      motion={null}
    >
      <Flex vertical gap={16}>
        <Image src={item.urlToImage} preview={false} />
        <Descriptions
          bordered
          items={[
            {
              label: 'Author',
              children: item.author,
              span: 3,
            },
            {
              label: 'Content',
              children: item.content,
              span: 3,
            },
            {
              label: 'Description',
              children: item.description,
              span: 3,
            },
            {
              label: 'Resource Article',
              children: (
                <a key="list-read" href={item.url} target="blank">
                  read <ExportOutlined />
                </a>
              ),
              span: 3,
            },
            {
              label: 'Published At',
              children: formatTimeAgo(item.publishedAt),
              span: 3,
            },
          ]}
        />
      </Flex>
    </Drawer>
  );
};
