import { useEffect, useState } from 'react';
import { LinkT } from '../components/LinksList';

type stateT = {
  link: string;
  isLoading: boolean;
  error?: string;
  linkList?: LinkT[];
  validationError?: boolean;
};

const saveLocalStorage = (linkList: LinkT[]) => {
  localStorage.setItem('linkList', JSON.stringify(linkList));
};

const validateInput = (input: string) => {
  return input.trim().length !== 0;
};

function useShortenLink() {
  const [state, setState] = useState<stateT>({
    link: '',
    isLoading: false,
    linkList: JSON.parse(localStorage.getItem('linkList')!) || [],
    validationError: false
  });

  const clickHandler = async () => {
    try {
      if (!validateInput(state.link)) {
        setState((ps) => ({ ...ps, validationError: true }));

        return;
      }

      setState((prevState) => ({ ...prevState, isLoading: true }));

      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${state.link}`
      );
      const data = await res.json();

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        link: data?.result.full_short_link,
        linkList: [
          ...(prevState.linkList as any[]),
          {
            link: state.link,
            shortenLink: data?.result.full_short_link
          }
        ]
      }));
      saveLocalStorage([
        ...state?.linkList!,
        {
          link: state.link,
          shortenLink: data?.result.full_short_link
        }
      ]);
    } catch (error) {
      setState((prevState) => ({ ...prevState, error: error as string }));
    }
  };

  const setLink = (link: string) => {
    setState((pState) => ({ ...pState, link }));
  };

  useEffect(() => {
    setState((ps) => ({ ...ps, validationError: false }));
  }, [state.link]);

  return {
    state,
    clickHandler,
    setLink
  };
}

export default useShortenLink;
