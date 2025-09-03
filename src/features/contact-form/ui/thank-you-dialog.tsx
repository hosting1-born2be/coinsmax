'use client';

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

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/10 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] h-max w-[500px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-4xl border border-white/15 bg-[#222] focus:outline-none max-lg:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="flex h-full flex-col items-center justify-center gap-8 p-8">
              <SuccessIcon />
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <Title as="h4" size="3xl" className="leading-11">
                  Your message has been sent successfully!
                </Title>
                <Text size="base" color="faded">
                  Thank you for reaching out to Coinsmax. Our team will review
                  your request and get back to you as soon as possible.
                </Text>
              </div>
              <Close asChild>
                <Button variant="secondary" fullWidth>
                  Continue
                </Button>
              </Close>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
  >
    <mask
      id="mask0_248_937"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="42"
      height="43"
    >
      <path
        d="M23.9995 4.5L29.2525 8.332L35.7555 8.32L37.7525 14.508L43.0205 18.32L40.9995 24.5L43.0205 30.68L37.7525 34.492L35.7555 40.68L29.2525 40.668L23.9995 44.5L18.7465 40.668L12.2435 40.68L10.2465 34.492L4.97852 30.68L6.99952 24.5L4.97852 18.32L10.2465 14.508L12.2435 8.32L18.7465 8.332L23.9995 4.5Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 24.5L22 29.5L32 19.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </mask>
    <g mask="url(#mask0_248_937)">
      <path d="M0 0.5H48V48.5H0V0.5Z" fill="url(#paint0_linear_248_937)" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_248_937"
        x1="24"
        y1="0.5"
        x2="24"
        y2="48.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00A1" />
        <stop offset="1" stopColor="#7A4CE7" />
      </linearGradient>
    </defs>
  </svg>
);
