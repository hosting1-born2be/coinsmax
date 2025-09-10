'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Title } from '@/shared/ui/kit/title';

export const PolicySectionLayout = ({
  children,
  title,
  className,
  titleId,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleId?: string;
}) => {
  return (
    <section className={cn('flex flex-col gap-6', className)}>
      <Title size="3xl" id={titleId}>
        {title}
      </Title>
      {children}
    </section>
  );
};
