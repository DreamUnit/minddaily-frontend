import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Image
        src="/assets/icons/app-logo.svg"
        className="h-9 w-auto"
        alt="App Logo"
        width={100}
        height={40}
      />

      {children}
    </div>
  );
};

export default AuthLayout;
