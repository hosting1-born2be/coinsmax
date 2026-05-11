'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Close,
  Content,
  Overlay,
  Portal,
  Root,
  Title,
} from '@radix-ui/react-dialog';

import { submitCareerApplyForm } from '@/features/career-apply/api/submitCareerApplyForm';

import { notifyError } from '@/shared/lib/utils/notify';

import styles from './CareersPositions.module.scss';

type FormValues = {
  name: string;
  email: string;
  links: string;
  experienceOther: string;
};

const MAX_CV_SIZE_BYTES = 10 * 1024 * 1024;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINKEDIN_PATTERN = /^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+/i;

export function CareerApplyDialog({
  open,
  onOpenChangeAction,
  positionTitle,
}: {
  open: boolean;
  onOpenChangeAction: (value: boolean) => void;
  positionTitle?: string;
}) {
  const { register, handleSubmit, reset, setError, formState } =
    useForm<FormValues>({
      defaultValues: {
        name: '',
        email: '',
        links: '',
        experienceOther: '',
      },
    });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cvHint = useMemo(
    () => (cvFile ? `Selected: ${cvFile.name}` : 'PDF, DOC, DOCX up to 10MB'),
    [cvFile],
  );

  useEffect(() => {
    if (!open) {
      reset();
      setCvFile(null);
      setCvError(null);
      setIsDragging(false);
      setIsSubmitted(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }, [open, reset]);

  const handleCvSelect = (file: File | null) => {
    if (!file) {
      setCvFile(null);
      setCvError('Please upload your CV.');
      return;
    }
    if (file.size > MAX_CV_SIZE_BYTES) {
      setCvFile(null);
      setCvError('The uploaded file exceeds the maximum allowed size.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setCvFile(file);
    setCvError(null);
  };

  return (
    <Root open={open} onOpenChange={onOpenChangeAction}>
      <Portal>
        <Overlay className={styles.apply_dialog__overlay} />
        <Content
          className={[
            styles.apply_dialog__content,
            isSubmitted ? styles.apply_dialog__content_success : '',
          ].join(' ')}
          onCloseAutoFocus={e => e.preventDefault()}
        >
          {!isSubmitted && (
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
          )}

          {isSubmitted ? (
            <div className={styles.apply_dialog__success}>
              <div className={styles.apply_dialog__success_image}>
                <Image
                  src="/images/careers/icon-park-solid_success.png"
                  alt="Image"
                  width={48}
                  height={48}
                  loading={'lazy'}
                />
              </div>

              <Title className={`${styles.apply_dialog__success_title} h4`}>
                Application submitted successfully!
              </Title>
              <p className={styles.apply_dialog__success_text}>
                Thank you for your application. Our team will review your
                information and contact you soon.
              </p>
              <button
                type="button"
                className={`btn btn-white ${styles.apply_dialog__success_btn}`}
                onClick={() => onOpenChangeAction(false)}
              >
                Continue
              </button>
            </div>
          ) : (
            <>
              {positionTitle ? (
                <header className={styles.apply_dialog__header}>
                  <Title className={styles.apply_dialog__header_title}>
                    {positionTitle}
                  </Title>

                  <p className={styles.apply_dialog__header_subtitle}>
                    Submit Your Application
                  </p>
                </header>
              ) : (
                <Title className={styles.apply_dialog__visually_hidden}>
                  Get in Touch
                </Title>
              )}

              <form
                className={styles.apply_dialog__form}
                noValidate
                onSubmit={handleSubmit(
                  async values => {
                    if (!cvFile) {
                      setCvError('Please upload your CV.');
                      return;
                    }

                    const formData = new FormData();
                    formData.set(
                      'positionTitle',
                      positionTitle || 'General Inquiry',
                    );
                    formData.set('name', values.name);
                    formData.set('email', values.email);
                    formData.set('links', values.links || '');
                    formData.set(
                      'experienceOther',
                      values.experienceOther || '',
                    );
                    formData.set('cvFile', cvFile);

                    const res = await submitCareerApplyForm(formData);
                    if (!res.success) {
                      notifyError('Upload failed. Please try again.');
                      setError('root', {
                        type: 'server',
                        message: 'Upload failed. Please try again.',
                      });
                      return;
                    }

                    setIsSubmitted(true);
                  },
                  () => {
                    if (!cvFile) {
                      setCvError('Please upload your CV.');
                    }
                  },
                )}
              >
                <div className={styles.apply_dialog__top}>
                  <label className={styles.apply_dialog__field}>
                    <p className={styles.apply_dialog__label}>
                      Full name{' '}
                      <span>
                        {formState.errors.name?.message
                          ? `(${formState.errors.name.message})`
                          : '(This field is required)'}
                      </span>
                    </p>
                    <input
                      className={[
                        styles.apply_dialog__input,
                        formState.errors.name
                          ? styles.apply_dialog__input_error
                          : '',
                      ].join(' ')}
                      placeholder="Enter your full name"
                      {...register('name', {
                        required: 'Please enter your full name.',
                      })}
                    />
                  </label>

                  <label className={styles.apply_dialog__field}>
                    <p className={styles.apply_dialog__label}>
                      Email{' '}
                      <span>
                        {formState.errors.email?.message
                          ? `(${formState.errors.email.message})`
                          : '(This field is required)'}
                      </span>
                    </p>
                    <input
                      type="email"
                      className={[
                        styles.apply_dialog__input,
                        formState.errors.email
                          ? styles.apply_dialog__input_error
                          : '',
                      ].join(' ')}
                      placeholder="Enter your email address"
                      {...register('email', {
                        required: 'Please provide a valid email address.',
                        pattern: {
                          value: EMAIL_PATTERN,
                          message:
                            'Please provide a valid email address so we can contact you.',
                        },
                      })}
                    />
                  </label>
                </div>

                <div className={styles.apply_dialog__section}>
                  <h3 className={styles.apply_dialog__section_title}>Links</h3>
                  <label className={styles.apply_dialog__field}>
                    <p className={styles.apply_dialog__label}>
                      LinkedIn URL
                      {formState.errors.links?.message ? (
                        <span> ({formState.errors.links.message})</span>
                      ) : null}
                    </p>
                    <input
                      className={[
                        styles.apply_dialog__input,
                        formState.errors.links
                          ? styles.apply_dialog__input_error
                          : '',
                      ].join(' ')}
                      placeholder="Enter your linkedin"
                      {...register('links', {
                        pattern: {
                          value: LINKEDIN_PATTERN,
                          message:
                            'Please provide a valid Linkedin profile URL.',
                        },
                      })}
                    />
                  </label>
                </div>

                <div className={styles.apply_dialog__section}>
                  <label className={styles.apply_dialog__field}>
                    <p className={styles.apply_dialog__label}>
                      CV Upload
                      {cvError ? <span> ({cvError})</span> : null}
                    </p>

                    <input
                      ref={fileInputRef}
                      type="file"
                      className={styles.apply_dialog__file_input}
                      accept=".pdf,.doc,.docx"
                      onChange={e => {
                        const file = e.target.files?.[0] ?? null;
                        handleCvSelect(file);
                      }}
                    />

                    <div
                      className={[
                        styles.apply_dialog__dropzone,
                        isDragging
                          ? styles.apply_dialog__dropzone__dragging
                          : '',
                        cvError ? styles.apply_dialog__dropzone_error : '',
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
                        handleCvSelect(file);
                        if (fileInputRef.current && file) {
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
            </>
          )}
        </Content>
      </Portal>
    </Root>
  );
}
