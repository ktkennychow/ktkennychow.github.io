import React, { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Skills from './components/Resume'

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

  const Box = () => {
    return (
      <mesh
        visible
        userData={{ hello: 'world' }}
        position={[1, 2, 3]}
        rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color='hotpink'
          transparent
        />
      </mesh>
    )
  }
  return (
    <>
      <div className='relative z-10 bg-gray-900  text-stone-300 flex h-full font-poppins font-light overscroll-none no-scrollbar'>
        <div className='flex flex-col gap-32 pt-12 pl-5'>
          <Intro />
          <Portfolio />
          <Skills />
          <Contact />
        </div>
        <Nav themeToggleHandler={themeToggleHandler} />
      </div>
    </>
  )
}

export default App
