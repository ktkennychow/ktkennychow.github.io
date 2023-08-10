import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { gsap } from 'gsap'

const App = () => {
  const ref = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('#main', { opacity: 0, x: -1000, duration: 1 })
    }, ref)
    return () => ctx.revert()
  }, [])



  return (
    <div ref={ref}>
      <div className='z-10 bg-zinc-900 text-stone-300 flex h-full max-w-full font-poppins font-light overscroll-none justify-between'>
        <div
          id='main'
          className='flex flex-col gap-32 pt-12 ml-5 md:ml-10'
          onTouchStart={() => gsap.to('li', { x: 0, duration: 0.5 })}>
          <Intro />
          <Projects />
          <Resume />
          <Contact />
        </div>
        <Nav />
      </div>
    </div>
  )
}

export default App
