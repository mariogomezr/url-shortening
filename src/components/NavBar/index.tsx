function NavBar() {
  return (
    <nav className='pl-16'>
      <ul className='flex flex-row items-center mb-12 mt-12 box-border'>
        <div className="flex flex-row gap-12 items-center">
          <img className="cursor-pointer" src='../../../images/logo.svg' alt='Shortly logo' />
          <li className="text-textGray cursor-pointer font-bold">Features</li>
          <li className="text-textGray cursor-pointer font-bold">Pricing</li>
          <li className="text-textGray cursor-pointer font-bold">Resources</li>
        </div>
        <div className='flex flex-row gap-12 ml-auto mr-24 items-center '>
          <li className="text-textGray cursor-pointer font-bold">Login</li>
          <button className="text-white bg-cyan rounded-full p-2 font-bold shrink-0 min-w-[100px] text-center cursor-pointer">Sign Up</button>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
