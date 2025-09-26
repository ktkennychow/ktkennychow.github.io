import React from 'react';
import Contact from './Contact';
import profilePic from '../assets/profilePic.webp';
import books from '../data/books';
const Intro = () => {
  return (
    <div id='about' className='flex max-w-3xl flex-col gap-6'>
      <div className='flex flex-1 items-center gap-6'>
        <div className='w-32 h-32 bg-black rounded-full flex items-center justify-center'>
          <img
            src={profilePic}
            alt='Profile Picture of Kenny Chow'
            className='w-28 rounded-full'
            />
        </div>
        <div className='flex flex-1 flex-col'>
          <h1 className='font-montserrat text-2xl font-bold text-white'>Kenny Chow</h1>
          <h2 className='flex-1 text-sm'> Software Development | Product</h2>
          <Contact />
        </div>
      </div>
      <div className=''>
        <p>Climbing, reading and listening to podcasts in my free time.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
        <h3 className='text-md font-semibold'>BookShelf</h3>
        <p className='text-xs'>Only books I have read and will consider reading again.</p>
        </div>
        {books.sort((a, b) => a.title.localeCompare(b.title)).map((book) => (
          <div key={book.title} className='flex gap-1'>
            <div key={book.title} className='flex gap-1'>
              <a
                href={book.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm underline underline-offset-4'>
                {book.title}
              </a>
              <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
              </svg>
            </div>
            <p className='text-xs'>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
