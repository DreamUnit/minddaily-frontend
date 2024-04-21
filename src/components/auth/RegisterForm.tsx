'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  RegisterSchema,
  RegisterSchemaType,
} from '@/src/schemas/RegisterSchema';
import Link from 'next/link';
import authService from '@/src/services/authService';
import { SocialAuthType } from '@/src/@types';

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

    startTransition(async () => {
      await authService.register(data);
    });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-primary-foreground">
        Sign up for MindDaily
      </h1>

      <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="email"
            id="email"
            className="input input-sm input-bordered w-full"
            placeholder="Email"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          {errors.password && <span>{errors.password.message}</span>}
          <input
            type="password"
            id="password"
            className="input input-sm input-bordered w-full"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
        <div>
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="text"
            id="name"
            className="input input-sm input-bordered w-full"
            placeholder="Name"
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <button className="btn btn-primary w-full" type="submit">
            Sign up
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
          Already have an account?{' '}
          <Link
            className="font-bold text-black hover:underline"
            href="/auth/login"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};
