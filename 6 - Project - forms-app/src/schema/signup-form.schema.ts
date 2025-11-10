import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be atleast 8 character long"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
