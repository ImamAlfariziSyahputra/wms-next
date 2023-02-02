import { Radio } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { PlayCircle } from 'lucide-react';

const sidebarData = [
  {
    title: 'Listen Now',
    Icon: PlayCircle,
  },
  {
    title: 'Browse',
    Icon: LayoutGrid,
    children: [
      {
        title: 'Child One',
        Icon: PlayCircle,
      },
      {
        title: 'Contact',
        Icon: PlayCircle,
        children: [
          {
            title: 'Facebook',
            Icon: PlayCircle,
          },
          {
            title: 'Twitter',
            Icon: PlayCircle,
          },
          {
            title: 'Instagram',
            Icon: PlayCircle,
          },
        ],
      },
    ],
  },
  {
    title: 'Radio',
    Icon: Radio,
    children: [
      {
        title: 'Child One',
        Icon: PlayCircle,
      },
      {
        title: 'Contact',
        Icon: PlayCircle,
        children: [
          {
            title: 'Facebook',
            Icon: PlayCircle,
          },
          {
            title: 'Twitter',
            Icon: PlayCircle,
          },
          {
            title: 'Instagram',
            Icon: PlayCircle,
            children: [
              {
                title: 'Facebook',
                Icon: PlayCircle,
              },
              {
                title: 'Twitter',
                Icon: PlayCircle,
              },
              {
                title: 'Instagram',
                Icon: PlayCircle,
                children: [
                  {
                    title: 'Facebook',
                    Icon: PlayCircle,
                  },
                  {
                    title: 'Twitter',
                    Icon: PlayCircle,
                  },
                  {
                    title: 'Instagram',
                    Icon: PlayCircle,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default sidebarData;
