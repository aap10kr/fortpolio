import React from 'react';

function footer() {
  return (
    <div className='p-10'>
      <section>
        <div className='flex justify-center mb-4'>
          <a href='https://www.instagram.com/sin_eeeeeeeee/'> 
            <img src='../../img/Instagram.png' alt=''/>
          </a>
          <a href='https://github.com/aap10kr'>
            <img src='../../img/Github.png' alt=''/>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100004372328818'>
            <img src='../../img/Facebook.png' alt=''/>
          </a>
        </div>
      </section>
      <section className='flex justify-center w-full'>
        <span className='text-white text-xl'>© 2022. Lee Jae Sin. All rights reserved.</span>
      </section>
    </div>
  );
}

export default footer;