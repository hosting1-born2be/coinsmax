'use client';

import Image from 'next/image';
import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';

import styles from './SuccessDialog.module.scss';

export function SuccessDialog({
  open,
  onOpenChangeAction,
  title,
  text,
}: {
  open: boolean;
  onOpenChangeAction: (value: boolean) => void;
  title: string;
  text: string;
}) {
  return (
    <Root open={open} onOpenChange={onOpenChangeAction}>
      <Portal>
        <Overlay className={styles.success_dialog__overlay} />
        <Content
          className={styles.success_dialog__content}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <Close asChild>
            <button
              type="button"
              aria-label="Close"
              className={styles.success_dialog__close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </Close>

          <div className={styles.success_dialog__inner}>
            <div className={styles.success_dialog__image}>
              <Image
                src="/images/careers/icon-park-solid_success.png"
                alt="Success"
                width={48}
                height={48}
                loading="lazy"
              />
            </div>

            <Title className={`${styles.success_dialog__title} h4`}>
              {title}
            </Title>
            <p className={styles.success_dialog__text}>{text}</p>
            <button
              type="button"
              className={`btn btn-white ${styles.success_dialog__btn}`}
              onClick={() => onOpenChangeAction(false)}
            >
              Continue
            </button>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
