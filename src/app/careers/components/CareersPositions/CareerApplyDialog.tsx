'use client';

import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';

import {
  type CareerApplyPayload,
  submitCareerApplyForm,
} from '@/features/career-apply/api/submitCareerApplyForm';

import styles from './CareersPositions.module.scss';

type FormValues = {
  name: string;
  email: string;
  links: string;
  coinsmaxWhy: string;
  coinsmaxFit: string;
  currentLocation: string;
  sponsorship: 'yes' | 'no' | '';
  experienceAreas: string[];
  experienceTools: string[];
  experienceOther: string;
};

// const EXPERIENCE_AREAS = [
//   'Transaction monitoring',
//   'Customer due diligence (CDD/KYC)',
//   'Enhanced due diligence (EDD)',
//   'Investigations & case management',
//   'Sanctions / PEP screening',
//   'Regulatory reporting',
// ];

// const EXPERIENCE_TOOLS = [
//   'Excel / Google Sheets',
//   'SQL',
//   'BI tools (Tableau/Looker/Power BI)',
//   'Case management systems',
//   'Monitoring systems',
// ];

export function CareerApplyDialog({
  open,
  onOpenChangeAction,
  positionTitle,
}: {
  open: boolean;
  onOpenChangeAction: (value: boolean) => void;
  positionTitle: string;
}) {
  const { control, register, handleSubmit, reset, setError, formState } =
    useForm<FormValues>({
      defaultValues: {
        name: '',
        email: '',
        links: '',
        coinsmaxWhy: '',
        coinsmaxFit: '',
        currentLocation: '',
        sponsorship: '',
        experienceAreas: [],
        experienceTools: [],
        experienceOther: '',
      },
    });

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  return (
    <Root open={open} onOpenChange={onOpenChangeAction}>
      <Portal>
        <Overlay className={styles.apply_dialog__overlay} />
        <Content
          className={styles.apply_dialog__content}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <Close asChild>
            <button
              type="button"
              aria-label="Close"
              className={styles.apply_dialog__close}
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

          <header className={styles.apply_dialog__header}>
            <Title className={styles.apply_dialog__title}>
              {positionTitle}
            </Title>
          </header>

          <form
            className={styles.apply_dialog__form}
            onSubmit={handleSubmit(async values => {
              const payload: CareerApplyPayload = {
                positionTitle,
                name: values.name,
                email: values.email,
                links: values.links,
                coinsmaxWhy: values.coinsmaxWhy,
                coinsmaxFit: values.coinsmaxFit,
                currentLocation: values.currentLocation,
                sponsorship: values.sponsorship,
                experienceAreas: values.experienceAreas,
                experienceTools: values.experienceTools,
                experienceOther: values.experienceOther,
              };

              const res = await submitCareerApplyForm(payload);
              if (!res.success) {
                setError('root', {
                  type: 'server',
                  message: 'Failed to send application. Please try again.',
                });
                return;
              }

              onOpenChangeAction(false);
            })}
          >
            <section className={styles.apply_dialog__grid2}>
              <label className={styles.apply_dialog__field}>
                <p className={styles.apply_dialog__label}>
                  Name <span>(This field is required)</span>
                </p>
                <input
                  className={styles.apply_dialog__input}
                  placeholder="Your name"
                  {...register('name', { required: true })}
                />
              </label>

              <label className={styles.apply_dialog__field}>
                <p className={styles.apply_dialog__label}>
                  Email <span>(This field is required)</span>
                </p>
                <input
                  type="email"
                  className={styles.apply_dialog__input}
                  placeholder="name@example.com"
                  {...register('email', { required: true })}
                />
              </label>
            </section>

            <section className={styles.apply_dialog__section}>
              <h3 className={styles.apply_dialog__section_title}>Links</h3>
              <label className={styles.apply_dialog__field}>
                <span className={styles.apply_dialog__label}>
                  LinkedIn / Portfolio / Other
                </span>
                <input
                  className={styles.apply_dialog__input}
                  placeholder="https://..."
                  {...register('links')}
                />
              </label>
            </section>

            <section className={styles.apply_dialog__section}>
              <h3 className={styles.apply_dialog__section_title}>Coinsmax</h3>

              <div className={styles.apply_dialog__section_grid}>
                <label className={styles.apply_dialog__field}>
                  <span className={styles.apply_dialog__label}>
                    Why are you interested in Coinsmax?
                  </span>
                  <textarea
                    className={styles.apply_dialog__textarea}
                    rows={3}
                    placeholder="Enter your answer"
                    {...register('coinsmaxWhy')}
                  />
                </label>

                <label className={styles.apply_dialog__field}>
                  <span className={styles.apply_dialog__label}>
                    What is your favorite aspect of our platform?
                  </span>
                  <textarea
                    className={styles.apply_dialog__textarea}
                    rows={3}
                    placeholder="Enter your answer"
                    {...register('coinsmaxFit')}
                  />
                </label>
              </div>
              <div className={styles.apply_dialog__field}>
                <span className={styles.apply_dialog__label}>
                  Have you used a Coinsmax product in the last six months?
                </span>
                <Controller
                  control={control}
                  name="sponsorship"
                  render={({ field }) => (
                    <div className={styles.apply_dialog__radio_row}>
                      <label className={styles.apply_dialog__radio}>
                        <input
                          type="radio"
                          name={field.name}
                          value="yes"
                          checked={field.value === 'yes'}
                          onChange={() => field.onChange('yes')}
                        />
                        <span>Yes</span>
                      </label>
                      <label className={styles.apply_dialog__radio}>
                        <input
                          type="radio"
                          name={field.name}
                          value="no"
                          checked={field.value === 'no'}
                          onChange={() => field.onChange('no')}
                        />
                        <span>No</span>
                      </label>
                    </div>
                  )}
                />
              </div>
            </section>

            <section className={styles.apply_dialog__section}>
              <h3 className={styles.apply_dialog__section_title}>
                Work Location
              </h3>

              <label className={styles.apply_dialog__field}>
                <span className={styles.apply_dialog__label}>
                  Where are you currently located?
                </span>
                <input
                  className={styles.apply_dialog__input}
                  placeholder="City, Country"
                  {...register('currentLocation')}
                />
              </label>
            </section>

            <section className={styles.apply_dialog__section}>
              {/*<h3 className={styles.apply_dialog__section_title}>Experience</h3>*/}

              {/*<div className={styles.apply_dialog__field}>*/}
              {/*  <span className={styles.apply_dialog__label}>*/}
              {/*    Select the areas you have experience in*/}
              {/*  </span>*/}
              {/*  <Controller*/}
              {/*    control={control}*/}
              {/*    name="experienceAreas"*/}
              {/*    render={({ field }) => (*/}
              {/*      <div className={styles.apply_dialog__check_grid}>*/}
              {/*        {EXPERIENCE_AREAS.map(option => (*/}
              {/*          <label*/}
              {/*            key={option}*/}
              {/*            className={styles.apply_dialog__check}*/}
              {/*          >*/}
              {/*            <input*/}
              {/*              type="checkbox"*/}
              {/*              checked={field.value.includes(option)}*/}
              {/*              onChange={e => {*/}
              {/*                const next = e.target.checked*/}
              {/*                  ? [...field.value, option]*/}
              {/*                  : field.value.filter(v => v !== option);*/}
              {/*                field.onChange(next);*/}
              {/*              }}*/}
              {/*            />*/}
              {/*            <span>{option}</span>*/}
              {/*          </label>*/}
              {/*        ))}*/}
              {/*      </div>*/}
              {/*    )}*/}
              {/*  />*/}
              {/*</div>*/}

              {/*<div className={styles.apply_dialog__field}>*/}
              {/*  <span className={styles.apply_dialog__label}>*/}
              {/*    Tools you’re comfortable with*/}
              {/*  </span>*/}
              {/*  <Controller*/}
              {/*    control={control}*/}
              {/*    name="experienceTools"*/}
              {/*    render={({ field }) => (*/}
              {/*      <div className={styles.apply_dialog__check_grid}>*/}
              {/*        {EXPERIENCE_TOOLS.map(option => (*/}
              {/*          <label*/}
              {/*            key={option}*/}
              {/*            className={styles.apply_dialog__check}*/}
              {/*          >*/}
              {/*            <input*/}
              {/*              type="checkbox"*/}
              {/*              checked={field.value.includes(option)}*/}
              {/*              onChange={e => {*/}
              {/*                const next = e.target.checked*/}
              {/*                  ? [...field.value, option]*/}
              {/*                  : field.value.filter(v => v !== option);*/}
              {/*                field.onChange(next);*/}
              {/*              }}*/}
              {/*            />*/}
              {/*            <span>{option}</span>*/}
              {/*          </label>*/}
              {/*        ))}*/}
              {/*      </div>*/}
              {/*    )}*/}
              {/*  />*/}
              {/*</div>*/}

              <label className={styles.apply_dialog__field}>
                <span className={styles.apply_dialog__label}>
                  Anything else we should know?
                </span>
                <textarea
                  className={styles.apply_dialog__textarea}
                  rows={3}
                  {...register('experienceOther')}
                />
              </label>
            </section>

            <button
              type="submit"
              className="btn btn-white"
              disabled={formState.isSubmitting}
            >
              Send Application
            </button>

            {formState.errors.root?.message ? (
              <p className={styles.apply_dialog__error}>
                {formState.errors.root.message}
              </p>
            ) : null}
          </form>
        </Content>
      </Portal>
    </Root>
  );
}
