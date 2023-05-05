import { Button } from '@atoms';

export function Registration() {
  return (
    <div className='bg-gray-200 px-4 mt:px-0'>
      <section className='flex flex-wrap xl:w-3/4 2xl:w-1/2 m-auto mb-10'>
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
              <div className='mb-2'>
                You must submit your entry form before the 10th of September, 2023.
                <br />
                No refunds or transfers. All sale are final.
              </div>
              <div className='mb-2'>
                <div className='flex flex-wrap justify-start'>
                  <div className='text-center mb-6 mr-6 w-64 border border-gray-400 p-3 rounded'>
                    <div className='text-lg font-bold'>Wednesday 18th October</div>
                    <div>Men&apos;s (KG): 44, 48, 52, 56, 60</div>
                    <div>Women&apos;s (KG): 44, 48, 52, 56, 60</div>
                    <div className='mt-2'>
                      <Button
                        href='https://form.123formbuilder.com/6416664/ipl-drug-tested-2023-world-championship-wednesday'
                        target='_blank'
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                  <div className='text-center mb-6 mr-6 w-64 border border-gray-400 p-3 rounded'>
                    <div className='text-lg font-bold'>Thursday 19th October</div>
                    <div>Men&apos;s (KG): 67.5 & 75</div>
                    <div>Women&apos;s (KG): 67.5 & 75</div>
                    <div className='mt-2'>
                      <Button
                        href='https://form.123formbuilder.com/6421161/ipl-drug-tested-2023-world-championship-thursday'
                        target='_blank'
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                  <div className='text-center mb-6 mr-6 w-64 border border-gray-400 p-3 rounded'>
                    <div className='text-lg font-bold'>Friday 20th October</div>
                    <div>Men&apos;s (KG): 82.5 & 90</div>
                    <div>Women&apos;s (KG): 82.5 & 90</div>
                    <div className='mt-2'>
                      <Button
                        href='https://form.123formbuilder.com/6421167/ipl-drug-tested-2023-world-championship-friday'
                        target='_blank'
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                  <div className='text-center mb-6 mr-6 w-64 border border-gray-400 p-3 rounded'>
                    <div className='text-lg font-bold'>Saturday 21st October</div>
                    <div>Men&apos;s (KG): 100 & 110</div>
                    <div>Women&apos;s (KG): 100 & 110</div>
                    <div className='mt-2'>
                      <Button
                        href='https://form.123formbuilder.com/6421169/ipl-drug-tested-2023-world-championship-saturday'
                        target='_blank'
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                  <div className='text-center mb-6 mr-6 w-64 border border-gray-400 p-3 rounded'>
                    <div className='text-lg font-bold'>Sunday 22nd October</div>
                    <div>Men&apos;s (KG): 125, 140, 140+</div>
                    <div>Women&apos;s (KG): 110+</div>
                    <div className='mt-2'>
                      <Button
                        href='https://form.123formbuilder.com/6421171/ipl-drug-tested-2023-world-championship-sunday'
                        target='_blank'
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
