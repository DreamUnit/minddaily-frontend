'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  RegisterSchema,
  RegisterSchemaType,
} from '@/src/schemas/RegisterSchema';
import Link from 'next/link';

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = (data: RegisterSchemaType) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      // TODO: graphql call
    });
  };

  return (
    <div>
      <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.email && <span>{errors.email.message}</span>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          {errors.password && <span>{errors.password.message}</span>}
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            {...register('password', { required: true })}
          />
        </div>
        <div>
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>

      <div>
        <span>or</span>
        <button>Continue with Google</button>
        <span>
          Already have an account? <Link href="/auth/login">Log in </Link>
        </span>
      </div>
    </div>
  );
};
