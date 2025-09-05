'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const StepCard = ({
  number,
  text,
  imgUrl,
  color,
  title,
  mobileReverse = false,
  reverse = false,
}: {
  number: string;
  text: string;
  imgUrl: string;
  color: string;
  reverse?: boolean;
  mobileReverse?: boolean;
  title?: string;
}) => {
  return (
    <article
      className={cn(
        'flex w-full max-md:flex-col-reverse',
        reverse && 'flex-row-reverse',
        mobileReverse ? 'max-md:flex-col' : 'max-md:flex-col-reverse',
      )}
    >
      <section className="flex w-1/2 flex-col gap-8 bg-[#222] p-8 max-md:w-full">
        <div className="flex flex-col">
          <span
            style={{ color }}
            className="text-[64px] leading-17 max-md:text-[42px]"
          >
            {number}
          </span>
          {title && (
            <Title size="3xl" className="leading-10">
              {title}
            </Title>
          )}
        </div>
        <Text size="xl" color={title ? 'faded' : 'white'}>
          {text}
        </Text>
      </section>
      <Image
        className="w-1/2 object-cover max-md:w-full"
        src={imgUrl}
        alt={imgUrl}
        width={560}
        height={200}
        unoptimized
      />
    </article>
  );
};
