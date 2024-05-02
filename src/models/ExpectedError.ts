export class AppError extends Error {
  constructor(message: string, cause?: string) {
    super(message);
    this.cause = cause;
    this.name = 'AppError';
  }
}
