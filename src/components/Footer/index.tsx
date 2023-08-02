import instagramIcon from '../../../images/icon-instagram.svg';
import twitterIcon from '../../../images/icon-twitter.svg';
import pintarestIcon from '../../../images/icon-pinterest.svg';
import facebookIcon from '../../../images/icon-facebook.svg';

const FOOTER_LINKS_CONTENT = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support']
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact']
  }
];

const icons = [facebookIcon, twitterIcon, pintarestIcon, instagramIcon];

function Footer() {
  return (
    <footer className='flex lg:flex-row flex-col justify-center items-center   gap-12 lg:items-start p-8 bg-black w-[100%]'>
      <img
        src='../../../images/logo.svg'
        alt='Shortly logo'
        className='object-contain'

      />
      <div className='lg:ml-auto flex lg:flex-row  flex-col items-center lg:gap-24 gap-8 lg:w-[70%] lg:justify-end' >
        {FOOTER_LINKS_CONTENT.map((content) => {
          return (
            <div className='flex flex-col gap-4' key={content.title}>
              <p className='text-sm text-white font-bold '>{content.title}</p>
              {content.links.map((link) => (
                <a className='text-whiteSmoke text-xs cursor-pointer' key={link}>{link}</a>
              ))}
            </div>
          );
        })}

        <div className='flex flex-row gap-4 items-start'>
          {icons.map((iconSrc, i ) => (
            <img className='object-contain cursor-pointer' src={iconSrc} key={`icon-${i}`} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
