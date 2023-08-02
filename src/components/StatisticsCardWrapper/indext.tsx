import StatisticsCard, { StatisticsCardT } from '../StatisticsCard';

type StatisticsCardWrapperT = {
  cards: StatisticsCardT[];
};

function StatisticsCardWrapper({ cards }: StatisticsCardWrapperT) {
  return (
    <div className='flex gap-8 relative flex-col lg:flex-row'>
      {cards.map((card, i) => {
        return (
          <StatisticsCard
            iconSrc={card.iconSrc}
            title={card.title}
            content={card.content}
            marginTop={40*i}
            key={`card-${i}`}
          />
        );
      })}
      <span className='lg:h-2 bg-cyan lg:w-full absolute lg:top-1/2 h-full w-2 right-1/2 lg:right-0 '   />
    </div>
  );
}

export default StatisticsCardWrapper;
