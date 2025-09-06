'use client';

import { Controller, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCountryCode } from '@/shared/lib/hooks/use-country-code';
import { notifyError } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Dropdown } from '@/shared/ui/kit/dropdown';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { submitDetailedForm } from '../api/submit-detailed-form';
import { detailedContactFormSchema } from '../model/form.schema';
import { useThankYouDialog } from './thank-you-dialog';

export const DetailedContactForm = () => {
  const countryCode = useCountryCode();
  const { setIsOpen } = useThankYouDialog();

  const t = useTranslations('detailedContactForm');

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    register,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      projectName: '',
      projectLink: '',
      projectOverview: '',
      projectType: '',
      isAgree: false,
    },
    resolver: zodResolver(detailedContactFormSchema),
    mode: 'onSubmit',
  });

  const onSubmit = handleSubmit(async data => {
    const { success } = await submitDetailedForm(data);

    if (success) {
      reset();
      setIsOpen(true);
    } else {
      notifyError('Failed to send request. Please try again later.');
    }
  });

  return (
    <form className="flex gap-[60px] max-lg:flex-col" onSubmit={onSubmit}>
      <section className="flex w-1/2 flex-col gap-8 max-lg:w-full">
        <Title as="h3">{t('title', { fallback: 'About You' })}</Title>
        <Divider />
        <div className="flex flex-col gap-4">
          <TextField
            label={t('firstName.label', { fallback: 'First Name' })}
            placeholder={t('firstName.placeholder', {
              fallback: 'Enter your first name',
            })}
            hint={errors.firstName?.message}
            {...register('firstName')}
          />
          <TextField
            label={t('lastName.label', { fallback: 'Last Name' })}
            placeholder={t('lastName.placeholder', {
              fallback: 'Enter your last name',
            })}
            hint={errors.lastName?.message}
            {...register('lastName')}
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
        </div>
      </section>
      <section className="flex w-1/2 flex-col gap-8 max-lg:w-full">
        <Title as="h3">
          {t('aboutYourProject', { fallback: 'About Your Project' })}
        </Title>
        <Divider />
        <div className="flex flex-col gap-4">
          <TextField
            label={t('projectName.label', { fallback: 'Project Name' })}
            placeholder={t('projectName.placeholder', {
              fallback: 'Enter your project name',
            })}
            hint={errors.projectName?.message}
            {...register('projectName')}
          />
          <TextField
            label={t('projectLink.label', { fallback: 'Project Link' })}
            placeholder={t('projectLink.placeholder', {
              fallback: 'Enter your project link',
            })}
            hint={errors.projectLink?.message}
            {...register('projectLink')}
          />
          <TextField
            label={t('projectOverview.label', { fallback: 'Project Overview' })}
            placeholder={t('projectOverview.placeholder', {
              fallback: 'Enter your project overview',
            })}
            hint={errors.projectOverview?.message}
            {...register('projectOverview')}
          />
          <Controller
            control={control}
            name="projectType"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <Text size="xl" color="white">
                  {t('projectType.label', { fallback: 'Project Type' })}
                </Text>
                <Dropdown
                  options={[
                    {
                      value: 'Trade solution',
                      label: t('projectType.options.0', {
                        fallback: 'Trade solution',
                      }),
                    },
                    {
                      value: 'Content / Reviews Network',
                      label: t('projectType.options.1', {
                        fallback: 'Content / Reviews Network',
                      }),
                    },
                    {
                      value: 'Cross Audience Monetization',
                      label: t('projectType.options.2', {
                        fallback: 'Cross Audience Monetization',
                      }),
                    },
                    {
                      value: 'Social influencer',
                      label: t('projectType.options.3', {
                        fallback: 'Social influencer',
                      }),
                    },
                    {
                      value: 'Media arbitration',
                      label: t('projectType.options.4', {
                        fallback: 'Media arbitration',
                      }),
                    },
                    {
                      value: 'Transaction / vouchers',
                      label: t('projectType.options.5', {
                        fallback: 'Transaction / vouchers',
                      }),
                    },
                    {
                      value: 'Third Choice loyalty / rewards',
                      label: t('projectType.options.6', {
                        fallback: 'Third Choice loyalty / rewards',
                      }),
                    },
                    {
                      value: 'Other',
                      label: t('projectType.options.7', { fallback: 'Other' }),
                    },
                  ]}
                  {...field}
                />
              </div>
            )}
          />
        </div>
        <Text color="faded">
          {t('append', {
            fallback:
              'By joining the Coinsmax Partnership Program, you acknowledge that',
          })}
        </Text>
        <div className="flex flex-col gap-3">
          <Text color="faded">
            {t('explanations.title', { fallback: 'Explanations:' })}
          </Text>
          <ul className="flex flex-col">
            <li>
              <Text>
                <span className="font-bold">
                  {t('explanations.0.0', { fallback: 'Chargeback' })}
                </span>{' '}
                –{' '}
                {t('explanations.0.1', {
                  fallback:
                    'when a customer’s bank reverses a completed payment.',
                })}
              </Text>
            </li>
            <li>
              <Text>
                <span className="font-bold">
                  {t('explanations.1.0', { fallback: 'Fraud alert' })}
                </span>{' '}
                –{' '}
                {t('explanations.1.1', {
                  fallback:
                    'a flagged transaction identified as potentially fraudulent by banks or payment providers.',
                })}
              </Text>
            </li>
            <li>
              <Text>
                <span className="font-bold">
                  {t('explanations.2.0', { fallback: 'Cancellation' })}
                </span>{' '}
                –{' '}
                {t('explanations.2.1', {
                  fallback:
                    'a when a customer, their bank, or an intermediary requests funds to be returned after initiating a payment.',
                })}
              </Text>
            </li>
          </ul>
        </div>
        <Button size="md" variant="secondary" fullWidth>
          {isSubmitting
            ? t('button.loading', { fallback: 'Sending...' })
            : t('button.label', { fallback: 'Apply' })}
        </Button>
      </section>
    </form>
  );
};
