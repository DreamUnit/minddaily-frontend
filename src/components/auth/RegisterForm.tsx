'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  RegisterSchema,
  RegisterSchemaType,
} from '@/src/schemas/RegisterSchema';
import Link from 'next/link';
import authService from '@/src/services/authService';
import { SocialAuthType } from '@/src/@types';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { AppError } from '@/src/models/ExpectedError';
import toast from 'react-hot-toast';

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const onSubmit = async (data: RegisterSchemaType) => {
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      await toast
        .promise(authService.register(data), {
          loading: 'Loading',
          success: 'Successfully signed up',
          error: (err: AppError) => err.message,
        })
        .catch(() => {});
    } finally {
      setIsLoading(false);
    }
  };

  const onSocialSignIn = async (type: SocialAuthType) => {
    setIsLoading(true);

    try {
      await toast
        .promise(authService.socialSignIn(type), {
          loading: 'Loading',
          success: 'Successfully logged in',
          error: (err: AppError) => err.message,
        })
        .catch(() => {});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <h1 className=" my-6 text-center text-2xl font-bold text-primary-foreground">
        Sign up for MindDaily
      </h1>

      <form
        id="registerForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <div>
          {errors.email && (
            <span className="text- text-sm text-danger-300">
              {errors.email.message}
            </span>
          )}
          <input
            type="email"
            id="email"
            className="input input-bordered"
            placeholder="Email"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          {errors.name && (
            <span className="text-sm text-danger-300">
              {errors.name.message}
            </span>
          )}
          <input
            type="text"
            id="name"
            className="input input-bordered"
            placeholder="Name"
            {...register('name', { required: true })}
          />
        </div>
        <div>
          {errors.password && (
            <span className="text-sm text-danger-300">
              {errors.password.message}
            </span>
          )}
          <input
            type="password"
            id="password"
            className="input input-bordered"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
        <div>
          <button
            className="btn btn-primary btn-md w-full"
            type="submit"
            disabled={isLoading}
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center gap-2">
        <span className="text-neutral-200">or</span>
        <button
          className="btn btn-neutral btn-md w-full"
          disabled={isLoading}
          onClick={() => onSocialSignIn(SocialAuthType.Google)}
        >
          <IconBrandGoogleFilled size={20} /> Continue with Google
        </button>
        <span className="text-neutral-200">
          Already have an account?{' '}
          <Link
            className="font-bold text-primary-foreground  hover:underline"
            href="/auth/login"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};
