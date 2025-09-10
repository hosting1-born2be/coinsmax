'use client';

export const PolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex w-[800px] flex-col gap-[60px] py-20 max-md:w-full max-md:px-4 max-md:py-16">
      {children}
    </main>
  );
};
