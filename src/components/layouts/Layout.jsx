import { useSelector } from 'react-redux';
import Sidebar from '@/components/layouts/sidebar/Sidebar';
import { cn } from '@/lib/utils';
import Topbar from './topbar/Topbar';

export default function Layout({ children }) {
  const { isSidebarOpen } = useSelector((state) => state.app);

  return (
    <div className='flex min-h-screen'>
      <Sidebar />

      <div
        className={cn(
          'w-full transition-[margin-left] duration-300',
          isSidebarOpen ? 'md:ml-[265px]' : 'ml-0'
        )}
      >
        <Topbar />

        <div className='min-h-[calc(100vh-65px-32px)] p-4'>{children}</div>

        <div className='border-t border-slate-200 bg-white py-2 text-center text-xs text-slate-600'>
          Copyright © {new Date().getFullYear()} Sarana Mulya Group
        </div>
      </div>
    </div>
  );
}
