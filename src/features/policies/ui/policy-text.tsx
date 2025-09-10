'use client';

import { Text } from '@/shared/ui/kit/text';

export const PolicyText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text size="xl" color="faded" weight={300}>
      {children}
    </Text>
  );
};
