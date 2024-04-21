'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '@/src/schemas/LoginSchema';
import Link from 'next/link';

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      // TODO: graphql call
    });
  };

  return (
    <div>
      <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <span>or</span>
        <button>Continue with Google</button>
        <span>
          Don’t have an account yet? <Link href="/auth/register">Sign up </Link>
        </span>
      </div>
    </div>
  );
};
