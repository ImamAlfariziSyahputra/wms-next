import { Crown } from 'lucide-react';
import BaseSidebarItem from './BaseSidebarItem';
import sidebarData from '@/data/sidebarData';
import { useState } from 'react';

export default function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState({
    mainTitle: '',
    childsOpen: [],
  });

  return (
    <aside className='h-full w-[265px] shrink-0 overflow-y-auto border-r border-slate-200 bg-white'>
      {/* Logo */}
      <div className='px-6 py-6'>
        <p className='flex items-center text-2xl font-semibold tracking-tight'>
          <Crown className='mr-2' /> WMS
        </p>
      </div>

      {/* Menu */}
      <div className='space-y-2 px-4'>
        {sidebarData.map((item, idx) => (
          <BaseSidebarItem
            key={idx}
            item={item}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        ))}
      </div>
    </aside>
  );
}
