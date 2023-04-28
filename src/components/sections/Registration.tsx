import { Button } from '@atoms';

export function Registration() {
  return (
    <div className='bg-gray-200 px-4 mt:px-0'>
      <section className='flex flex-wrap xl:w-1/2 m-auto mb-10'>
        <div className='m-auto p-4'>
          <div className='text-4xl uppercase font-bold mb-2 text-center'>Registration</div>

          <div className='flex flex-col md:flex-row mb-8'>
            <div className='hidden md:block md:w-24'>
              <div className='text-9xl font-bold text-orange-700 text-right pr-10'>1</div>
            </div>
            <div className='mt-4'>
              <div className='text-2xl mb-2'>
                <span className='font-bold text-orange-700 pr-3 md:hidden'>1:</span>Active IPL membership
              </div>
              <div className='mb-2'>
                You must have a current and valid membership for the International Powerlifting League before submitting
                your entry form.
              </div>
              <div className='mb-2'>Memberships will not be sold at the meet.</div>
              <div>
                <Button href='https://powerlifting-ipl.com/arm_register/' target='_blank'>
                  IPL Membership Form
                </Button>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row mb-8'>
            <div className='hidden md:block md:w-24'>
              <div className='text-9xl font-bold text-orange-700 text-right pr-10'>2</div>
            </div>
            <div className='mt-4'>
              <div className='text-2xl mb-2'>
                <span className='font-bold text-orange-700 pr-3 md:hidden'>2:</span>Active BPF membership
              </div>
              <div className='mb-2'>
                You must have a current and valid membership for the British Powerlifting Federation before submitting
                your entry form.
              </div>
              <div className='mb-2'>Memberships will not be sold at the meet.</div>
              <div>
                <Button href='https://forms.gle/gVhmiuWhVR4obRJ66' target='_blank'>
                  BPF Membership Form
                </Button>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row mb-4'>
            <div className='hidden md:block md:w-24'>
              <div className='text-9xl font-bold text-orange-700 text-right pr-10'>3</div>
            </div>
            <div className='mt-4'>
              <div className='text-2xl mb-2'>
                <span className='font-bold text-orange-700 pr-3 md:hidden'>3:</span>Submit your entry form
              </div>
              <div className='mb-2'>You must submit your entry form before the 10th of September, 2023.</div>
              <div className='mb-2'>
                <Button href='https://forms.gle/JCmctRZaeY877iq29' target='_blank'>
                  Meet Entry Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
