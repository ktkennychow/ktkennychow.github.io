import React from 'react';

const ProjectItem = ({
  title,
  imgUrl,
  stack,
  description,
  github,
  website,
}) => (
  <div className='flex flex-col gap-1 max-w-lg shadow-[0px_0px_20px_5px_rgb(0,0,0,0.0)] bg-zinc-800 shadow-zinc-700 p-5 rounded-xl mt-5'>
    <h2 className='font-semibold '>{title}</h2>
    <h3 className='text-sm max-w-xl'>{description}</h3>
    <div className='flex flex-col gap-2'>
      <img
        src={imgUrl}
        alt='Project Photo'
        className='object-cover object-top aspect-video'
      />
      <div className='flex gap-4'>
        {github.length > 0 ? (
          <div className='flex gap-1'>
            <a
              role='button'
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-4 text-sm md:text-base'>
              GitHub Repo
            </a>
            <svg
              width='8'
              height='8'
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
        ) : (
          <div className='flex gap-1'>
            <a
              aria-disabled
              role='button'
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='underline-offset-4 text-sm md:text-base pointer-events-none text-zinc-800'>
              GitHub Repo
            </a>
            <svg
              width='8'
              height='8'
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
        )}
        {website.length > 0 ? (
          <div className='flex gap-1'>
            <a
              role='button'
              href={website}
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-4 text-sm md:text-base'>
              Live Website
            </a>
            <svg
              width='8'
              height='8'
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
        ) : (
          <div className='flex gap-1'>
            <a
              aria-disabled
              role='button'
              href={website}
              target='_blank'
              rel='noopener noreferrer'
              className='line-through underline-offset-4 text-sm md:text-base pointer-events-none'>
              Coming Soon
            </a>
            <svg
              width='8'
              height='8'
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
        )}
      </div>
      <div>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map((item) => (
            <span
              key={item}
              className='flex px-3 py-1.5 font-normal bg-white text-gray-900 rounded-full items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10'
                height='10'
                viewBox='0 0 20 20
                '
                className='w-4'>
                <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
              </svg>

              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  </div>
);

export default ProjectItem;
