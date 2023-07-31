import React from 'react'

const Intro = () => {
  return (
    <div>
      <div
        id='about'
        className='flex flex-col gap-4 pt-5 max-w-3xl'>
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
            I like designing and developing products with great user experiences
            that help increase productivity and connect people.
            <br />
            <br />
            I believe that the best products are built through the power of
            well-constructed codebases that allow rapid development, and our ability to understand how we, humans, behave.
            <br />
            <br />
            ...And I also love bouldering, running, cooking, and trying new
            things!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
