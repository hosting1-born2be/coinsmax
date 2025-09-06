'use client';

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';

import { notifyError } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/kit/button';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { submitContactForm } from '../api/submitContactForm';
import { shortContactFormSchema } from '../model/form.schema';
import { useThankYouDialog } from './thank-you-dialog';

export const ShortContactForm = () => {
  const { setIsOpen } = useThankYouDialog();

  const t = useTranslations('contactForm.form');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(shortContactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      await submitContactForm(data);
      setIsOpen(true);
      reset();
    } catch (err) {
      console.error(err);
      notifyError(
        t('failed', {
          fallback: 'Failed to send message. Please try again later.',
        }),
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <TextField
        label={t('fullName.label', { fallback: 'Full Name' })}
        placeholder={t('fullName.placeholder', {
          fallback: 'Enter your full name',
        })}
        hint={errors.fullName?.message}
        {...register('fullName')}
      />
      <TextField
        label={t('email.label', { fallback: 'Email' })}
        placeholder={t('email.placeholder', {
          fallback: 'Enter your email',
        })}
        hint={errors.email?.message}
        {...register('email')}
      />
      <TextArea
        label={t('message.label', { fallback: 'Message' })}
        placeholder={t('message.placeholder', {
          fallback: 'Enter your message',
        })}
        hint={errors.message?.message}
        {...register('message')}
      />
      <Button type="submit" variant="secondary" fullWidth>
        {isSubmitting
          ? t('sendRequest.loading', { fallback: 'Sending...' })
          : t('sendRequest.label', { fallback: 'Send Request' })}
      </Button>
    </form>
  );
};
