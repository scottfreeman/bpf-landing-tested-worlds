import Image from 'next/image';
import { A } from '@/components';

import kabukiStrength from '../../images/sponsors/kabuki-strength.jpg';
import montyCrown from '../../images/sponsors/monty-crown.jpg';
import strengthShop from '../../images/sponsors/strength-shop.jpg';
import strictCurlFed from '../../images/sponsors/strict-curl-federation.jpg';

export default function Sponsors() {
  return (
    <section className='xl:w-5/6 m-auto mb-10'>
      <div className='text-3xl uppercase font-bold m-4 text-center'>Thank you to our sponsors</div>
      <div className='flex justify-center mb-4'>
        <div className='mx-4'>
          <A href='https://store.kabukistrength.net/' target='_blank'>
            <Image src={kabukiStrength} alt='Kabuki Strength' />
          </A>
        </div>
        <div className='mx-4'>
          <Image src={montyCrown} alt='Monty Crown' />
        </div>
        <div className='mx-4'>
          <A href='https://www.strengthshop.co.uk/' target='_blank'>
            <Image src={strengthShop} alt='Strength Shop' />
          </A>
        </div>
        <div className='mx-4'>
          <Image src={strictCurlFed} alt='Strict Curl Federation' />
        </div>
      </div>
      <div className='text-center'>
        Are you interested in being a sponsor? Contact <A href='mailto:BPF.IPL.GB@gmail.com'>BPF.IPL.GB@gmail.com</A>.
      </div>
    </section>
  );
}
