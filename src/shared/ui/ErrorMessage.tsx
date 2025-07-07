import { Typography } from 'antd';

export const ErrorMessage = () => {
  return (
    <Typography.Title type="danger">
      An error occurred while loading the data. Please try again later.
    </Typography.Title>
  );
};
