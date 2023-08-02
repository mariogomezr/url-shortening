import { useState } from 'react';
import { LinkT } from '../LinksList';

function Link({
  item,
  onCopy
}: {
  item: LinkT;
  onCopy: (link: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className='flex flex-row items-center my-4 z-30 bg-white rounded-lg gap-4 w-full px-8 py-4'
      key={item.shortenLink}
    >
      <p>{item.link}</p>
      <div className='ml-auto flex flex-row gap-4 items-center'>
        <p className='text-cyan'>{item.shortenLink}</p>
        {!copied ? (
          <button
            className='text-white bg-cyan rounded-full p-2 flex-auto min-w-[150px] max-h-[50px] text-center cursor-pointer'
            onClick={() => {
              onCopy(item.shortenLink);
              setCopied(true);
            }}
          >
            Copy
          </button>
        ) : (
          <button
            className='text-white bg-DarkViolet rounded-full p-2 flex-auto min-w-[150px] max-h-[50px] text-center cursor-pointer'
            onClick={() => {
              onCopy(item.shortenLink);
            }}
          >
            Copied
          </button>
        )}
      </div>
    </div>
  );
}

export default Link;
