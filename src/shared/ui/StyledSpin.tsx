import { Spin } from 'antd';
import React from 'react';

const style: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={style} />;

export const StyledSpin = () => {
  return <Spin tip="Loading...">{content}</Spin>;
};
