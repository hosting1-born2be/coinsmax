'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

export const PolicyText = ({
  children,
  className,
  flex = false,
}: {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
}) => {
  return (
    <Text
      size="xl"
      color="faded"
      weight={300}
      className={cn(flex && 'flex gap-2', className)}
    >
      {children}
    </Text>
  );
};
