import AppLogoIcon from '@/public/assets/icons/app-logo.svg';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center justify-center p-4">
        <AppLogoIcon className="w-36" />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
