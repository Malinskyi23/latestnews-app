import {
  AppstoreOutlined,
  BarsOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Segmented, Space } from 'antd';

interface NewsViewSwitcherProps {
  viewMode: string;
  setViewMode: (mode: string) => void;
}

export const NewsViewSwitcher = ({
  viewMode,
  setViewMode,
}: NewsViewSwitcherProps) => {
  return (
    <Segmented
      defaultValue={viewMode}
      style={{ width: 'fit-content' }}
      onChange={value => setViewMode(value)}
      options={[
        {
          value: 'grid',
          label: (
            <Space>
              <AppstoreOutlined /> Grid
            </Space>
          ),
        },
        {
          value: 'table',
          label: (
            <Space>
              <TableOutlined /> Table
            </Space>
          ),
        },
        {
          value: 'list',
          label: (
            <Space>
              <BarsOutlined /> List
            </Space>
          ),
        },
      ]}
    />
  );
};
