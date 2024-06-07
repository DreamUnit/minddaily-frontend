import * as z from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z
    .string()
    .min(6, {
      message: 'Minimum 6 characters required',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[!@#$%^&*()_,.?":{}|<>]/, {
      message: 'Password must contain at least one special symbol',
    }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
