import brandIcon from '../../../images/icon-brand-recognition.svg';
import detailIcon from '../../../images/icon-detailed-records.svg';
import customizableIcon from '../../../images/icon-fully-customizable.svg';
import { StatisticsCardT } from '../StatisticsCard';
import StatisticsCardWrapper from '../StatisticsCardWrapper/indext';

function StatisticsSection() {
  const STATISTICS_CARDS_INFO: StatisticsCardT[] = [
    {
      iconSrc: brandIcon,
      title: 'Brand Recognition',
      content:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      iconSrc: detailIcon,
      title: 'Detailed Records',
      content:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      iconSrc: customizableIcon,
      title: 'Fully Customizable',
      content:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ];

  return (
    <div className='bg-whiteSmoke w-[100%] pl-12 top-full flex justify-center items-center gap-8 flex-col pb-24 pt-[500px]'>
      <div className='flex flex-col gap-8 max-w-lg mb-12 mt-12'>
        <h2 className='font-bold text-5xl text-center'>Advanced Statistics</h2>
        <p className='text-textGray text-center'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatisticsCardWrapper cards={STATISTICS_CARDS_INFO} />
    </div>
  );
}

export default StatisticsSection;
