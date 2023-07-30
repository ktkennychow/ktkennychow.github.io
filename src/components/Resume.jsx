import React from 'react'
import {
  TbBrandCss3,
  TbBrandCypress,
  TbBrandDocker,
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandGithub,
  TbBrandGraphql,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTypescript,
  TbLanguage,
} from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiExpress,
  SiJest,
  SiNodedotjs,
  SiYaml,
} from 'react-icons/si'

import { TbBrandTailwind } from 'react-icons/tb'

const Resume = () => (
  <div
    id='resume'
    className='flex flex-col gap-12 pt-10'>
    <div className='flex gap-1'>
      <a
        href='www.google.com'
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
    <div className='flex flex-col gap-2.5'>
      <h2 className='text-3xl font-semibold'>Skills</h2>
      <div className='flex flex-col md:flex-row gap-2.5 text-sm md:text-md'>
        <div className='flex flex-col gap-1 font-normal'>
          <h3 className='text-lg'>Technologies</h3>
          <div className='flex gap-2.5 text-zinc-900 '>
            <div className='flex flex-col gap-2'>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandJavascript />
                JavaScript
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandTypescript />
                TypeScript
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandReact />
                React
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandRedux />
                Redux
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandNextjs />
                Next.js
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandGraphql />
                GraphQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandTailwind />
                TailwindCSS
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandHtml5 />
                HTML
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandCss3 />
                CSS
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <SiJest />
                Jest
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandCypress />
                Cypress
              </h4>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <SiNodedotjs />
                Node
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <SiExpress />
                Express
              </h4>

              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandFirebase />
                Firebase
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandMongodb />
                MongoDB
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandMysql />
                MySQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <BiLogoPostgresql />
                PostgreSQL
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandDocker />
                Docker
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <SiYaml />
                YAML
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandGithub />
                Github
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandPython />
                Python
              </h4>
            </div>
          </div>
        </div>
        <div className='flex gap-2.5'>
          <div className='flex flex-col gap-1 font-normal'>
            <h3 className='text-lg'>Design</h3>
            <div className='flex flex-col gap-2 text-zinc-900'>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbBrandFigma />
                Figma
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <SiAdobeillustrator />
                Illustrator
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <SiAdobephotoshop />
                PhotoShop
              </h4>
            </div>
          </div>
          <div className='flex flex-col gap-1 font-normal'>
            <h3 className='text-lg'>Language</h3>
            <div className='flex flex-col gap-2 text-zinc-900'>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
                <TbLanguage />
                Chinese
              </h4>
              <h4 className='bg-white flex items-center gap-1 p-1 w-28'>
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
        <p className='font-normal'>2019-2023 - Front Point</p>
        <p className='font-normal'>Project Manager & Product Owner</p>
        <ul className='pl-6 mt-2.5 flex flex-col gap-2.5 list-disc'>
          <li>
            Manage a cross-functional team of 7 members, including both in-house
            and vendor resources, for {''}
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
            Lead the initiative to consolidate three distinct devices into a
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
