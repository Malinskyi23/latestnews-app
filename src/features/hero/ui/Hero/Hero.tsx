import { CopilotBg } from '@/shared/ui';
import { Flex, Typography } from 'antd';

import homeDesktopLight from '../../../../shared/assets/images/home-desktop-light2x.webp';
import styles from './styles.module.css';

export const Hero = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: 400,
        backgroundImage: `url(${homeDesktopLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center ',
      }}
    >
      <div className={styles.container}>
        <Flex justify="end">
          <Typography.Title level={2}>
            Curate and Analyze Online News Effortlessly
          </Typography.Title>
        </Flex>
        <div className={styles.wrapperBg}>
          <CopilotBg />
        </div>
      </div>
    </div>
  );
};
