import { ChangeEvent, FormEvent, useState } from 'react';
import useShortenLink from '../../hooks/useShortenLink';
import LinksList from '../LinksList';

function SearchBar() {
  const [input, setInput] = useState('');
  const { clickHandler, setLink, state } = useShortenLink();

  const { validationError } = state;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clickHandler();
    setInput('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setLink(e.target.value);
  };

  return (
    <div className='absolute w-[80%] lg:top-[25%] top-[24%]'>
      <div className='flex-1 rounded-xl min-w-[80%] min-h-[150px] bg-DarkViolet flex items-center z-10 p-6'>
        <form
          action=''
          className='flex justify-center items-start w-[100%] gap-8 lg:flex-row sm:flex-col'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col w-full justify-end'>
            <input
              type='text'
              placeholder='Shorten a link here...'
              className={`rounded-lg sm:w-full min-h-[50px] px-6 ${validationError ? 'border-red-500 border placeholder-red-500' : ''} `}
              value={input}
              onChange={onChange}
            />
            {validationError && <span className='text-red-500 mt-4'>Please add a link</span>  }
          </div>

          <button
            type='submit'
            className='text-white bg-cyan rounded-lg p-2 flex-auto lg:max-w-[20%] min-h-[50px] text-center cursor-pointer sm:w-full'
          >
            Shorten it!
          </button>
        </form>
      </div>
      <LinksList linkList={state?.linkList!} />
    </div>
  );
}

export default SearchBar;
