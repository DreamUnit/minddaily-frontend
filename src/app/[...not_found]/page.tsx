'use client';

import NotFoundIcon from '@/public/assets/icons/404.svg';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-full items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <NotFoundIcon className="size-48" />
        <p className="max-w-md text-center text-sm">
          Looks like you`ve stumbled upon a page that`s playing hide and seek
          with us. Don`t worry, it happens to the best of us. But fear not,
          we`re here to help you get back on track!
        </p>
        <button onClick={() => router.push('/')} className="btn">
          Go back home
        </button>
      </div>
    </div>
  );
}
