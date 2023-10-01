import React from 'react'

const Nav = () => {
  const [currentPage, setCurrentPage] = React.useState('about')

  return (
    <>
      <nav className='sticky flex flex-col top-0 text-white h-screen items-center z-10'>
        <div className='abosolute top-0 w-1 flex-auto bg-white'></div>
        <ul className='abosolute top-1/2 right-0 my-4'>
          <li
            className={`about transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center ${
              currentPage === 'about'
                ? 'bg-white font-normal text-black'
                : 'bg-transparent'
            }`}
            onClick={() => {
              setCurrentPage('about')
              location.href = '#about'
            }}>
            About
          </li>
          <li
            className={`projects transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center ${
              currentPage === 'projects'
                ? 'bg-white font-normal text-black'
                : 'bg-transparent'
            }`}
            onClick={() => {
              setCurrentPage('projects')
              location.href = '#projects'
            }}>
            Projects
          </li>
          <li
            className={`resume transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center  ${
              currentPage === 'resume'
                ? 'bg-white font-normal text-black'
                : 'bg-transparent'
            }`}
            onClick={() => {
              setCurrentPage('resume')
              location.href = '#resume'
            }}>
            Resume
          </li>
          <li
            className={`contact transition hover:-translate-x-4 duration-500 ease-in-out cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center ${
              currentPage === 'contact'
                ? 'bg-white font-normal text-black'
                : 'bg-transparent'
            }`}
            onClick={() => {
              setCurrentPage('contact')
              location.href = '#contact'
            }}>
            Contact
          </li>
        </ul>
        <div className='abosolute bottom-0 w-1 flex-auto bg-white '></div>
      </nav>
    </>
  )
}

export default Nav
