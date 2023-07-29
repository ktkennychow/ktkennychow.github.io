import React from 'react'

const Intro = () => (
  <div
    id='about'
    className='flex flex-col gap-4 w-full pt-10'>
    <img
      src='assets/profilePic.png'
      alt='Profile Picture of Kenny Chow'
      className='w-36 bject-cover rounded-full'
    />
    <h1 className='text-4xl text-white font-montserrat -m-1'>Kenny Chow</h1>
    <div className='flex flex-col gap-12'>
      <p className='flex-1'>
        Full-Stack Developer
        <br />& Product Designer
      </p>
      <p className='flex-1'>
        I like to design and develop products with great user experience that
        help increase productivity and connect people.
        <br />
        <br />
        ...And I also love bouldering, running, cooking and trying new food!
      </p>
    </div>
  </div>
)

export default Intro
