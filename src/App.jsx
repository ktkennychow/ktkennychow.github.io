import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {
  const [theme, setTheme] = useState('dark')

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
    <>
      <div className='relative z-10 bg-gray-900  text-stone-300 flex h-full font-poppins font-light overscroll-none no-scrollbar'>
        <div className='flex flex-col gap-32 pt-12 pl-5'>
          <Intro />
          <Projects />
          <Resume />
          <Contact />
        </div>
        <Nav themeToggleHandler={themeToggleHandler} />
      </div>
    </>
  )
}

export default App
