'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { ThankYouDialog } from './thank-you-dialog';

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const countryCode = useCountryCode();

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
      notifyError('Failed to send message. Please try again later.');
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <TextField
        label="Full Name"
        placeholder="Enter your full name"
        hint={errors.fullName?.message}
        {...register('fullName')}
      />
      <TextField
        label="Company"
        placeholder="Enter your company name"
        hint={errors.company?.message}
        {...register('company')}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <PhoneField
            label="Phone"
            hint={errors.phone?.message}
            country={countryCode}
            {...field}
          />
        )}
      />
      <TextField
        label="Email"
        placeholder="Enter your email"
        hint={errors.email?.message}
        {...register('email')}
      />
      <TextArea
        label="Message"
        placeholder="Enter your message"
        hint={errors.message?.message}
        {...register('message')}
      />
      <Button type="submit" variant="secondary" fullWidth>
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </Button>
      <ThankYouDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
};
