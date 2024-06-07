import { MainSidebar } from '@/src/components/MainSidebar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div>
      <MainSidebar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
