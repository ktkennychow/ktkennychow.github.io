import React from 'react'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='relative bg-zinc-900 z-10 text-stone-300 flex h-[100svh] w-full max-w-full font-poppins font-light overscroll-none justify-between overflow-scroll'>
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
