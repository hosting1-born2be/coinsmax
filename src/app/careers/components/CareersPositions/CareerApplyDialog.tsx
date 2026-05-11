'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';

import { submitCareerApplyForm } from '@/features/career-apply/api/submitCareerApplyForm';

import { notifyError, notifySuccess } from '@/shared/lib/utils/notify';

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

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const cvHint = useMemo(
    () => (cvFile ? `Selected: ${cvFile.name}` : 'PDF, DOC, DOCX up to 10MB'),
    [cvFile],
  );

  useEffect(() => {
    if (!open) {
      reset();
      setCvFile(null);
      setIsDragging(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
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
            <Title className={styles.apply_dialog__header_title}>
              {positionTitle}
            </Title>
          </header>

          <form
            className={styles.apply_dialog__form}
            onSubmit={handleSubmit(async values => {
              const formData = new FormData();
              formData.set('positionTitle', positionTitle);
              formData.set('name', values.name);
              formData.set('email', values.email);
              formData.set('links', values.links || '');
              formData.set('coinsmaxWhy', values.coinsmaxWhy || '');
              formData.set('coinsmaxFit', values.coinsmaxFit || '');
              formData.set('currentLocation', values.currentLocation || '');
              formData.set('sponsorship', values.sponsorship || '');
              formData.set(
                'experienceAreas',
                JSON.stringify(values.experienceAreas || []),
              );
              formData.set(
                'experienceTools',
                JSON.stringify(values.experienceTools || []),
              );
              formData.set('experienceOther', values.experienceOther || '');
              if (cvFile) formData.set('cvFile', cvFile);

              const res = await submitCareerApplyForm(formData);
              if (!res.success) {
                notifyError('Failed to send application. Please try again.');
                setError('root', {
                  type: 'server',
                  message: 'Failed to send application. Please try again.',
                });
                return;
              }

              notifySuccess('Application sent successfully.');
              onOpenChangeAction(false);
            })}
          >
            <div className={styles.apply_dialog__top}>
              <label className={styles.apply_dialog__field}>
                <p className={styles.apply_dialog__label}>
                  Full name <span>(This field is required)</span>
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
            </div>

            <div className={styles.apply_dialog__section}>
              <h3 className={styles.apply_dialog__section_title}>Links</h3>
              <label className={styles.apply_dialog__field}>
                <span className={styles.apply_dialog__label}>Linkedin</span>
                <input
                  className={styles.apply_dialog__input}
                  placeholder="https://..."
                  {...register('links')}
                />
              </label>
            </div>

            <div className={styles.apply_dialog__section}>
              <label className={styles.apply_dialog__field}>
                <span className={styles.apply_dialog__label}>
                  Upload File for CV
                </span>

                <input
                  ref={fileInputRef}
                  type="file"
                  className={styles.apply_dialog__file_input}
                  accept=".pdf,.doc,.docx"
                  onChange={e => {
                    const file = e.target.files?.[0] ?? null;
                    setCvFile(file);
                  }}
                />

                <div
                  className={[
                    styles.apply_dialog__dropzone,
                    isDragging ? styles.apply_dialog__dropzone__dragging : '',
                  ].join(' ')}
                  onDragEnter={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDragging(true);
                  }}
                  onDragOver={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDragging(true);
                  }}
                  onDragLeave={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDragging(false);
                  }}
                  onDrop={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDragging(false);
                    const file = e.dataTransfer.files?.[0] ?? null;
                    setCvFile(file);
                    if (fileInputRef.current) {
                      fileInputRef.current.files = e.dataTransfer.files;
                    }
                  }}
                >
                  <button
                    type="button"
                    className={styles.apply_dialog__upload_btn}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Upload File
                  </button>
                  <span className={styles.apply_dialog__dropzone_text}>
                    or drag and drop here
                  </span>
                </div>
                <p>{cvHint}</p>
              </label>
            </div>

            <section className={styles.apply_dialog__section}>
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
              className={`btn btn-white ${styles.apply_dialog__btn_send}`}
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
