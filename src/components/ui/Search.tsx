import * as React from 'react';

import { cn } from '@/lib/utils';

import search from './../../../public/icons/search.svg';
import Icon from './Icon';
import { Input } from './Input';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <div
        className={cn('flex w-full gap-1 bg-transparent px-3 py-1', className)}
        {...props}
      >
        <Icon width={'20'} height="20" name="search" iconPath={search} />
        <Input variant={'withOutline'} placeholder={placeholder} ref={ref} />
      </div>
    );
  },
);
Search.displayName = 'Search';

export { Search };
