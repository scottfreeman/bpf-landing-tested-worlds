import Link from 'next/link';

export default function Hotel() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <section className='bg-white text-black flex flex-wrap'>
        <div className='flex w-full xl:w-1/3'>
          <div className='m-4 bg-gray-200 w-full'>
            <div className='flex-1 m-4 p-4'>
              <div className='text-2xl uppercase font-bold'>Airports</div>
              <ul className='list-disc list-outside mt-2 ml-5'>
                <li className='list-item'>
                  <span className='font-bold'>Birmingham International Airport</span> (BHX)
                  <br />
                  <span>~15 minutes drive</span>.<br />
                  <Link
                    className='hover:underline text-blue-700'
                    target='_blank'
                    href='https://www.google.com/maps/dir/BHX,+Birmingham/Royal+Court+Hotel,+Tamworth+Rd,+Coventry+CV7+8JG/@52.4365774,-1.68307,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4870b0deff56c9e3:0xd7fab23579355bb!2m2!1d-1.7435071!2d52.4523821!1m5!1m1!1s0x48774cc392ad6929:0xab89d5d52186d00a!2m2!1d-1.5413319!2d52.4452701!3e0?hl=en'
                  >
                    Open Map
                  </Link>
                </li>
                <li className='list-item mt-2'>
                  <span className='font-bold'>East Midlands European Airport</span> (EMA)
                  <br />
                  <span>~45 minutes drive</span>.<br />
                  <Link
                    className='hover:underline text-blue-700'
                    target='_blank'
                    href='https://www.google.com/maps/dir/East+Midlands+Airport+(EMA),+Castle+Donington,+Derby/Royal+Court+Hotel,+Tamworth+Rd,+Coventry+CV7+8JG/@52.6246232,-1.7911145,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4879e5b2f87b0e53:0x32972cb4ce3df85!2m2!1d-1.332134!2d52.829374!1m5!1m1!1s0x48774cc392ad6929:0xab89d5d52186d00a!2m2!1d-1.5413319!2d52.4452701!3e0?hl=en'
                  >
                    Open Map
                  </Link>
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
                  <Link className='hover:underline text-blue-700' target='_blank' href='https://www.allenstaxis.com/'>
                    Website
                  </Link>
                </li>
                <li className='list-item mt-2'>
                  <span className='font-bold'>Central Taxis</span>
                  <br />
                  <span>024 7633 3333</span>
                  <br />
                  <Link
                    className='hover:underline text-blue-700'
                    target='_blank'
                    href='https://centraltaxiswestmidlands.co.uk/'
                  >
                    Website
                  </Link>
                </li>
                <li className='list-item mt-2'>
                  <span className='font-bold'>Lewis Taxis</span>
                  <br />
                  <span>024 7666 6666</span>
                  <br />
                  <Link className='hover:underline text-blue-700' target='_blank' href='https://www.lewistaxis.co.uk/'>
                    Website
                  </Link>
                </li>
              </ul>
              <div className='text-2xl mt-10 uppercase font-bold'>Parking</div>
              <div className='my-2'>Free on-site parking is available for the duration of the event.</div>
              <div>
                There are 400 spaces, 7 disabled spaces, and 5 coach spaces.
                <br />
                There are no height restrictions.
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full xl:w-2/3'>
          <div className='m-4 border w-full'>
            <div className='flex-1 m-4 p-4'>
              <div className='text-2xl uppercase font-bold mb-2'>Hotel Information</div>
              <div className='mb-2'>Royal Court Hotel & Spa, Tamworth Road, Coventry, CV7 8JG.</div>
              <div className='mb-2'>
                <Link
                  target='_blank'
                  href='https://www.britanniahotels.com/hotels/the-royal-court-hotel'
                  className='hover:underline text-blue-700'
                >
                  View Hotel Information
                </Link>
              </div>
              <div className='mb-2'>
                <Link
                  className='hover:underline text-blue-700'
                  target='_blank'
                  href='https://goo.gl/maps/kfqNNBajaCsR9kqz7'
                >
                  Open Map
                </Link>
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
              <div className='text-2xl uppercase font-bold mt-10 mb-2'>Booking</div>
              <div className='mb-2'>To make a booking at the Royal Court Hotel & Spa, click the link below.</div>
              <div>
                <Link
                  target='_blank'
                  href='https://www.britanniahotels.com/hotels/the-royal-court-hotel'
                  className='inline-block bg-blue-600 text-white p-3 rounded-full w-52 hover:bg-blue-500 font-bold text-center'
                >
                  Book Hotel
                </Link>
              </div>
              <div className='text-2xl uppercase font-bold mt-10 mb-2'>Other hotel options</div>
              <div>
                Other hotel options may be available. Search for available rooms on{' '}
                <Link
                  className='hover:underline text-blue-700'
                  target='_blank'
                  href='https://www.trivago.com/en-US/lm/hotels-coventry-united-kingdom?search=200-19699;dr-20231003-20231008;rc-1-1'
                >
                  trivago.com
                </Link>{' '}
                or{' '}
                <Link
                  className='hover:underline text-blue-700'
                  target='_blank'
                  href='https://uk.hotels.com/Hotel-Search?adults=1&children=&d1=2023-10-03&d2=2023-10-08&destination=Coventry%2C%20England%2C%20United%20Kingdom&endDate=2023-10-08&latLong=&mapBounds=&pwaDialog&regionId=6704&rooms=1&semdtl=&sort=RECOMMENDED&startDate=2023-10-03&theme=&useRewards=false&userIntent='
                >
                  hotels.com
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
