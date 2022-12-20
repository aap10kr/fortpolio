import React from 'react';
import { Link } from "react-scroll"

function about(props) {
  return (
    <div>
      <section className='flex justify-center items-center mb-6 mt-4'>
        <Link smooth to='About' className='flex items-center'>
          <img src='https://cdg-portfolio.com/images/black-link.png' alt='' className='w-7 mr-3 pt-28 pb-10 opacity-70 hover:opacity-40 cursor-pointer' id="About"/>
        </Link>
          <h1 className='text-5xl font-bold tracking-tighter pt-16'>ABOUT ME</h1>
      </section>
      <section class="grid grid-cols-3 gap-4 gap-y-8 mb-20">
        <div className='m-auto'>
          <img src='../../img/user.png' alt='' className='w-10 h-10 m-auto mb-2'/>
          <div >
            <p className='text-center text-lg font-bold'>이름</p>
            <p>이재신</p>
          </div>
        </div>
        <div className='m-auto'>
          <img src='../../img/Calendar.png' alt='' className='w-10 h-10 m-auto mb-2'/>
          <div>
            <p className='text-center text-lg font-bold'>생년월일</p>
            <p>97.08.24</p>
          </div>
        </div>
        <div className='m-auto'>
          <img src='../../img/Location.png' alt='' className='w-10 h-10 m-auto mb-2'/>
          <div>
            <p className='text-center text-lg font-bold'>주소지</p>
            <p>대전광역시 유성구</p>
          </div>
        </div>
        <div className='m-auto'>
          <img src='../../img/Phone.png' alt='' className='w-10 h-10 m-auto mb-2'/>
          <div>
            <p className='text-center text-lg font-bold'>연락처</p>
            <p>010-2949-8558</p>
          </div>
        </div>
        <div className='m-auto'>
          <img src='../../img/email.png' alt='' className='w-10 h-10 m-auto mb-2'/>
          <div>
            <p className='text-center text-lg font-bold'>이메일</p>
            <p>aap10kr@naver.com</p>
          </div>
        </div>
        <div className='m-auto'>
          <img src='../../img/Phone.png' alt='' className='w-10 h-10 m-auto mb-2'/>
          <div>
            <p className='text-center text-lg font-bold'>학력</p>
            <p>목원대학교</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;