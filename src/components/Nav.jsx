import React from 'react'
import { gsap } from 'gsap'

const Nav = () => {
  const [currentPage, setCurrentPage] = React.useState('about')
  const app = React.useRef()
  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('ul', { opacity: 0, x: 100, duration: 1 })
      gsap.from('.top-line', { opacity: 0, y: -1000, duration: 1 })
      gsap.from('.bottom-line', { opacity: 0, y: 1000, duration: 1 })
    }, app)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={app}>
      <nav className='sticky flex flex-col top-0 text-white h-screen items-center'>
        <div className='top-line w-1 flex-1 bg-white mb-3'></div>
        <ul>
          <li
            onMouseEnter={() => gsap.to('.about', { x: -20, duration: 1 })}
            onMouseLeave={() => gsap.to('.about', { x: 0, duration: 1 })}
            className={`about cursor-pointer text-xs py-2.5 px-1 text-center ${
              currentPage === 'about' ? 'bg-white font-normal text-black' : ''
            }`}>
            <a
              href='#about'
              onClick={() => setCurrentPage('about')}>
              About
            </a>
          </li>
          <li
            onMouseEnter={() => gsap.to('.projects', { x: -20, duration: 1 })}
            onMouseLeave={() => gsap.to('.projects', { x: 0, duration: 1 })}
            className={`projects cursor-pointer text-xs py-2.5 px-1 text-center ${
              currentPage === 'projects'
                ? 'bg-white font-normal text-black'
                : ''
            }`}>
            <a
              href='#projects'
              onClick={() => setCurrentPage('projects')}>
              Projects
            </a>
          </li>
          <li
            onMouseEnter={() => gsap.to('.resume', { x: -20, duration: 1 })}
            onMouseLeave={() => gsap.to('.resume', { x: 0, duration: 1 })}
            className={`resume cursor-pointer text-xs py-2.5 px-1 text-center  ${
              currentPage === 'resume' ? 'bg-white font-normal text-black' : ''
            }`}>
            <a
              href='#resume'
              onClick={() => setCurrentPage('resume')}>
              Resume
            </a>
          </li>
          <li
            onMouseEnter={() => gsap.to('.contact', { x: -20, duration: 1 })}
            onMouseLeave={() => gsap.to('.contact', { x: 0, duration: 1 })}
            className={`contact cursor-pointer text-xs py-2.5 px-1 text-center ${
              currentPage === 'contact' ? 'bg-white font-normal text-black' : ''
            }`}>
            <a
              href='#contact'
              onClick={() => setCurrentPage('contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div className='bottom-line w-1 flex-1 bg-white mt-3'></div>
      </nav>
    </div>
  )
}

export default Nav