import Image from 'next/image';

const DiariesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center justify-center p-4">
        <Image
          src="/assets/icons/app-logo.svg"
          className="h-9 w-auto"
          alt="App Logo"
          width={100}
          height={40}
        />
        {children}
      </div>
    </div>
  );
};

export default DiariesLayout;
