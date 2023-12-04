import React from 'react';

const Contact = () => (
  <div id='contact' className='flex flex-col gap-4'>
    <div className='flex flex-wrap gap-2'>
      <div className='flex gap-1'>
        <a
          href='https://drive.google.com/file/d/1VbVYHu7eL7Sj9xt7FfmqpH0yTFdM8ndV/view?usp=share_link'
          target='_blank'
          rel='noopener noreferrer'
          className='text-md underline underline-offset-4'>
          Resume
        </a>
        <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
        </svg>
      </div>
      <div className='flex gap-1'>
        <a
          href='https://linkedin.com/in/ktkennychow'
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-4'>
          Linkedin
        </a>
        <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
        </svg>
      </div>
      <div className='flex gap-1'>
        <a
          href='https://github.com/ktkennychow'
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-4'>
          GitHub
        </a>
        <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
        </svg>
      </div>
      <div className='flex gap-1'>
        <a href='mailto:ktkennychow@gmail.com' className='underline underline-offset-4'>
          ktkennychow@gmail.com
        </a>
        <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
        </svg>
      </div>
    </div>
  </div>
);

export default Contact;
