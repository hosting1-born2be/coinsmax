'use client';

import { cn } from '@/shared/lib/utils/cn';

import { Text } from './text';

export const List = ({
  values,
  type = 'disc',
  className,
}: {
  values: string[];
  type?: 'disc' | 'decimal' | 'alpha';
  className?: string;
}) => {
  const listStyle = {
    disc: 'list-disc',
    decimal: 'list-decimal',
    alpha: 'list-[lower-alpha]',
  }[type];

  return (
    <ul
      className={cn(
        'flex flex-col gap-3 pl-5 text-xl font-light text-[rgba(179,179,181,0.50)]',
        className,
        listStyle,
      )}
    >
      {values.map(v => (
        <li key={v}>
          <Text size="xl" color="faded" weight={300}>
            {v}
          </Text>
        </li>
      ))}
    </ul>
  );
};
