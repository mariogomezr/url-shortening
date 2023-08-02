import bgPersonWorkingImageSrc from '../../../images/illustration-working.svg';

function MainBanner() {
  return (
    <div className='flex lg:flex-row w-full gap-12  items-center justify-center mb-36 pl-16 flex-col-reverse overflow-hidden ' >
      <div className='flex flex-col gap-6 max-w-xl'>
        <h1 className='text-7xl font-bold'> More than just shorter links</h1>
        <p className='text-textGray text-justify'>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='text-white bg-cyan rounded-full p-2 flex-auto lg:max-w-[150px] text-center cursor-pointer min-w-[200px] ' >
          Get Started
        </button>
      </div>
      <img src={bgPersonWorkingImageSrc} alt='a person working on a computer' className='lg:relative lg:left-[20%]' />
    </div>
  );
}

export default MainBanner;
