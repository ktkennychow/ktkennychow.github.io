import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='flex min-h-screen w-full justify-between overscroll-none bg-zinc-900 p-6 font-poppins font-light leading-relaxed text-white text-opacity-80'>
      <div id='main' className='mx-auto flex flex-col gap-16 w-full md:max-w-3xl'>
        <Intro />
        <Projects />
      </div>
    </div>
  );
};

export default App;
