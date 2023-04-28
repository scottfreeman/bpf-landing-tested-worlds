import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  target?: '_blank';
}

export const Button: React.FC<PropsWithChildren<Props>> = ({ href, target, children }) => {
  return (
    <Link
      href={href}
      target={target}
      className='inline-block bg-blue-600 text-white py-3 px-16 rounded-full hover:bg-blue-500 font-bold text-center'
    >
      {children}
    </Link>
  );
};
