'use client';

import Image from 'next/image';

export const Hero = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <section className="relative flex h-[350px] max-md:h-[200px]">
      <Image
        src={imgUrl}
        alt="insight-hero"
        className="absolute inset-0 object-cover"
        fill
        unoptimized
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/30 to-[#161616]/30" />
    </section>
  );
};
