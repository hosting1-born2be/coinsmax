import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().nonempty('This field is required'),
  company: z.string().nonempty('This field is required'),
  phone: z
    .string()
    .min(5, 'Please check your phone number and provide a correct one'),
  email: z.string().email('This field is required'),
  message: z.string(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
