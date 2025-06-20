import { Outlet } from 'react-router';

export const EmptyLayout = () => {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="w-full max-w-md -translate-y-24 transform">
        <Outlet />
      </div>
      <img
        src="/assets/images/wave.svg"
        className="pointer-events-none absolute -bottom-40 w-full object-cover"
        alt="Background wave"
      />
    </main>
  );
};
