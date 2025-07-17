import { useAppDispatch } from '@/shared/lib/hooks';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';

import { toggleDarkMode } from '../../model/themeSlice';

export const ChangeTheme = () => {
  const dispatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Segmented
      onChange={handleToggleDarkMode}
      options={[
        {
          value: 'Dark mode',
          icon: <MoonOutlined />,
        },
        {
          value: 'Light mode',
          icon: <SunOutlined />,
        },
      ]}
    />
  );
};
