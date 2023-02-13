import { Database, LayoutGrid, PlayCircle, Settings } from 'lucide-react';

const sidebarData = [
  {
    title: 'Dashboard',
    type: 'info',
    children: [
      {
        title: 'Dashboard',
        link: '/',
        Icon: LayoutGrid,
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
        Icon: Database,
        children: [
          {
            title: 'Categories',
            link: '/master-data/categories',
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
        Icon: Settings,
      },
    ],
  },
];

export default sidebarData;
