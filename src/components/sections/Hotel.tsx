import { A, Button } from '@atoms';

export function Hotel() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <section className='bg-white text-black flex flex-wrap'>
        <div className='flex w-full xl:w-1/3'>
          <div className='m-4 bg-gray-200 w-full rounded'>
            <div className='flex-1 m-2 p-4'>
              <div className='text-2xl uppercase font-bold'>Airports</div>
              <ul className='list-disc list-outside mt-2 ml-5'>
                <li className='list-item'>
                  <span className='font-bold'>Birmingham International Airport</span> (BHX)
                  <br />
                  <span>~15 minutes drive</span>.<br />
                  <A
                    target='_blank'
                    href='https://www.google.com/maps/dir/BHX,+Birmingham/Royal+Court+Hotel,+Tamworth+Rd,+Coventry+CV7+8JG/@52.4365774,-1.68307,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4870b0deff56c9e3:0xd7fab23579355bb!2m2!1d-1.7435071!2d52.4523821!1m5!1m1!1s0x48774cc392ad6929:0xab89d5d52186d00a!2m2!1d-1.5413319!2d52.4452701!3e0?hl=en'
                  >
                    Open Map
                  </A>
                </li>
                <li className='list-item mt-2'>
                  <span className='font-bold'>East Midlands European Airport</span> (EMA)
                  <br />
                  <span>~45 minutes drive</span>.<br />
                  <A
                    target='_blank'
                    href='https://www.google.com/maps/dir/East+Midlands+Airport+(EMA),+Castle+Donington,+Derby/Royal+Court+Hotel,+Tamworth+Rd,+Coventry+CV7+8JG/@52.6246232,-1.7911145,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4879e5b2f87b0e53:0x32972cb4ce3df85!2m2!1d-1.332134!2d52.829374!1m5!1m1!1s0x48774cc392ad6929:0xab89d5d52186d00a!2m2!1d-1.5413319!2d52.4452701!3e0?hl=en'
                  >
                    Open Map
                  </A>
                </li>
              </ul>
              <div className='text-2xl mt-10 uppercase font-bold'>Taxis</div>
              <div className='text-sm mt-2'>
                We offer this list as a convenience, not as a recommendation.
                <br />
                Other taxi firms are available.
              </div>
              <ul className='list-disc list-outside mt-2 ml-5'>
                <li className='list-item'>
                  <span className='font-bold'>Allens Taxis</span>
                  <br />
                  <span>02476 555 555</span>
                  <br />
                  <A target='_blank' href='https://www.allenstaxis.com/'>
                    Website
                  </A>
                </li>
                <li className='list-item mt-2'>
                  <span className='font-bold'>Central Taxis</span>
                  <br />
                  <span>024 7633 3333</span>
                  <br />
                  <A target='_blank' href='https://centraltaxiswestmidlands.co.uk/'>
                    Website
                  </A>
                </li>
                <li className='list-item mt-2'>
                  <span className='font-bold'>Lewis Taxis</span>
                  <br />
                  <span>024 7666 6666</span>
                  <br />
                  <A target='_blank' href='https://www.lewistaxis.co.uk/'>
                    Website
                  </A>
                </li>
              </ul>
              <div className='text-2xl mt-10 mb-2 uppercase font-bold'>Parking</div>
              <div className='mb-2'>Free on-site parking is available for the duration of the event.</div>
              <div className='mb-2'>There are 400 spaces, 7 disabled spaces, and 5 coach spaces.</div>
              <div className='mb-2'>There are no height restrictions.</div>
            </div>
          </div>
        </div>
        <div className='flex w-full xl:w-2/3'>
          <div className='m-4 border rounded w-full'>
            <div className='flex-1 m-2 p-4'>
              <div className='text-2xl uppercase font-bold mb-2'>Hotel Information</div>
              <div className='mb-2'>Royal Court Hotel &amp; Spa, Tamworth Road, Coventry, CV7 8JG.</div>
              <div className='mb-2'>
                <A target='_blank' href='https://www.britanniahotels.com/hotels/the-royal-court-hotel'>
                  View Hotel Information
                </A>
              </div>
              <div className='mb-2'>
                <A target='_blank' href='https://goo.gl/maps/kfqNNBajaCsR9kqz7'>
                  Open Map
                </A>
              </div>
              <div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.8699774914967!2d-1.5439068226739703!3d52.44527007204171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774cc392ad6929%3A0xab89d5d52186d00a!2sRoyal%20Court%20Hotel!5e0!3m2!1sen!2suk!4v1682081222379!5m2!1sen!2suk'
                  width='600'
                  height='320'
                  loading='lazy'
                  className='w-full'
                ></iframe>
              </div>

              <div className='text-2xl uppercase font-bold mt-10 mb-2'>Hotel Packages</div>
              <div className='flex flex-wrap -mx-2'>
                <div className='m-2 flex-1 basis-full md:basis-2/5'>
                  <div className='border rounded p-4'>
                    <span className='font-bold'>Single Room</span>
                    <br />
                    &pound;50 - Bed &amp; Breakfast
                    <br />
                    &pound;65 - Dinner, Bed &amp; Breakfast
                  </div>
                </div>
                <div className='m-2 flex-1 basis-full md:basis-2/5'>
                  <div className='border rounded p-4'>
                    <span className='font-bold'>Twin/Double Room</span>
                    <br />
                    &pound;60 - Bed &amp; Breakfast
                    <br />
                    &pound;90 - Dinner, Bed &amp; Breakfast
                  </div>
                </div>
                <div className='m-2 flex-1 basis-full md:basis-2/5'>
                  <div className='border rounded p-4'>
                    <span className='font-bold'>Triple Room</span>
                    <br />
                    &pound;70 - Bed &amp; Breakfast
                    <br />
                    &pound;110 - Dinner, Bed &amp; Breakfast
                  </div>
                </div>
                <div className='m-2 flex-1 basis-full md:basis-2/5'>
                  <div className='border rounded p-4'>
                    <span className='font-bold'>Quadruple Room</span>
                    <br />
                    &pound;80 - Bed &amp; Breakfast
                    <br />
                    &pound;140 - Dinner, Bed &amp; Breakfast
                  </div>
                </div>
              </div>
              <div className='mb-2'>
                To book a room at the Royal Court Hotel &amp; Spa at the discounted IPL rate, click the button below.
              </div>
              <div className='mt-4 mb-2 text-center'>
                <Button target='_blank' href='https://www.britanniahotels.com/IPL2023'>
                  Book Hotel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
