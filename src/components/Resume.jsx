import React from 'react'

const Resume = () => (
  <div
    id='resume'
    className='flex flex-col gap-6 w-full pt-10'>
    <div className='flex gap-1'>
      <a
        href='www.google.com'
        target='_blank'
        rel='noopener noreferrer'
        className='underline underline-offset-4 text-sm'>
        Paper Resume
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
    <div className='flex flex-col gap-2.5'>
      <h2 className='text-2xl font-semibold'>Skills</h2>
      <div className='flex flex-col gap-1'>
        <h3 className='font-normal'>Technologies</h3>
        <div className='flex gap-2.5'>
          <div className='flex flex-col gap-2'>
            <h4>JavaScript</h4>
            <h4>TypeScript</h4>
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>GraphQL</h4>
            <h4>TailwindCSS</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
          </div>
          <div className='flex flex-col gap-2'>
            <h4>Node</h4>
            <h4>Express</h4>
            <h4>Next.js</h4>
            <h4>Firebase</h4>
            <h4>MongoDB</h4>
            <h4>MySQL</h4>
            <h4>PostgreSQL</h4>
          </div>
          <div className='flex flex-col gap-2'>
            <h4>Jest</h4>
            <h4>Cypress</h4>
            <h4>Docker</h4>
            <h4>YAML</h4>
            <h4>Github</h4>
            <h4>Python</h4>
          </div>
        </div>
      </div>
      <div className='flex gap-16 mt-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-normal'>Design</h3>
          <div className='flex flex-col gap-2'>
            <h4>Figma</h4>
            <h4>Illustrator</h4>
            <h4>PhotoShop</h4>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='font-normal'>Language</h3>
          <div className='flex flex-col gap-2'>
            <h4>Chinese</h4>
            <h4>Korean</h4>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-2.5'>
      <h2 className='text-2xl font-semibold'>Experience</h2>
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
