import { Radio } from 'lucide-react';
import { Search } from 'lucide-react';
import { Crown, PlayCircle, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import profileImg from 'public/face.jpg';

export default function Home() {
  return (
    <div className='grid grid-cols-5'>
      <aside className='h-screen border-r border-slate-200'>
        {/* Title */}
        <div className='px-8 py-6'>
          <p className='flex items-center text-2xl font-semibold tracking-tight'>
            <Crown className='mr-2' /> WMS
          </p>
        </div>

        {/* Menu */}
        <div className='px-6'>
          <h2 className='mb-2 px-2 text-lg font-semibold tracking-tight'>
            Discover
          </h2>

          <div className='space-y-1'>
            <button className='flex min-h-[2.25rem] w-full items-center rounded-md bg-slate-100 px-2 text-sm font-medium hover:bg-slate-100'>
              <PlayCircle className='mr-2 h-4 w-4' /> Listen Now
            </button>
            <button className='flex min-h-[2.25rem] w-full items-center rounded-md px-2 text-sm font-medium hover:bg-slate-100'>
              <LayoutGrid className='mr-2 h-4 w-4' /> Browse
            </button>
            <button className='flex min-h-[2.25rem] w-full items-center rounded-md px-2 text-sm font-medium hover:bg-slate-100'>
              <Radio className='mr-2 h-4 w-4' /> Radio
            </button>
          </div>
        </div>
      </aside>

      <div className='col-span-4'>
        {/* Topbar */}
        <div className='flex items-center justify-between border-b border-slate-200 px-8 py-4'>
          {/* Search Input */}
          <div className='relative'>
            <Search className='absolute left-[.5rem] top-[50%] h-4 w-4 -translate-y-[50%] text-slate-400' />
            <input
              type='text'
              className='h-9 w-full max-w-[17rem] rounded-md border border-slate-200 px-3 pl-7 pr-2 text-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none'
              placeholder='Type to search...'
            />
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
      </div>
    </div>
  );
}
