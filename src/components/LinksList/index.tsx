import Link from "../Link";

export type LinkT = {
  link: string;
  shortenLink: string;
};

function LinksList({ linkList = [] }: { linkList: LinkT[] }) {

  const onCopy = (shortenLink: string) => {
    navigator.clipboard.writeText(shortenLink);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {linkList.map((item) => {
        return (
          <Link item={item} onCopy={onCopy} key={item.shortenLink} />
        );
      })}
    </div>
  );
}

export default LinksList;
