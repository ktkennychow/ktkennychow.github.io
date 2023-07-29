import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { gsap } from 'gsap'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const body = React.useRef()
  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('#main', { opacity: 0, x: -1000, duration: 1.5 })
    }, body)
    return () => ctx.revert()
  }, [])

  const themeToggleHandler = (mode) => {
    setTheme(mode)
  }

  useEffect(
    function setCSSTheme() {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    [theme]
  )

  return (
    <div ref={body}>
      <div className='z-10 bg-zinc-900 text-stone-300 flex h-full w-full font-poppins font-light overscroll-none justify-between'>
        <div
          id='main'
          className='flex flex-col gap-32 pt-12 ml-5 md:ml-10'>
          <Intro />
          <Projects />
          <Resume />
          <Contact />
        </div>
        <Nav themeToggleHandler={themeToggleHandler} />
      </div>
    </div>
  )
}

export default App
