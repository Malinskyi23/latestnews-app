import { motion } from 'framer-motion';

import copilot from '../../assets/images/copilot.png';

export const CopilotBg = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        height: 282,
        width: 338,
        backgroundImage: `url(${copilot})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0 bottom 0',
      }}
    />
  );
};
