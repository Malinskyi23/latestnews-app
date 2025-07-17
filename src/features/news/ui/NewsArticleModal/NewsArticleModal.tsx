import { NewsArticleDetails } from '@/entitry/news';
import { Modal } from 'antd';

interface NewsArticleModalProps {
  open: boolean;
  onCancel: () => void;
}

export const NewsArticleModal = ({ open, onCancel }: NewsArticleModalProps) => {
  return (
    <>
      <Modal
        title={'News Article'}
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <NewsArticleDetails />
      </Modal>
    </>
  );
};
