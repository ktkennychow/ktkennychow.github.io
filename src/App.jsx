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
    <div>
      <div className='z-10 bg-zinc-900 text-stone-300 flex h-full w-screen font-poppins font-light overscroll-none no-scrollbar justify-between'>
        <div className='flex flex-col gap-32 pt-12 ml-5 md:ml-10'>
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
