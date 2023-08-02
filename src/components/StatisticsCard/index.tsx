export type StatisticsCardT = {
  iconSrc: string;
  title: string;
  content: string;
  marginTop?: number;
};

function StatisticsCard({
  iconSrc,
  title,
  content,
  marginTop
}: StatisticsCardT) {
  return (
    <div
      className={`flex flex-col fle-1 bg-white rounded-md w-[350px] h-[280px] p-8 gap-4 relative z-10`}
      style={{ marginTop: `${marginTop}px` }}
    >
      <img
        src={iconSrc}
        alt=''
        className='absolute bg-violet-950 rounded-full p-4 -top-10'
      />
      <p className='font-bold text-xl mt-12'>{title}</p>
      <p className='text-greyViolet'>{content}</p>
    </div>
  );
}

export default StatisticsCard;
