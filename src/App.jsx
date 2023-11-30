import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='relative flex h-[100svh] w-full max-w-full justify-between overflow-x-hidden overscroll-none bg-zinc-900 font-poppins font-light leading-relaxed text-white text-opacity-80 '>
      <div id='main' className='mx-auto flex w-full flex-col gap-16 p-10 md:max-w-3xl'>
        <Intro />
        <Projects />
      </div>
    </div>
  );
};

export default App;
