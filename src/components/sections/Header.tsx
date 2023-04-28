import Image from 'next/image';

import logoImage from '../../images/logo.jpg';

export function Header() {
  return (
    <header className='bg-white text-black body-font' style={{ backgroundColor: '#f6f6f6' }}>
      <div className='container mx-auto flex justify-center'>
        <Image src={logoImage} alt='IPL BPF Tested World Championships 2023' height={500}></Image>
      </div>
    </header>
  );
}
