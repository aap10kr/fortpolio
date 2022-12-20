import React from 'react';
import { Link } from "react-scroll"
import '../App.css';

function header() {

  return (
    <div className="py-4 px-10 max-w-[1140px] m-auto">
      <div className='w-full'>
        <section className='flex justify-between'>
          <Link smooth to='Home'>
            <h1 className='text-2xl font-bold cursor-pointer'>SIN's Portfolio</h1>
          </Link>
          <div className='flex'>
            <Link smooth to="About" className='ml-6 text-gray-800 font-bold cursor-pointer'>About me</Link>
            <Link smooth to="Skill" className='ml-6 text-gray-800 font-bold cursor-pointer'>Skills</Link>
            <Link smooth to="Projects" className='ml-6 text-gray-800 font-bold cursor-pointer'>Projects</Link>
            <Link smooth to="Career" className='ml-6 text-gray-800 font-bold cursor-pointer'>Career</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default header;