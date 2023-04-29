import Image from 'next/image';

import logoImage from '../../images/logo.jpg';

export function Header() {
  return (
    <header className='bg-black'>
      <div className='bg-black container pt-8 px-4 mx-auto flex justify-center'>
        <Image src={logoImage} alt='IPL Tested World Powerlifting Championships 2023' height={500}></Image>
      </div>
    </header>
  );
}
