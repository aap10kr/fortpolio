import React from 'react';
import { Link } from "react-scroll"

function main(props) {
  return (
    <div className='w-full'>
      <section className='flex justify-center pt-36 mb-4'>
          <h1 className='text-center text-xl sm:text-4xl font-bold sm:leading-[50px] text-white'> - 이재신 - <br /> 프론트엔드 포트폴리오</h1>
      </section>
      <section className='flex justify-center mt-8 mb-6'>
        <div className='w-12 h-1 bg-orange-600'></div>
      </section>
      <section className='flex justify-center my-4'>
        <p className='text-center text-sm sm:text-lg tracking-wide text-white'>
          안녕하세요.<br />개발공부를 좋아하는 프론트엔드 개발자 입니다.<br />배움에는 끝이 없다는 생각과 한번 시작하면 끝을 보는 습관이 저의 장점입니다. 
        </p>
      </section>
      <section className='flex justify-center mt-12 mb-16'>
        <div className='flex bg-orange-600 px-5 py-2 rounded-3xl cursor-pointer'>
          <Link smooth to='About' className='text-white text-xs xl:text-base'>더 알아보기</Link>
          <img src='../../img/Arrow-D.png' alt='' className='ml-1 xl:w-5 xl:h-6 w-3 h-4'/>
        </div>
      </section>     
    </div>
  );
}

export default main;