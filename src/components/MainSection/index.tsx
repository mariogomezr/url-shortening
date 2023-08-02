import Footer from '../Footer';
import BoostBanner from '../BoostBanner';
import StatisticsSection from '../StatisticsSection';
import SearchBar from '../SearchBar';
import MainBanner from '../MainBanner';

function MainSection() {
  return (
    <div className='flex justify-center items-center flex-col relative'>
      <MainBanner />
      <SearchBar />
      <StatisticsSection />
      <BoostBanner />
      <Footer />
    </div>
  );
}

export default MainSection;
