import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const subHeadingVariants = cva('mt-6 text-lg leading-8 text-gray-600', {
  variants: {
    variant: {
      default: '',
      secondary: 'text-gray-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subHeadingVariants> {
  asChild?: boolean;
}

const SubHeading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(subHeadingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

SubHeading.displayName = 'SubHeading';

export { SubHeading };
