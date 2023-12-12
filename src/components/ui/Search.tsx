import * as React from 'react';

import { cn } from '@/lib/utils';

import search from '@/assets/icons/search.svg';
import Icon from './Icon';
import { Input } from './Input';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <div
        className={cn('w-full flex gap-1 bg-transparent px-3 py-1', className)}
        ref={ref}
        {...props}
      >
        <Input variant={'withOutline'} placeholder={placeholder} />
        <Icon name="search" iconPath={search} />
      </div>
    );
  },
);
Search.displayName = 'Search';

export { Search };
