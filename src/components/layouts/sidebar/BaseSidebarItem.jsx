import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isEqual } from 'lodash';

export default function BaseSidebarItem({ item, depth = 0, containerCN }) {
  const [activeDropdown, setActiveDropdown] = useState({
    mainTitle: '',
    childsOpen: [],
  });

  return (
    <div className={cn('mt-2', containerCN)}>
      {/* Group Info Text */}
      <h2 className='px-2 text-lg font-semibold tracking-tight'>
        {item.title}
      </h2>

      {item?.children?.map((child, idx) => (
        <SidebarItem
          key={idx}
          item={child}
          depth={depth}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />
      ))}
    </div>
  );
}

function SidebarItem({
  item,
  depth = 0,
  activeDropdown,
  setActiveDropdown = () => {},
  containerCN,
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isParentActive, setIsParentActive] = useState({
    depth: null,
    isActive: false,
  });

  //! isParentActive Logic
  useEffect(() => {
    const pathname = router.pathname.split('/').filter((p) => p !== '');
    pathname.length = depth + 1;

    let link = [];
    if (item?.link) {
      link = item.link.split('/').filter((p) => p !== '');
    }

    setIsParentActive({ depth, isActive: isEqual(pathname, link) });
  }, [router.pathname]);

  //! isActiveDropdown Logic
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

  //! JSX
  if (item.children) {
    return (
      <div
        className={cn(
          'rounded-md font-medium hover:bg-purple-400/10',
          containerCN
        )}
      >
        <button
          type='button'
          className={cn(
            'flex w-full items-center justify-between rounded-md px-2 py-2 text-sm',
            isParentActive.isActive &&
              isParentActive.depth <= depth &&
              'bg-purple-200'
          )}
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
              }
              //* on open
              //! if 1st dropdown, update the "mainTitle" too.
              if (depth === 0) {
                current.mainTitle = item.title;
              }

              //! if the child clicked, just update the childsOpen property
              current.childsOpen = [...current.childsOpen, depth].sort();
              return { ...current };
            });
          }}
        >
          <span className='flex items-center'>
            <item.Icon className='mr-2 h-4 w-4 shrink-0' /> {item.title}
          </span>
          <ChevronRight
            className={cn(
              'h-4 w-4 transition-all duration-300',
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
  }

  return (
    <Link
      href={item.link || '#'}
      className={cn(
        'flex min-h-[2.25rem] w-full items-center rounded-md px-2 text-sm font-medium transition hover:bg-slate-400/10',
        item.link === router.pathname &&
          'bg-purple-600 text-white hover:bg-purple-600'
      )}
      style={{
        zIndex: depth + 1,
      }}
    >
      <item.Icon className='mr-2 h-4 w-4 shrink-0' /> {item.title}
    </Link>
  );
}
