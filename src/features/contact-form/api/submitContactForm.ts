import type {
  ContactFormSchema,
  ShortContactFormSchema,
} from '../model/form.schema';

export const submitContactForm = async (
  data: ContactFormSchema | ShortContactFormSchema,
) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
