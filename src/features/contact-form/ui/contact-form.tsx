'use client';

import { Controller, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCountryCode } from '@/shared/lib/hooks/use-country-code';
import { notifyError } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { submitContactForm } from '../api/submitContactForm';
import type { ContactFormSchema } from '../model/form.schema';
import { contactFormSchema } from '../model/form.schema';
import { useThankYouDialog } from './thank-you-dialog';

export const ContactForm = () => {
  const countryCode = useCountryCode();
  const t = useTranslations('contactForm.form');
  const { setIsOpen } = useThankYouDialog();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      company: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ContactFormSchema) => {
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
        label={t('company.label', { fallback: 'Company' })}
        placeholder={t('company.placeholder', {
          fallback: 'Enter your company name',
        })}
        hint={errors.company?.message}
        {...register('company')}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <PhoneField
            label={t('phone.label', { fallback: 'Phone' })}
            placeholder={t('phone.placeholder', {
              fallback: 'Enter your phone number',
            })}
            hint={errors.phone?.message}
            country={countryCode}
            {...field}
          />
        )}
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
