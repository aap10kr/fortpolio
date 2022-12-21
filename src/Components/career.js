import React from 'react';
import { Link } from "react-scroll"

function career(props) {
  return (
    <div className='pb-16'>
       <section className='flex justify-center items-center mb-6 pt-4'>
        <Link smooth to='Career' className='flex items-center'>
          <img src='https://cdg-portfolio.com/images/black-link.png' alt='' className='w-7 mr-3 pt-28 pb-10 opacity-70 hover:opacity-40 cursor-pointer' id="Career"/>
        </Link>
          <h1 className='text-5xl font-bold tracking-tighter pt-16'>CAREER</h1>
      </section>
      <section className='bg-white rounded-lg px-5 py-16'>
        <div className='flex w-full'>
          <div className='flex justify-end w-1/3 border-r-2'>
            <div className='w-44 h-44 rounded-full border-2 mr-10 overflow-hidden'>
              <img src='../../img/gayou1.jpg' alt=''/>
            </div>
          </div>
          <div className='w-2/3 ml-10'>
            <div>
            <h1 className='text-3xl font-bold'>(주) 카유커넥트</h1>
            <p className='text-gray-400 mt-2'>2022.03 - 현재</p>
            <p className='text-gray-400 mt-2'>
              베달대행사로 시작해 IT기업으로 전환해 개발팀을 꾸려 운영하는 스타트업 회사 입니다. <br/><br/>
              기본적으로 전체적인 마크업과 프론트엔드 역활을 담당하여 개발을 진행하고 있습니다. <br/>
              현재 제작진행중인 프로그램은 svelte를 이용하고 있으며 추후 새로운 기술을 도입해 새로운 프로젝트를 진행중 <br/>
              주로 javascript를 이용해 기능개발과 백엔드가 만든 api를 받아와 화면에 나타내는 역활을 주로 맡아왔습니다.
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default career;