'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Title } from '@/shared/ui/kit/title';

export const PolicySectionLayout = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <section className={cn('flex flex-col gap-2', className)}>
      <Title size="3xl">{title}</Title>
      {children}
    </section>
  );
};
