import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header, Footer, Hotel, Main, Registration, Schedule, Sponsors } from '@sections';

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='IPL Tested World Powerlifting Championships 2023'
        description='IPL Tested World Powerlifting Championships in Coventry, UK on 18th to 22nd October, 2023. Hosted by British Powerlifting Federation.'
      />
      <Head>
        <title>IPL Tested World Powerlifting Championships 2023 | 18th - 22nd October 2023 | Coventry, UK</title>
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
