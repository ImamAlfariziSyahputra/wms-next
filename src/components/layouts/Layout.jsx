import Sidebar from '@/components/layouts/sidebar/Sidebar';
import { cn } from '@/lib/utils';
import Topbar from './topbar/Topbar';

export default function Layout({ children }) {
  return (
    <div className='flex h-screen'>
      <Sidebar />

      <div className={cn('w-full')}>
        <Topbar />

        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
}
