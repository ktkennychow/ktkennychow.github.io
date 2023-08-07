import React from 'react'
import { gsap } from 'gsap'

const Nav = () => {
  const [currentPage, setCurrentPage] = React.useState('about')
  const app = React.useRef()
  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('ul', { opacity: 0, x: 100, duration: 0.75 })
      gsap.from('.top-line', { opacity: 0, y: -1000, duration: 0.75 })
      gsap.from('.bottom-line', { opacity: 0, y: 1000, duration: 0.75 })
    }, app)
    return () => ctx.revert()
  }, [])

  const animationHandler = () => {
    e
  }

  return (
    <div ref={app}>
      <nav className='sticky flex flex-col top-0 text-white h-screen items-center z-10'>
        <div className='top-line w-1 flex-1 mb-4 bg-white'></div>
        <ul>
          <li
            onMouseEnter={() => gsap.to('.about', { x: -20, duration: 0.5 })}
            onMouseLeave={() => gsap.to('.about', { x: 0, duration: 0.5 })}
            className={`about cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center ${
              currentPage === 'about'
                ? 'bg-white font-normal text-black'
                : 'bg-zinc-900'
            }`}>
            <a
              href='#about'
              onClick={() => setCurrentPage('about')}>
              About
            </a>
          </li>
          <li
            onMouseEnter={() => gsap.to('.projects', { x: -20, duration: 0.5 })}
            onMouseLeave={() => gsap.to('.projects', { x: 0, duration: 0.5 })}
            className={`projects cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center ${
              currentPage === 'projects'
                ? 'bg-white font-normal text-black'
                : 'bg-zinc-900'
            }`}>
            <a
              href='#projects'
              onClick={() => setCurrentPage('projects')}>
              Projects
            </a>
          </li>
          <li
            onMouseEnter={() => gsap.to('.resume', { x: -20, duration: 0.5 })}
            onMouseLeave={() => gsap.to('.resume', { x: 0, duration: 0.5 })}
            className={`resume cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center  ${
              currentPage === 'resume'
                ? 'bg-white font-normal text-black'
                : 'bg-zinc-900'
            }`}>
            <a
              href='#resume'
              onClick={() => setCurrentPage('resume')}>
              Resume
            </a>
          </li>
          <li
            onMouseEnter={() => gsap.to('.contact', { x: -20, duration: 0.5 })}
            onMouseLeave={() => gsap.to('.contact', { x: 0, duration: 0.5 })}
            className={`contact cursor-pointer text-xs py-2.5 px-2 md:text-base md:px-5 text-center ${
              currentPage === 'contact'
                ? 'bg-white font-normal text-black'
                : 'bg-zinc-900'
            }`}>
            <a
              href='#contact'
              onClick={() => setCurrentPage('contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div className='bottom-line w-1 flex-1 bg-white mt-4'></div>
      </nav>
    </div>
  )
}

export default Nav
