'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { CloseIcon } from '@/shared/ui/icons/close';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ImportantNoticeDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  const t = useTranslations('importantNoticeDialog');

  const onOpenHandle = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Root open={isOpen} onOpenChange={onOpenHandle}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-[#161616]/20 backdrop-blur-[2.5px]" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] h-max w-[500px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-4xl border border-white/15 bg-[#222] focus:outline-none max-lg:w-[96%] max-md:h-[80%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="relative flex h-full flex-col items-center justify-center gap-8 p-8">
              <Close className="absolute top-7 right-7 cursor-pointer outline-0">
                <CloseIcon />
              </Close>
              <MsgIcon />
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <Title as="h4" size="3xl" className="leading-11">
                  {t('title', { fallback: 'Important Notice' })}
                </Title>
                <Text size="base" color="faded">
                  {t('text.0', { fallback: 'By using' })}{' '}
                  <span className="underline">Coinsmax.io</span>,{' '}
                  {t('text.1', {
                    fallback:
                      'you confirm that you understand the risks linked to buying or selling cryptocurrency. Digital asset transactions can be volatile, and it’s important to be fully aware before proceeding. For details, please review our risk disclosure.',
                  })}{' '}
                  <br />
                  <br />
                  {t('text.2', {
                    fallback:
                      'Once an order is confirmed, it cannot be changed or reversed. Please make sure your personal details and wallet address are entered correctly before completing your transaction.',
                  })}
                </Text>
              </div>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const MsgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44 17.3747C44 16.5411 43.0402 16.0734 42.3836 16.5872L25.6978 29.6456C23.5256 31.3456 20.4744 31.3456 18.3022 29.6456L1.6163 16.5872C0.9599 16.0734 0 16.5411 0 17.3747V38C0 41.3136 2.6863 44 6 44H38C41.3138 44 44 41.3136 44 38V17.3747Z"
      fill="url(#paint0_linear_177_3358)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4C4 1.79086 5.79086 0 8 0H36C38.2092 0 40 1.79086 40 4V13.3734L23.2326 26.4956C22.5086 27.0624 21.4914 27.0624 20.7674 26.4956L4 13.3734V4ZM22 6C23.1046 6 24 6.89544 24 8V12C24 13.1046 23.1046 14 22 14C20.8954 14 20 13.1046 20 12V8C20 6.89544 20.8954 6 22 6ZM22 20C23.1046 20 24 19.1046 24 18C24 16.8954 23.1046 16 22 16C20.8954 16 20 16.8954 20 18C20 19.1046 20.8954 20 22 20Z"
      fill="url(#paint1_linear_177_3358)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_177_3358"
        x1="22"
        y1="0"
        x2="22"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA500" />
        <stop offset="1" stopColor="#FFB52F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_177_3358"
        x1="22"
        y1="0"
        x2="22"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00A1" />
        <stop offset="1" stopColor="#7A4CE7" />
      </linearGradient>
    </defs>
  </svg>
);
