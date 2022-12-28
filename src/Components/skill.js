import React from 'react';
import { Link } from "react-scroll"

function skill(props) {
  return (
    <div>
      <section className='flex justify-center items-center my-6 pt-10'>
        <Link smooth to='Skill' className='flex items-center'>
          <img src='https://cdg-portfolio.com/images/black-link.png' alt='' className='w-7 mr-3 pt-28 pb-10 opacity-70 hover:opacity-40 cursor-pointer' id="Skill"/>
        </Link>
        <h1 className='text-5xl font-bold tracking-tighter pt-16'>Skills</h1>
      </section>
      <section className='grid xl:grid-cols-3 gap-2 pb-20'>
        <div className='m-auto p-4 rounded-xl drop-shadow-lg mb-5 xl:mb-0 bg-white'>
          <h1 className='text-2xl pb-2 border-b-2 font-bold text-orange-400'>Frontend</h1>
          <img src='../../img/frontend.png' alt=''/>
        </div>
        <div className='m-auto my-0'>
          <div className=''>
            <div className='m-auto p-4 rounded-xl drop-shadow-lg bg-white mb-7 xl:mb-28'>
              <h1 className='text-2xl pb-2 border-b-2 font-bold text-orange-400'>Deployment</h1>
              <img src='../../img/deployment.png' alt=''/>
            </div>
            <div className='m-auto p-4 rounded-xl drop-shadow-lg bg-white mb-5 xl:mb-0'>
              <h1 className='text-2xl pb-2 border-b-2 font-bold text-orange-400'>Version Control</h1>
              <img src='../../img/versioncontrol.png' alt=''/>
            </div>
          </div>
        </div>
        <div className='m-auto my-0'>
          <div className=''>
            <div className='m-auto p-4 rounded-xl drop-shadow-lg bg-white mb-7 xl:mb-28'>
              <h1 className='text-2xl pb-2 border-b-2 font-bold text-orange-400'>Communication</h1>
              <img src='../../img/communication.png' alt=''/>
            </div>
            <div className='m-auto p-4 rounded-xl drop-shadow-lg bg-white'>
              <h1 className='text-2xl pb-2 border-b-2 font-bold text-orange-400'>Learn</h1>
              <img src='../../img/lean.png' alt=''/>
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
}

export default skill;