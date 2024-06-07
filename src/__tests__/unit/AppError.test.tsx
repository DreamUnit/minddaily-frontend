import { AppError } from '@/src/models/AppError';

describe('AppError', () => {
  it('should create an instance with the provided message', () => {
    const errorMessage = 'Test error message';
    const error = new AppError(errorMessage);

    expect(error instanceof AppError).toBe(true);
    expect(error.message).toBe(errorMessage);
    expect(error.name).toBe('AppError');
    expect(error.cause).toBeUndefined();
  });

  it('should create an instance with the provided message and cause', () => {
    const errorMessage = 'Test error message';
    const cause = 'Test cause';
    const error = new AppError(errorMessage, cause);

    expect(error instanceof AppError).toBe(true);
    expect(error.message).toBe(errorMessage);
    expect(error.name).toBe('AppError');
    expect(error.cause).toBe(cause);
  });

  it('should inherit from the Error class', () => {
    const errorMessage = 'Test error message';
    const error = new AppError(errorMessage);

    expect(error instanceof Error).toBe(true);
    expect(error.message).toBe(errorMessage);
  });
});
