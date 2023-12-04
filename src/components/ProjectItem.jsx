import React from 'react';

const ProjectItem = ({ title, imgUrl, stack, description, github, website }) => (
  <div className='mt-5 flex w-full flex-col gap-1 rounded-xl bg-zinc-800 p-5'>
    <div className='flex flex-1 flex-col gap-2'>
      <div>
        <h2 className='font-semibold '>{title}</h2>
        <h3 className='text-sm'>{description}</h3>
      </div>
      <div>
        <p className='flex flex-row flex-wrap items-center justify-start gap-2 text-xs'>
          {stack.map((item) => (
            <span
              key={item}
              className='flex items-center gap-2 rounded-full bg-white px-2 py-1 font-normal text-gray-900'>
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
      <div className='flex gap-4'>
        <div className='flex gap-1'>
          <a
            role='button'
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm underline underline-offset-4 '>
            GitHub Repo
          </a>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
          </svg>
        </div>
        <div className='flex gap-1'>
          <a
            role='button'
            href={website}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm underline underline-offset-4'>
            Live Website
          </a>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path id='Vector 6' d='M1 1H7M7 1V7M7 1L1 7' stroke='white' />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectItem;
