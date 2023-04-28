import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header, Footer, Hotel, Main, Registration, Schedule, Sponsors } from '@sections';

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='IPL Tested World Championships'
        description='IPL Tested World Championships in Coventry, UK on 4th to 8th October, 2023.'
        canonical='https://www.scottfreeman.net/'
        openGraph={{
          url: 'https://www.scottfreeman.net/'
        }}
      />
      <Head>
        <title>IPL Tested World Championships | 4th - 8th October 2023 | Coventry, UK</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <Schedule />
      <Registration />
      <Hotel />
      <Sponsors />
      <Footer />
    </div>
  );
}
