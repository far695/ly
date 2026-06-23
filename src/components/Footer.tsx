'use client';

import Link from 'next/link';
import { globalConfig } from '@/config/global';

export default function Footer() {
  return (
    <section className="text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px]">
        <Link href="/" className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
          <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
          <span className="-translate-y-0.5">{globalConfig.site.author}</span>
        </Link>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          {globalConfig.footer.copyright}
        </p>
        <span className="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        </span>
      </div>
    </section>
  );
} 
