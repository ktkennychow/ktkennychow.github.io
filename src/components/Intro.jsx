import React from 'react'

const Intro = () => (
  <div
    id='about'
    className='flex flex-col gap-4 pt-10'>
    <img
      src='assets/profilePic.png'
      alt='Profile Picture of Kenny Chow'
      className='w-36 md:w-72 bject-cover rounded-full'
    />
    <h1 className='text-4xl md:text-6xl text-white font-montserrat -m-1'>
      Kenny Chow
    </h1>
    <div className='flex flex-col gap-12'>
      <p className='flex-1'>
        Full-Stack Developer
        <br />& Product Designer
      </p>
      <p className='flex-1'>
        I like to design and develop products with great user experience that
        help increase productivity and connect people.
        <br />
        I believe the best products are built through the power of well
        constract codebase that allow rapid developement and active observations
        of how we, human, behave.
        <br />
        <br />
        ...And I also love bouldering, running, cooking, and trying new things!
      </p>
    </div>
  </div>
)

export default Intro
