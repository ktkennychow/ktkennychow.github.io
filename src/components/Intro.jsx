import React from 'react';
import Contact from './Contact';
import profilePic from '../assets/profilePic.webp';
const Intro = () => {
  return (
    <div>
      <div id='about' className='flex max-w-3xl flex-col'>
        <h1 className='font-montserrat text-2xl font-bold text-white'>Kenny Chow</h1>
        <p className='flex-1'>Full-Stack Developer</p>
        <div className='mt-10'>
          <img
            src={profilePic}
            alt='Profile Picture of Kenny Chow'
            className='m-5 mx-auto w-72 rounded-full md:float-left md:mx-5 md:w-36'
          />
          <p>
            I like designing and developing products with great user experiences that help increase
            productivity and connect people.
          </p>
          <br />
          <p>
            I believe that the best products are built through the power of well-constructed
            codebases that allow rapid development, and our ability to understand how we, humans,
            behave.
          </p>
          <br />
          <p>Bouldering and listening to podcasts in my free time.</p>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Intro;
