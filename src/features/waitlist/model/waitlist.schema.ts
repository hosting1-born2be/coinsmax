import { z } from 'zod';

export const waitlistFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Please provide a valid email address.'),
});

export type WaitlistFormSchema = z.infer<typeof waitlistFormSchema>;
