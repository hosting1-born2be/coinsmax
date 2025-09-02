'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { submitContactForm } from '../api/submitContactForm';
import { ContactFormSchema } from '../model/ContactForm.schema';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormSchema) => {
    setIsLoading(true);
    submitContactForm(data);
    setTimeout(() => {
      setIsSuccess(true);
      reset();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              {...register('companyName')}
              className={errors.companyName ? styles.errorInput : ''}
            />
            {errors.companyName && (
              <p className={styles.error}>{errors.companyName.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contactName">Contact Name:</label>
            <input
              type="text"
              {...register('contactName')}
              className={errors.contactName ? styles.errorInput : ''}
            />
            {errors.contactName && (
              <p className={styles.error}>{errors.contactName.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              {...register('email')}
              className={errors.email ? styles.errorInput : ''}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.formGroup + ' ' + styles.message}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              {...register('message')}
              className={errors.message ? styles.errorInput : ''}
            />
            {errors.message && (
              <p className={styles.error}>{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            {isLoading ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
      {isSuccess && (
        <div className={styles.success}>
          <h2>Thank you for your inquiry!</h2>
        </div>
      )}
    </>
  );
};
