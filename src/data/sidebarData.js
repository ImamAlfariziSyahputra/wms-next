import { PlayCircle } from 'lucide-react';

const sidebarData = [
  {
    title: 'Dashboard',
    type: 'info',
    children: [
      {
        title: 'Dashboard',
        link: '/',
        Icon: PlayCircle,
      },
    ],
  },
  {
    title: 'Data',
    type: 'info',
    children: [
      {
        title: 'Master Data',
        link: '/master-data',
        Icon: PlayCircle,
        children: [
          {
            title: 'Category',
            link: '/master-data/category',
            Icon: PlayCircle,
          },
          {
            title: 'Customers',
            link: '/master-data/customers',
            Icon: PlayCircle,
          },
        ],
      },
    ],
  },
  {
    title: 'Misc',
    type: 'info',
    children: [
      {
        title: 'Settings',
        link: '/settings',
        Icon: PlayCircle,
      },
    ],
  },
];

export default sidebarData;
