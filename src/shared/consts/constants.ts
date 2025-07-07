import {
  AlertOutlined,
  ApartmentOutlined,
  BarsOutlined,
  BookOutlined,
  DesktopOutlined,
  FrownOutlined,
  HeartOutlined,
  HeartTwoTone,
  PlaySquareOutlined,
  RadarChartOutlined,
  SmileOutlined,
  StarFilled,
  StarOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

export const FILM_COLLECTIONS_LIST = [
  {
    title: 'Top popular movies',
    icon: 'StarOutlined',
    url: '/films/collections/top-popular-movies',
    type: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'Top 250 movies',
    icon: 'StarFilled',
    url: '/films/collections/top-250-movies',
    type: 'TOP_250_MOVIES',
  },
  {
    title: 'Vampire',
    icon: 'HeartTwoTone',
    url: '/films/collections/vampire-theme',
    type: 'VAMPIRE_THEME',
  },
  {
    title: 'Comics',
    icon: 'BookOutlined',
    url: '/films/collections/comics-theme',
    type: 'COMICS_THEME',
  },
  {
    title: 'Family',
    icon: 'UsergroupAddOutlined',
    url: '/films/collections/family',
    type: 'FAMILY',
  },
  {
    title: 'Romantic',
    icon: 'HeartOutlined',
    url: '/films/collections/romantic-theme',
    type: 'LOVE_THEME',
  },
  {
    title: 'Zombie',
    icon: 'FrownOutlined',
    url: '/films/collections/zombie-theme',
    type: 'ZOMBIE_THEME',
  },
  {
    title: 'Catastrophe',
    icon: 'AlertOutlined',
    url: '/films/collections/catastrophe-theme',
    type: 'CATASTROPHE_THEME',
  },
  {
    title: 'Popular series',
    icon: 'DesktopOutlined',
    url: '/films/collections/popular-series',
    type: 'POPULAR_SERIES',
  },
];

export const FILMS_LIST = [
  {
    title: 'Films',
    icon: 'VideoCameraOutlined',
    url: '/films',
    type: 'FILM',
  },
  {
    title: 'TV Series',
    icon: 'BarsOutlined',
    url: '/tv-series',
    type: 'TV_SERIES',
  },
  {
    title: 'Cartoons',
    icon: 'SmileOutlined',
    url: '/cartoons',
    type: 'FILM',
  },
];

export const EXCLUDE_GENRES = [
  '',
  'новости',
  'для взрослых',
  'церемония',
  'реальное ТВ',
  'ток-шоу',
];

export const ICON_COMPONENTS = {
  AlertOutlined,
  StarOutlined,
  DesktopOutlined,
  StarFilled,
  HeartTwoTone,
  BookOutlined,
  UsergroupAddOutlined,
  HeartOutlined,
  FrownOutlined,
  RadarChartOutlined,
  VideoCameraOutlined,
  PlaySquareOutlined,
  BarsOutlined,
  ApartmentOutlined,
  SmileOutlined,
};
