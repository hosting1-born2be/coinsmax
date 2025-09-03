'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

import { cn } from '@/shared/lib/utils/cn';
import { ThreeLinesIcon } from '@/shared/ui/icons/three-lines';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';

import { ChevronRightIcon } from '../icons/chevron-right';
import { Title } from '../kit/title';
import { LangSwitcher } from './lang-switcher';
import { LongSocialNetworks } from './long-social-networks';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <Button size="sm" onClick={() => setIsOpen(!isOpen)}>
          <ThreeLinesIcon />
        </Button>
      </Trigger>
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-[#161616]/20 backdrop-blur-[2.5px]" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] h-full w-full -translate-x-1/2 -translate-y-1/2 transform overflow-hidden bg-[#161616]/70 backdrop-blur-[10px] focus:outline-none"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="relative flex h-full flex-col justify-between gap-8 px-[160px] py-8 max-lg:overflow-y-auto max-lg:p-4">
              <div className="flex items-center justify-between">
                <Image
                  className="max-md:h-[30px] max-md:w-[128px]"
                  src="/logo.svg"
                  alt="Coinsmax"
                  width={272}
                  height={64}
                />
                <div className="flex items-center gap-3">
                  <AuthButtons />
                  <Close className="flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full border border-white/15 outline-0 max-md:h-12 max-md:w-12">
                    <CloseIcon />
                  </Close>
                </div>
              </div>
              <Divider />
              <AuthButtons mobile />
              <nav className="flex w-full max-lg:flex-col">
                <div className="flex w-1/2 flex-col border-r border-[rgba(255,255,255,0.10)] max-lg:w-full max-lg:border-r-0 max-lg:border-b">
                  <NavBtn href="/inside-coinsmax" label="Inside Coinsmax" />
                  <NavBtn href="/partnership" label="Partnership" />
                  <NavBtn href="/crypto-insights" label="Crypto Insights" />
                </div>
                <div className="flex w-1/2 flex-col max-lg:w-full">
                  <NavBtn href="/user-essentials" label="User Essentials" />
                  <NavBtn href="/qa" label="Q&A" />
                  <NavBtn href="/contact-us" label="Contact Us" />
                </div>
              </nav>
              <Divider />
              <div className="flex items-center justify-between max-lg:items-end">
                <LongSocialNetworks />
                <LangSwitcher />
              </div>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};

const NavBtn = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group flex w-full items-center justify-between gap-2.5 border-b border-b-[rgba(255,255,255,0.10)] p-6 transition duration-300 ease-in-out last:border-b-0 hover:bg-white/5 max-md:px-0 max-md:py-4"
  >
    <Title
      size="5xl"
      as="h5"
      className="group-hover:text-primary max-md:text-[24px]"
    >
      {label}
    </Title>
    <div className="group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition duration-300 ease-in-out">
      <ChevronRightIcon />
    </div>
  </Link>
);

const AuthButtons = ({ mobile }: { mobile?: boolean }) => {
  return (
    <div
      className={cn(
        'items-center gap-3',
        mobile ? 'hidden max-lg:flex' : 'flex max-lg:hidden',
      )}
    >
      <Button size={mobile ? 'sm' : 'md'} fullWidth={mobile}>
        Log In
      </Button>
      <Button
        variant="secondary"
        size={mobile ? 'sm' : 'md'}
        fullWidth={mobile}
      >
        Sign Up
      </Button>
    </div>
  );
};

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    className="max-md:h-3 max-md:w-3"
  >
    <path
      d="M1.79979 25.616L0.383789 24.2L11.5838 13L0.383789 1.8L1.79979 0.383999L12.9998 11.584L24.1998 0.383999L25.6158 1.8L14.4158 13L25.6158 24.2L24.1998 25.616L12.9998 14.416L1.79979 25.616Z"
      fill="white"
    />
  </svg>
);
