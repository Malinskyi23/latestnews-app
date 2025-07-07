import { HeroBanner } from '@/features/hero';
import type { News } from '@/shared/api/generated';
import { Carousel } from 'antd';

import styles from './styles.module.css';

interface NewsSliderProps {
  list: News[];
}

export const NewsSlider = ({ list }: NewsSliderProps) => {
  return (
    <Carousel autoplay dots={{ className: styles.dots }}>
      {list.map(item => (
        <HeroBanner key={item.id} item={item} />
      ))}
    </Carousel>
  );
};
