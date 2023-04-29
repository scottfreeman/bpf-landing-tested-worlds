import Countdown, { CountdownRenderProps } from 'react-countdown';
import { A } from '@atoms';

export function Main() {
  const date = new Date('2023-10-18 09:00:00');

  const countdownRenderer = ({ completed, formatted }: CountdownRenderProps) => {
    if (completed) {
      return <></>;
    } else {
      return (
        <div className='flex'>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.days}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Days</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.hours}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Hours</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.minutes}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Minutes</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-orange-500 to-orange-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.seconds}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Seconds</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <section className='bg-black text-white py-8 lg:py-10 flex flex-col items-center text-center'>
        <div className='mb-8'>
          <div className='text-4xl lg:text-6xl font-bold mb-12 uppercase'>IPL Tested World Championships</div>
          <div className='text-2xl lg:text-4xl font-bold mb-2 uppercase'>Royal Court Hotel &amp; Spa, Coventry</div>
          <div className='text-xl'>Tamworth Road, Coventry, CV7 8JG</div>
        </div>
        <div className='text-2xl lg:text-4xl font-bold mb-8 uppercase'>
          18 - 22<sup className='lowercase text-sm lg:-top-5'>nd</sup> October, 2023
        </div>
        <div>
          <Countdown date={date} renderer={countdownRenderer} />
        </div>
      </section>

      <section className='flex flex-wrap xl:w-5/6 items-start justify-center m-auto'>
        <div className='flex w-full lg:w-1/2'>
          <div className='flex-1 bg-gray-200 rounded m-4 p-4 h-96'>
            <div className='uppercase text-sm mb-2'>Event Location</div>
            <div className='text-lg lg:text-xl mb-2'>Royal Court Hotel &amp; Spa, Tamworth Road, Coventry, CV7 8JG</div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.8699774914967!2d-1.5439068226739703!3d52.44527007204171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774cc392ad6929%3A0xab89d5d52186d00a!2sRoyal%20Court%20Hotel!5e0!3m2!1sen!2suk!4v1682081222379!5m2!1sen!2suk'
              width='600'
              height='290'
              loading='lazy'
              className='w-full'
            ></iframe>
          </div>
        </div>
        <div className='flex w-full lg:w-1/2'>
          <div className='flex-1 bg-gray-200 rounded m-4 p-4 h-96'>
            <div className='uppercase text-sm mb-2'>Event Information</div>
            <div className='mb-2'>
              <span className='font-bold'>Spectators fee:</span>
              <br />
              &pound;10 each day for 16 years old and over.
              <br />
              Lifting begins 9am each day.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Powerlifting bars used:</span>
              <br />
              Squat bar: 25kg Capps Texas Squat Bar.
              <br />
              Bench bar: 20kg Capps Texas Power Bar.
              <br />
              Deadlift bar: 20kg Capps Texas Deadlift Bar.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Livestream:</span>
              <br />
              Link coming soon.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Meet Directors:</span>
              <br />
              <A href='mailto:bpf.secretary@gmail.com'>bpf.secretary@gmail.com</A>
              <br />
              <A href='https://www.bplf.co.uk' target='_blank'>
                British Powerlifting Federation
              </A>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
