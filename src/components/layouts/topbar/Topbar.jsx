import { AlignLeft, AlignRight, Search } from 'lucide-react';
import Image from 'next/image';
import profileImg from 'public/face.jpg';
import { toggleSidebar } from '@/redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '@/lib/utils';

export default function Topbar() {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.app);

  return (
    <div className='flex items-center justify-between border-b border-slate-200 bg-white py-4 pl-6 pr-8'>
      <div className='flex items-center gap-x-4'>
        {/* Menu Button */}
        <AlignLeft
          className={cn(
            'h-8 w-8 shrink-0 cursor-pointer',
            isSidebarOpen ? 'inline-block' : 'hidden'
          )}
          onClick={() => dispatch(toggleSidebar(false))}
        />
        <AlignRight
          className={cn(
            'h-8 w-8 shrink-0 cursor-pointer',
            isSidebarOpen ? 'hidden' : 'inline-block'
          )}
          onClick={() => dispatch(toggleSidebar(true))}
        />

        {/* Search Input */}
        <div className='relative'>
          <Search className='absolute left-[.5rem] top-[50%] h-4 w-4 -translate-y-[50%] text-slate-400' />
          <input
            type='text'
            className='h-9 w-full max-w-[17rem] rounded-md border border-slate-200 px-3 pl-7 pr-2 text-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none'
            placeholder='Type to search...'
          />
        </div>
      </div>

      {/* Avatar */}
      <div className='flex items-center'>
        <p className='mr-3 text-sm font-semibold'>Matt Murdock</p>
        <Image
          src={profileImg}
          alt=''
          width='0'
          height='0'
          sizes='100vw'
          placeholder='blur'
          className='h-10 w-10 cursor-pointer rounded-full object-cover'
        />
      </div>
    </div>
  );
}
