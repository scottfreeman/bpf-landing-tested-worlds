import Image from 'next/image';
import iplLogo from '../../images/ipl.png';
import bpfLogo from '../../images/bpf.png';

export default function Footer() {
  return (
    <footer className='bg-gray-200 text-black'>
      <div className='container px-5 py-8 mx-auto flex flex-col items-center'>
        <div className='flex justify-center items-center'>
          <div className='mx-4'>
            <Image src={iplLogo} alt='International Powerlifting League' width={125} />
          </div>
          <div className='mx-4'>
            <Image src={bpfLogo} alt='British Powerlifting Federation' width={125} />
          </div>
        </div>
        <div className='mt-5 text-xs'>&copy; 2023 British Powerlifting Federation. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
