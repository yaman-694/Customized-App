import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { useFilterContext } from "@/contexts/filterContext";
import { cn } from "@/lib/utils";
import { DropDownOptionType } from "@/interfaces";

export function DropDown({
  type,
  options,
  className,
  fontStyle,
}: {
  type: DropDownOptionType["type"];
  fontStyle?: string;
  options: { value: string; label: string }[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useFilterContext();
  const [value, setValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    interface FilterBox {
      [key: string]: string[] | string | boolean;
    }
    const values = (state as FilterBox)[type.toLowerCase()] as string[];
    setValue(values);
  }, [state, type]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          {value?.length != 0
            ? `${value.length + " " + type} selected`
            : `Select ${type}`}
          <CaretSortIcon className="hidden md:block ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${type}`} className="h-9" />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup className="max-h-40 overflow-y-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                className={fontStyle}
                onSelect={(currentValue) => {
                  currentValue =
                    currentValue[0].toUpperCase() + currentValue.slice(1);
                  const updatedValue = value.includes(currentValue)
                    ? value.filter((val) => val !== currentValue)
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
                    "ml-auto h-4 w-4",
                    value.includes(option.value) ? "opacity-100" : "opacity-0"
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
