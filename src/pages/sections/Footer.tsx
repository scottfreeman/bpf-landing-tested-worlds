import Image from 'next/image';
import { A } from '@/components';

import iplLogo from '../../images/ipl.png';
import bpfLogo from '../../images/bpf.png';

export default function Footer() {
  return (
    <footer className='bg-gray-200 text-black'>
      <div className='container px-5 py-8 mx-auto flex flex-col items-center'>
        <div className='flex justify-center items-center'>
          <div className='mx-4'>
            <A href='https://powerlifting-ipl.com/' target='_blank'>
              <Image src={iplLogo} alt='International Powerlifting League' width={125} />
            </A>
          </div>
          <div className='mx-4'>
            <A href='https://www.bplf.co.uk/' target='_blank'>
              <Image src={bpfLogo} alt='British Powerlifting Federation' width={125} />
            </A>
          </div>
        </div>
        <div className='mt-5 text-xs'>&copy; 2023 British Powerlifting Federation. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
