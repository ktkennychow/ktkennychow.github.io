import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='z-10 bg-zinc-900 text-stone-300 flex h-full max-w-full font-poppins font-light overscroll-none justify-between'>
      <div
        id='main'
        className='flex flex-col gap-32 ml-5 md:ml-10'>
        <Intro />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Nav />
    </div>
  )
}

export default App
