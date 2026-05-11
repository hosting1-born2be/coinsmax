'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';

import { submitWaitlistForm } from '@/features/waitlist/api/submitWaitlistForm';
import {
  type WaitlistFormSchema,
  waitlistFormSchema,
} from '@/features/waitlist/model/waitlist.schema';

import { notifyError } from '@/shared/lib/utils/notify';
import { SuccessDialog } from '@/shared/ui/components/success-dialog/SuccessDialog';

import styles from './HomeFirst.module.scss';

export default function HomeFirst() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormSchema>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    const res = await submitWaitlistForm(data);

    if (res.success) {
      reset();
      setIsSuccessOpen(true);
      return;
    }

    if (res.error === 'duplicate') {
      setError('email', {
        type: 'duplicate',
        message: 'This email address is already subscribed.',
      });
      return;
    }

    notifyError('We could not process your request. Please try again later.');
  });

  return (
    <section className={styles.home_first} id="home-be-first-section">
      <div className="container">
        <div className={styles.home_first__inner}>
          <p className={`${styles.home_first__title} h3`}>
            Be the First to Know
          </p>
          <p className={`${styles.home_first__description} text-style`}>
            Join our waitlist for updates when we launch.
          </p>
          <form className={styles.home_first__bottom} onSubmit={onSubmit}>
            <div className={styles.home_first__field}>
              <input
                className={styles.home_first__input}
                placeholder="Enter your email address"
                aria-invalid={Boolean(errors.email)}
                {...register('email')}
              />
              {errors.email?.message && (
                <p className={styles.home_first__hint}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-white test"
            >
              {isSubmitting ? 'Joining…' : 'Join Waitlist'}
            </button>
          </form>
          <div className={styles.home_first__image}>
            <Image
              src="/images/careers/see_role.png"
              alt="Image"
              width={1120}
              height={355}
              loading={'lazy'}
            />
          </div>
        </div>
      </div>

      <SuccessDialog
        open={isSuccessOpen}
        onOpenChangeAction={setIsSuccessOpen}
        title="Subscription successful!"
        text="You are now subscribed to Coinsmax updates and newsletter."
      />
    </section>
  );
}
