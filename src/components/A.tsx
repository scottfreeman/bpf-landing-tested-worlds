import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  target?: '_blank';
}

export const A: React.FC<PropsWithChildren<Props>> = ({ href, target, children }) => {
  return (
    <Link href={href} target={target} className='hover:underline text-blue-700'>
      {children}
    </Link>
  );
};
