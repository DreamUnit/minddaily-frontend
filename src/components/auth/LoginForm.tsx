'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '@/src/schemas/LoginSchema';
import Link from 'next/link';
import authService from '@/src/services/authService';
import { SocialAuthType } from '@/src/@types';

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

    startTransition(async () => {
      await authService.login(data);
    });
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <h1 className=" my-6 text-center text-2xl font-bold text-primary-foreground">
        Sign in to MindDaily
      </h1>

      <form
        id="loginForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <div>
          {errors.email && (
            <span className="text- text-danger-300 text-sm">
              {errors.email.message}
            </span>
          )}
          <input
            type="email"
            id="email"
            className="input input-sm input-bordered w-full"
            placeholder="Email"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          {errors.password && (
            <span className="text- text-danger-300 text-sm">
              {errors.password.message}
            </span>
          )}
          <input
            type="password"
            id="password"
            className="input input-sm  input-bordered w-full"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
        <div>
          <button className="btn btn-accent w-full" type="submit">
            Sign in
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center gap-2">
        <span className="text-neutral-200">or</span>
        <button
          className="btn btn-neutral w-full"
          onClick={() => authService.socialSignIn(SocialAuthType.Google)}
        >
          Continue with Google
        </button>
        <span className="text-neutral-200">
          Don’t have an account yet?{' '}
          <Link
            className="font-bold text-black hover:underline"
            href="/auth/register"
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};
