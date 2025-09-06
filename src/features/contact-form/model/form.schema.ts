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

export const shortContactFormSchema = z.object({
  fullName: z.string().nonempty('This field is required'),
  email: z.string().email('This field is required'),
  message: z.string(),
});

export const detailedContactFormSchema = z.object({
  firstName: z.string().nonempty('This field is required'),
  lastName: z.string().nonempty('This field is required'),
  phone: z
    .string()
    .min(5, 'Please check your phone number and provide a correct one'),
  email: z.string().email('This field is required'),
  projectName: z.string().min(1, 'This field is required'),
  projectLink: z.string().url('This field is required'),
  projectOverview: z.string().min(1, 'This field is required'),
  projectType: z.string().min(1, 'This field is required'),
  isAgree: z.boolean().refine(Boolean, 'You must agree to the terms'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
export type ShortContactFormSchema = z.infer<typeof shortContactFormSchema>;
export type DetailedContactFormSchema = z.infer<
  typeof detailedContactFormSchema
>;
