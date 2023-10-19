import React from 'react';

const Nav = () => {
  const [currentPage, setCurrentPage] = React.useState('about');

  return (
    <>
      <nav className='sticky flex flex-col top-0 text-white h-[100svh] items-center z-10'>
        <div className='top-0 w-1 flex-auto bg-white'></div>
        <ul className='right-0 my-4 '>
          <li>
            <button
              className={`about transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 w-16 md:text-base md:w-24 text-center ${
                currentPage === 'about'
                  ? 'bg-white font-normal text-black'
                  : 'bg-transparent'
              }`}
              onClick={() => {
                setCurrentPage('about');
                location.href = '#about';
              }}>
              About
            </button>
          </li>
          <li>
            <button
              className={`projects transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 w-16 md:text-base md:w-24 text-center ${
                currentPage === 'projects'
                  ? 'bg-white font-normal text-black'
                  : 'bg-transparent'
              }`}
              onClick={() => {
                setCurrentPage('projects');
                location.href = '#projects';
              }}>
              Projects
            </button>
          </li>
          <li>
            <button
              className={`resume transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 w-16 md:text-base md:w-24 text-center  ${
                currentPage === 'resume'
                  ? 'bg-white font-normal text-black'
                  : 'bg-transparent'
              }`}
              onClick={() => {
                setCurrentPage('resume');
                location.href = '#resume';
              }}>
              Resume
            </button>
          </li>
          <li>
            <button
              className={`contact transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 w-16 md:text-base md:w-24 text-center ${
                currentPage === 'contact'
                  ? 'bg-white font-normal text-black'
                  : 'bg-transparent'
              }`}
              onClick={() => {
                setCurrentPage('contact');
                location.href = '#contact';
              }}>
              Contact
            </button>
          </li>
        </ul>
        <div className='bottom-0 w-1 flex-auto bg-white '></div>
      </nav>
    </>
  );
};

export default Nav;
