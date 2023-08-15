import React from 'react'
import {
  TbBrandCypress,
  TbBrandGraphql,
  TbDatabase,
  TbLanguage,
  TbBrandReact,
  TbBrandRedux,
} from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
import {
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiExpress,
  SiJest,
  SiNodedotjs,
  SiStyledcomponents,
  SiYaml,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiDocker,
  SiGithub,
  SiPython,
  SiTailwindcss,
} from 'react-icons/si'
import { BiLogoFigma } from 'react-icons/bi'
import { PiFileSqlFill } from 'react-icons/pi'

const Resume = () => (
  <div
    id='resume'
    className='flex flex-col gap-12 pt-10'>
    <div className='flex flex-col gap-2.5'>
      <h2 className='text-3xl font-semibold'>Skills</h2>
      <div className='flex flex-col md:flex-row gap-2.5 text-sm'>
        <div className='flex flex-col gap-1.5 font-normal'>
          <h3 className='text-lg'>Technologies</h3>
          <div className='flex gap-2.5 text-zinc-900 '>
            <div className='flex flex-col gap-2'>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiJavascript />
                JavaScript
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiTypescript />
                TypeScript
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbBrandReact />
                React
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbBrandRedux />
                Redux
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiNextdotjs />
                Next.js
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbBrandGraphql />
                GraphQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiTailwindcss />
                TailwindCSS
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiStyledcomponents />
                Styled-
                <br />
                Components
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiHtml5 />
                HTML
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiCss3 />
                CSS
              </h4>

              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbBrandCypress />
                Cypress
              </h4>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiNodedotjs />
                Node
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiExpress />
                Express
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <PiFileSqlFill />
                SQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <BiLogoPostgresql />
                PostgreSQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbDatabase />
                NoSQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiMongodb />
                MongoDB
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiFirebase />
                Firebase
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiDocker />
                Docker
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiYaml />
                YAML
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiGithub />
                Github
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiPython />
                Python
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiJest />
                Jest
              </h4>
            </div>
          </div>
        </div>
        <div className='flex gap-2.5'>
          <div className='flex flex-col gap-1 font-normal'>
            <h3 className='text-lg'>Design</h3>
            <div className='flex flex-col gap-2 text-zinc-900'>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <BiLogoFigma />
                Figma
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiAdobeillustrator />
                Illustrator
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <SiAdobephotoshop />
                PhotoShop
              </h4>
            </div>
          </div>
          <div className='flex flex-col gap-1 font-normal'>
            <h3 className='text-lg'>Language</h3>
            <div className='flex flex-col gap-2 text-zinc-900'>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbLanguage />
                Chinese
              </h4>
              <h4 className='bg-white flex items-center gap-1 py-1 px-2 w-32'>
                <TbLanguage />
                Korean
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-2.5 max-w-2xl'>
      <h2 className='text-3xl font-semibold'>Experience</h2>
      <div className='text-sm'>
        <p className='font-normal'>2019-2023</p>
        <p className='font-normal'>Project Manager & Product Owner</p>
        <p className='font-normal'>Front Point Product Services Limited</p>
        <ul className='pl-6 mt-2.5 flex flex-col gap-2.5 list-disc'>
          <li>
            Manage a cross-functional team of 5 members and vendors for {''}
            <a
              href='https://volantechnology.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-4 mr-1'>
              Volan Technology
            </a>
            <svg
              className='inline-block -translate-y-1'
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
            , a B2B IoT startup, specializing in Real-time positioning and
            monitoring solutions.
          </li>
          <li>
            Lead the initiative to consolidate three individual solutions into a
            single solution, resulting in a 40% reduction in tooling and quality
            assurance costs.
          </li>
          <li>
            Align goals & incentives across multiple teams, from Proof of
            Concept to MVP, securing more than{' '}
            <a
              href='http://crunchbase.com/organization/volan-technology/company_financials'
              target='_blank'
              rel='noopener noreferrer'
              className='underline underline-offset-4 mr-1'>
              securing more than 4 million USD in VC funding
            </a>
            <svg
              className='inline-block -translate-y-1'
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
            </svg>{' '}
            within a span of 3 years.
          </li>
          <li>
            Create and maintain Product Backlogs, Specs Documentation, and
            Logistics. Develop user-friendly and intuitive UI/UX solutions for
            both mobile applications & wearable devices.
          </li>
          <li>
            Develop user-friendly and intuitive UI/UX solutions for both mobile
            applications & wearable devices.
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Resume
