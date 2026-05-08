import { z } from 'zod';

export const waitlistFormSchema = z.object({
  email: z.string().email('Please enter a valid email'),
});

export type WaitlistFormSchema = z.infer<typeof waitlistFormSchema>;

