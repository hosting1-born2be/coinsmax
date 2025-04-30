import { z } from "zod";

export const ContactFormSchema = z.object({
  companyName: z.string().nonempty("Company name is required"),
  contactName: z.string().nonempty("Contact name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string(),
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>;
