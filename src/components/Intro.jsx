import React from 'react';

const Intro = () => {
  return (
    <div>
      <div
        id='about'
        className='flex flex-col gap-4 pt-16 max-w-3xl'>
        <div
          alt='Profile Picture of Kenny Chow'
          className='bg-[url("../../public/assets/profilePic.webp")] w-36 h-36 md:h-72 md:w-72 rounded-full bg-cover'
        />
        <h1 className='text-4xl md:text-6xl text-white font-montserrat font-normal -m-1'>
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
            well-constructed codebases that allow rapid development, and our
            ability to understand how we, humans, behave.
            <br />
            <br />
            ...And I also love bouldering, running, cooking, and trying new
            things!
          </p>
        </div>
      </div>
      <div className='flex gap-1 mt-10'>
        <a
          href='https://drive.google.com/file/d/1nD5nvxbNYADVaDUyVPl5At-R0wvToEWu/view?usp=drive_link'
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-4 text-3xl'>
          Paper Resume
        </a>
        <svg
          width='12'
          height='12'
          viewBox='0 0 8 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            id='Vector 6'
            d='M1 1H7M7 1V7M7 1L1 7'
            stroke='white'
          />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
