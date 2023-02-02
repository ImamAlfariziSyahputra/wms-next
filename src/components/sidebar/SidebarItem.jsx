import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SidebarItem({
  item,
  depth = 0,
  activeDropdown,
  setActiveDropdown = () => {},
  containerCN,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(
      //! if 1st dropdown, check mainTitle and childsOpen.
      //! if children, only check the childsOpen.
      depth === 0
        ? activeDropdown.mainTitle === item.title &&
            activeDropdown.childsOpen.includes(depth)
        : activeDropdown.childsOpen.includes(depth)
    );
  }, [activeDropdown]);

  if (item.children) {
    return (
      <div
        className={cn(
          'rounded-md text-sm font-medium hover:bg-slate-400/10',
          containerCN
        )}
      >
        <button
          className='flex w-full items-center justify-between px-2 py-2'
          onClick={(e) => {
            //! to avoid trigger parent's onClick
            e.stopPropagation();

            setActiveDropdown((current) => {
              if (current.childsOpen.includes(depth)) {
                //* on close
                //! if it's 1st dropdown and the title changed,
                //! update the mainTitle and open its first child
                if (depth === 0 && current.mainTitle !== item.title) {
                  current.mainTitle = item.title;
                  current.childsOpen = [0];
                  return { ...current };
                }

                //! if it's children,
                //! found the position and remove the rest after
                //! (if the parent got closed, close all below)
                current.childsOpen.length = current.childsOpen.indexOf(depth);
                return { ...current };
              } else {
                //* on open
                //! if 1st dropdown, update the "mainTitle" too.
                if (depth === 0) {
                  current.mainTitle = item.title;
                }

                //! if the child clicked, just update the childsOpen property
                current.childsOpen = [...current.childsOpen, depth].sort();
                return { ...current };
              }
            });
          }}
        >
          <span className='flex items-center'>
            <item.Icon className='mr-2 h-4 w-4 shrink-0' /> {item.title}
          </span>
          <ChevronRight
            className={cn(
              'duration-[.3s] h-4 w-4 transition-all',
              open && 'rotate-90'
            )}
          />
        </button>

        <div
          className={cn(
            'sidebar-content relative h-0 space-y-1 overflow-hidden px-2',
            open && 'h-auto'
          )}
        >
          {/* overlay (to avoid click bug) */}
          {/* <div
            className='absolute z-[50] -ml-[.5rem] h-full bg-red-600/60'
            style={{
              width: `calc(100% + ${0.5 * depth + 1}rem)`,
            }}
            onClick={(e) => {
              console.log('overlay clicked');
              e.stopPropagation();
            }}
          /> */}

          {item.children.map((child, idx) => (
            <SidebarItem
              key={idx}
              item={child}
              depth={depth + 1}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <button
        className='flex min-h-[2.25rem] w-full items-center rounded-md px-2 text-sm font-medium hover:bg-slate-400/10'
        style={{
          zIndex: depth + 1,
        }}
      >
        <item.Icon className='mr-2 h-4 w-4 shrink-0' /> {item.title}
      </button>
    );
  }
}
