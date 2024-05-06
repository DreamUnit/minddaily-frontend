import '@testing-library/jest-dom';

import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import authService from '@/src/services/authService';
import { SocialAuthType } from '@/src/@types';
import { RegisterForm } from '@/src/components/auth/RegisterForm';

jest.mock('@/src/services/authService', () => ({
  register: jest.fn(),
  socialSignIn: jest.fn(),
}));

describe('RegisterForm', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders register form correctly', () => {
    render(<RegisterForm />);
    expect(screen.getByText('Sign up for MindDaily')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('submits register form with valid credentials', async () => {
    const email = 'test@test.com';
    const name = 'Test';
    const password = '123456_A';
    (authService.register as jest.Mock).mockResolvedValueOnce({
      email,
      name,
      password,
    });

    render(<RegisterForm />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: name },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: password },
    });
    fireEvent.click(screen.getByText('Sign up'));

    await waitFor(() => {
      expect(authService.register).toHaveBeenCalledTimes(1);
      expect(authService.register).toHaveBeenCalledWith({
        email,
        name,
        password,
      });
    });
  });

  it('displays error messages for invalid credentials', async () => {
    const email = 'test@test.com';
    const name = '1';
    const password = '123';
    (authService.register as jest.Mock).mockResolvedValueOnce({
      email,
      name,
      password,
    });

    render(<RegisterForm />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: name },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: password },
    });
    fireEvent.click(screen.getByText('Sign up'));

    await waitFor(() => {
      expect(authService.register).toHaveBeenCalledTimes(0);
      expect(screen.queryByRole('alert')).toBeInTheDocument();
    });
  });

  it('submits social sign in with Google', async () => {
    (authService.socialSignIn as jest.Mock).mockResolvedValueOnce(
      SocialAuthType.Google
    );

    render(<RegisterForm />);
    fireEvent.click(screen.getByText('Continue with Google'));

    await waitFor(() => {
      expect(authService.socialSignIn).toHaveBeenCalledTimes(1);
      expect(authService.socialSignIn).toHaveBeenCalledWith(
        SocialAuthType.Google
      );
    });
  });
});
