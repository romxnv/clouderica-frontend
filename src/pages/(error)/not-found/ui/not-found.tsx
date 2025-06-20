import { Link } from 'react-router';

import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';

export const NotFoundPage = () => {
  return (
    <>
      <div className="pointer-events-none my-12 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex flex-col gap-6 px-6">
        <div className="flex flex-col items-center gap-2">
          <div className="gradient bg-clip-text text-9xl font-bold text-transparent">
            404
          </div>
          <div className="text-3xl font-semibold">Page not found</div>
          <div className="text-sm text-gray-400">
            Looks like this page doesn&apos;t exist
          </div>
        </div>
      </div>
      <div className="my-12 flex items-center justify-center">
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    </>
  );
};
