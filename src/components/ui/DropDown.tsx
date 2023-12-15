import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import { Button } from '@/components/ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useFilterBox } from '@/contexts/filterBox';

export function DropDown({
  type,
  options,
  reset
}: {
  type: 'Role' | 'Location' | 'Company'|'Country';
  options: { value: string; label: string }[];
  reset: boolean
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);
  const { dispatch } = useFilterBox();

  React.useEffect(() => {
    if(reset)
    setValue([]);
  }, [reset]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value.length != 0
            ? `${value.length + ' ' + type} selected`
            : `Select ${type}`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${type}`} className="h-9" />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map(option => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={currentValue => {
                  const updatedValue = value.includes(currentValue)
                    ? value.filter(val => val !== currentValue)
                    : [...value, currentValue];
                  setValue(updatedValue);
                  dispatch({
                    type: `ADD_${type.toUpperCase()}`,
                    value: updatedValue,
                  });
                }}
              >
                {option.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value.includes(option.value) ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
