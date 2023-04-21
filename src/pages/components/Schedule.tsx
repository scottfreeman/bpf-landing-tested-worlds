export default function Schedule() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <section className='flex flex-wrap'>
        <div className='flex w-full lg:w-1/2 h-96'>
          <div className='m-4 border w-full'>
            <div className='flex-1 m-4 p-4 text-center'>
              <div className='text-2xl uppercase font-bold'>Lifting Schedule</div>
              <div>...</div>
            </div>
          </div>
        </div>
        <div className='flex w-full lg:w-1/2 h-96'>
          <div className='m-4 border w-full'>
            <div className='flex-1 m-4 p-4 text-center'>
              <div className='text-2xl uppercase font-bold'>Weigh-In Schedule</div>
              <div>...</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
