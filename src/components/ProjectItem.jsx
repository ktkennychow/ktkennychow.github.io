import React from 'react'

const ProjectItem = ({
title,
  imgUrl,
  stack,
  description,
  github,
  website,
}) => (
  <div className='flex flex-col gap-1'>
    <h3 className='font-semibold '>{title}</h3>
    <h3 className='text-sm'>{description}</h3>
    <div className='flex flex-col gap-2'>
      <img
        src={imgUrl}
        alt='portfolio'
        className='w-full h-36 md:h-48 object-cover cursor-pointer'
      />
      <div className='flex gap-4'>
        <div className='flex gap-1'>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 text-sm'>
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
        <div className='flex gap-1'>
          <a
            href={website}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 text-sm'>
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
      </div>
      <div>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs'>
          {stack.map((item) => (
            <span
              key={item}
              className='inline-block px-2 py-1 font-semibold bg-white text-gray-900'>
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  </div>
)

export default ProjectItem