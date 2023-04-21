import Image from 'next/image';
import Link from 'next/link';

import kabukiStrength from '../../images/sponsors/kabuki-strength.jpg';
import montyCrown from '../../images/sponsors/monty-crown.jpg';
import strengthShop from '../../images/sponsors/strength-shop.jpg';
import strictCurlFed from '../../images/sponsors/strict-curl-federation.jpg';

export default function Sponsors() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <div className='text-3xl uppercase font-bold m-4 text-center'>Thank you to our sponsors</div>
      <section className='flex justify-center'>
        <div className='mx-4'>
          <Link href='https://store.kabukistrength.net/' target='_blank'>
            <Image src={kabukiStrength} alt='Kabuki Strength' />
          </Link>
        </div>
        <div className='mx-4'>
          <Image src={montyCrown} alt='Monty Crown' />
        </div>
        <div className='mx-4'>
          <Link href='https://www.strengthshop.co.uk/' target='_blank'>
            <Image src={strengthShop} alt='Strength Shop' />
          </Link>
        </div>
        <div className='mx-4'>
          <Image src={strictCurlFed} alt='Strict Curl Federation' />
        </div>
      </section>
    </div>
  );
}
