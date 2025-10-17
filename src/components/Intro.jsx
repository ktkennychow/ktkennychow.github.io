import React from 'react';
import Contact from './Contact';
import profilePic from '../assets/profilePic.webp';
import books from '../data/books';
const Intro = () => {
  return (
    <div id='about' className='flex max-w-3xl flex-col gap-6'>
      <div className='flex flex-1 items-center gap-4'>
        <div className='min-w-32 min-h-32 w-32 h-32 bg-black rounded-lg flex items-center justify-center'>
          <img
            src={profilePic}
            alt='Profile Picture of Kenny Chow'
            className='w-28 rounded-full'
            />
        </div>
        <div className='flex flex-1 flex-col gap-1'>
          <h1 className='font-montserrat text-2xl font-bold text-white'>Kenny Chow</h1>
          <h2 className='flex-1 text-sm'> Software Development | Product</h2>
          <Contact />
          <p className='text-sm'>Climbing, reading and listening to podcasts in my free time.</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <h3 className='text-lg font-semibold'>BookShelf</h3>
          <p className='text-xs'>Only books I have read and will consider reading again.</p>
        </div>
        {books.sort((a, b) => a.title.localeCompare(b.title)).map((book) => (
          <div key={book.title} className='flex flex-col gap-0'>
            <p className='text-md'>{book.title}</p>
            <p className='text-xs'>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
