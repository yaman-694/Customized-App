import * as React from 'react';

import { cn } from '@/lib/utils';

import search from '@/assets/icons/search.svg';
import Icon from './Icon';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex gap-1 rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:border-blue-300 focus:outline-none focus:ring hover:border-cyan-100 hover:border-2">
        <input
          className={cn(
            'flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm focus:outline-none',
            className,
          )}
          ref={ref}
          {...props}
        />
        <Icon name="search" iconPath={search} />
      </div>
    );
  },
);
Search.displayName = 'Search';

export { Search };
