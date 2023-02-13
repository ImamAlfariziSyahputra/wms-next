import { Crown, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import BaseSidebarItem from './BaseSidebarItem';
import sidebarData from '@/data/sidebarData';
import { cn } from '@/lib/utils';
import { toggleSidebar } from '@/redux/slices/appSlice';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.app);

  return (
    <>
      {/* Black Overlay */}
      <div
        className={cn(
          'absolute inset-0 z-10 -translate-x-full bg-black/50 transition duration-300 md:hidden',
          isSidebarOpen && 'translate-x-0'
        )}
        onClick={() => dispatch(toggleSidebar(false))}
      />

      <aside
        className={cn(
          'fixed z-10 h-full w-[265px] shrink-0 overflow-y-auto border-r border-slate-200 bg-white transition-[margin-left] duration-300',
          isSidebarOpen ? 'ml-0' : '-ml-[265px]'
        )}
      >
        {/* Logo */}
        <div className='flex items-center justify-between px-6 py-6'>
          <p className='flex items-center text-2xl font-semibold tracking-tight'>
            <Crown className='mr-2 h-8 w-8' /> WMS
          </p>

          <X
            className={cn(
              'h-8 w-8 cursor-pointer md:hidden',
              isSidebarOpen ? 'inline-block' : 'hidden'
            )}
            onClick={() => dispatch(toggleSidebar(false))}
          />
        </div>

        {/* Menu */}
        <div className='space-y-2 px-4'>
          {sidebarData.map((item, idx) => (
            <BaseSidebarItem key={idx} item={item} />
          ))}
        </div>
      </aside>
    </>
  );
}
