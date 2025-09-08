'use client';
import { useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import { ChevronDownIcon } from '../icons/chevron-down';
import { Text } from './text';

export const Accordion = ({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setOpenedIndex(openedIndex === idx ? null : idx);
  };

  return (
    <div
      className={`cursor-pointer rounded-4xl border-[2px] border-solid border-[rgba(255,255,255,0.15)] bg-[#2B2B2B] p-5 transition-transform ${openedIndex === index ? 'bg-[#2B2B2B]' : 'bg-[#222]'}`}
      onClick={() => handleOpen(index)}
    >
      <div className="flex items-center justify-between gap-3">
        <Text size="2xl" color="white" className="w-[calc(100%-34px)]">
          {question}
        </Text>
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-4xl',
            openedIndex === index
              ? 'bg-[rgba(255,255,255,0.15)]'
              : 'bg-[rgba(255,255,255,0.05)]',
          )}
        >
          <ChevronDownIcon
            className={`transition-transform duration-300 ${
              openedIndex === index ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      <div
        ref={answerRef}
        className={cn(
          'overflow-hidden pt-2 text-[20px] font-normal text-[#8e8e89] transition-[height] duration-300 ease-in-out',
          openedIndex !== index ? 'opacity-0' : 'opacity-100',
        )}
        style={{
          height: openedIndex === index ? answerRef.current?.scrollHeight : 0,
        }}
      >
        {answer}
      </div>
    </div>
  );
};
