'use client';

import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';

import { submitWaitlistForm } from '@/features/waitlist/api/submitWaitlistForm';
import {
  type WaitlistFormSchema,
  waitlistFormSchema,
} from '@/features/waitlist/model/waitlist.schema';

import { notifyError, notifySuccess } from '@/shared/lib/utils/notify';

import styles from './HomeFirst.module.scss';

export default function HomeFirst() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormSchema>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      const res = await submitWaitlistForm(data);
      if (!res?.success) throw new Error('Submit waitlist failed');

      notifySuccess('Thanks! You’ve joined the waitlist.');
      reset();
    } catch (err) {
      console.error(err);
      notifyError('Failed to send. Please try again later.');
    }
  });

  return (
    <section className={styles.home_first} id="home-be-first-section">
      <div className="container">
        <div className={styles.home_first__inner}>
          <p className={`${styles.home_first__title} h3`}>
            Be the First to Know
          </p>
          <p className={`${styles.home_first__description} text-style`}>
            We know crypto feels frustrating — that’s why we’ve prepared
            resources to make things easier.
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
              className="btn btn-white"
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
    </section>
  );
}
