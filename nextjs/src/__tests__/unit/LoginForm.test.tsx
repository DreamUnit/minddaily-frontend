import '@testing-library/jest-dom';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import authService from '@/src/services/authService';
import { LoginForm } from '@/src/components/auth/LoginForm';
import { SocialAuthType } from '@/src/@types';

jest.mock('@/src/services/authService', () => ({
  login: jest.fn(),
  socialSignIn: jest.fn(),
}));

describe('LoginForm', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form correctly', () => {
    render(<LoginForm />);
    expect(screen.getByText('Sign in to MindDaily')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('submits login form with valid credentials', async () => {
    const email = 'test@test.com';
    const password = 'password';
    (authService.login as jest.Mock).mockResolvedValueOnce({ email, password });

    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: password },
    });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledTimes(1);
      expect(authService.login).toHaveBeenCalledWith({ email, password });
    });
  });

  it('displays error messages for invalid credentials', async () => {
    const email = 'test';
    const password = '123456_A';
    (authService.login as jest.Mock).mockResolvedValueOnce({
      email,
      password,
    });

    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: password },
    });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledTimes(0);
    });
  });

  it('submits social sign in with Google', async () => {
    (authService.socialSignIn as jest.Mock).mockResolvedValueOnce(
      SocialAuthType.Google
    );

    render(<LoginForm />);
    fireEvent.click(screen.getByText('Continue with Google'));

    await waitFor(() => {
      expect(authService.socialSignIn).toHaveBeenCalledTimes(1);
      expect(authService.socialSignIn).toHaveBeenCalledWith(
        SocialAuthType.Google
      );
    });
  });
});
