import React from 'react';
import { Link } from "react-scroll"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function project(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='pb-20 px-4'>
      <section className='flex justify-center items-center py-6'>
        <Link smooth to='Projects' className='flex items-center'>
          <img src='https://cdg-portfolio.com/images/black-link.png' alt='' className='w-7 mr-3 pt-28 pb-10 opacity-70 hover:opacity-40 cursor-pointer' id="Projects"/>
        </Link>
        <h1 className='text-5xl font-bold tracking-tighter pt-16 text-white'>Projects</h1>
      </section>
      <section>
        <div className='bg-white rounded-3xl p-10'>
          <div className='w-full m-auto'>
            <h1 className='text-3xl font-bold text-center py-2'>가유퀵</h1>
            <p className='text-center text-gray-400'>2022.03(사내 프로젝트)</p>
          </div>
          <div className='xl:flex w-full mt-10'>
            <div className='xl:w-1/2'>
              <Slider {...settings}>
                <div>
                  <img src='../../img/82gayou1.png' alt=''/>
                </div>
                <div>
                  <img src='../../img/82gayou2.png' alt=''/>
                </div>
                <div>
                  <img src='../../img/82gayou3.png' alt=''/>
                </div>
              </Slider>
            </div>
            <div className='xl:w-1/2 xl:pt-0 pt-10 xl:text-base xl:leading-6 xl:pl-10'>
              <p className='leading-6'>
                가유 커넥트의 기사모집 랜딩페이지 입니다. <br/>
                HTML, CSS를 사용하여 기본적인 틀을 잡아주고 <br/>
                JAVASCRIPT를 사용하여 정적인 페이지가 동적으로 동작하도록 <br/>
                fade in, fade out, scroll값을 이용해 opacity에 변화를 주어 <br/>
                동적인 웹사이트를 제작 하였습니다. <br/>
                입사후 첫 프로젝트 였으며 시멘틱마크업, 크로스브라우징 <br/> 
                등에 대한 개념을 배울수 있는 프로젝트 였습니다. <br/>
              </p>
              <a href='https://github.com/aap10kr/-gayou-Quick' target="blank">
                <button className='bg-neutral-800 rounded-lg px-4 py-2 mt-12'>
                  <p className='text-white text-xs xl:text-base'>소스코드 보기 GITHUB</p>
                </button>
              </a>
              <div className='mt-10 border-t-2 pt-6'>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>주요기능</h1>
                  <p className='text-sm xl:text-base ml-8'>
                    반응형 랜딩페이지 입력폼에 정보를 담아 이메일로 전송하기<br/>
                    밎 자바스크립트를 이용한 각종 기능
                  </p>
                </div>
                <div className='flex py-4'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>URL</h1>
                    <a href='https://www.82gayou.com' className='ml-8 text-blue-600 text-sm xl:text-base' target="blank">
                      https://www.82gayou.com
                    </a>
                  </div>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>Frontend</h1>
                    <p className='text-sm xl:text-base ml-8'>
                      HTML, CSS, JAVASCRIPT
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-3xl p-10 mt-32'>
          <div className='w-full m-auto'>
            <h1 className='text-3xl font-bold text-center py-2'>1percent-ticket</h1>
            <p className='text-center text-gray-400'>2022.10(사내 프로젝트)</p>
          </div>
          <div className='xl:flex w-full mt-10'>
            <div className='xl:w-1/2'>
              <Slider {...settings}>
                <div>
                  <img src='../../img/ticket1.png' alt=''/>
                </div>
                <div>
                  <img src='../../img/ticket2.png' alt=''/>
                </div>
                <div>
                  <img src='../../img/ticket3.png' alt=''/>
                </div>
              </Slider>
            </div>
            <div className='xl:w-1/2 xl:pt-0 pt-10 xl:text-base xl:leading-6 xl:pl-10'>
              <p className='leading-6'>
                협력업체 에서 자사 홈페이지 제작 요청으로 인한 작업 <br/>
                사내 재택근무 중인 백엔드 개발자와 협업해서 만든 홈페이지 입니다. <br/>
                HTML, CSS를 사용하여 기본적인 틀을 잡아주고 <br/>
                이메일 전송, 매주 로또시간 계산 카카오지도 등의 기능이 들어간 작업입니다. <br/>
                마크업 및 프론트엔드 역활을 담당해서 백엔드 개발자와 소통을 통해 개발<br/>
                동료와의 협력 등의 중요성을 깨닫게 해준 작업입니다. <br/> 
                또 키오스크 설치현황 부분응 직접 작업하며 카카오 지도등의 기능을 <br/>
                사용하며 개발에 대한 경험을 넓히게 되었습니다.<br/>
              </p>
              <a href='https://github.com/aap10kr/1percent' target="blank">
                <button className='bg-neutral-800 rounded-lg px-4 py-2 mt-12'>
                  <p className='text-white'>소스코드 보기 GITHUB</p>
                </button>
              </a>
              <div className='mt-10 border-t-2 pt-6'>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>주요기능</h1>
                  <p className='text-sm xl:text-base ml-8'>
                    입력폼에 정보를 담아 이메일로 전송하기<br/>
                    카카오 지도에 설치 현황 표기 및 시간 알림기능<br/>
                    밎 자바스크립트를 이용한 각종 기능
                  </p>
                </div>
                <div className='flex py-4'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>URL</h1>
                    <a href='https://1percent-ticket.com/' className='ml-8 text-blue-600 text-sm xl:text-base' target="blank">
                    https://1percent-ticket.com
                    </a>
                  </div>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>Frontend</h1>
                    <p className='text-sm xl:text-base ml-8'>
                      HTML, CSS, JAVASCRIPT
                    </p>
                </div>
                <div className='flex pt-3'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>Backend</h1>
                    <p className='text-sm xl:text-base ml-8'>
                      PHP
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-3xl p-10 mt-32'>
          <div className='w-full m-auto'>
            <h1 className='text-3xl font-bold text-center py-2'>대전시 자전거 사고지역</h1>
            <p className='text-center text-gray-400'>2022.11(개인 프로젝트)</p>
          </div>
          <div className='xl:flex w-full mt-10'>
            <div className='xl:w-1/2'>
              <Slider {...settings}>
                <div>
                  <img src='../../img/bike.png' alt=''/>
                </div>
                <div>
                  <img src='../../img/bike.png' alt=''/>
                </div>
                <div>
                  <img src='../../img/bike.png' alt=''/>
                </div>
              </Slider>
            </div>
            <div className='xl:w-1/2 xl:pt-0 pt-10 xl:text-base xl:leading-6 xl:pl-10'>
              <p className='leading-6'>
                클라이언트 서버 데이터베이스 간의 정보 통신에대한 공부를 하며 <br/>
                하나의 큰 프로젝트를 구상하고 있지만 그전에 작은 프로젝트로 <br/>
                공공데이터 api를 이용해 프로그램을 하나 만들면 재미 있을거 같다는 생각에 <br/>
                만들에 되었습니다 공공api를 받아와 받아온 정보를 화면에 뿌려주는 <br/>
                작업을 통해 지도에 위치를 마커로 생성하고 테이블에 받아온 정보를 뿌려주고 <br/>
                사용자가 원하는 년도를 선택하면 해당 년도 데이터를 받아오는 작업을 하여 <br/> 
                현재 ui작업만 남겨둔 상태 입니다 <br/>
              </p>
              <a href='https://github.com/aap10kr/Bike/tree/master' target="blank">
                <button className='bg-neutral-800 rounded-lg px-4 py-2 mt-12'>
                  <p className='text-white'>소스코드 보기 GITHUB</p>
                </button>
              </a>
              <div className='mt-10 border-t-2 pt-6'>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>주요기능</h1>
                  <p className='text-sm xl:text-base ml-8'>
                    api 정보 받아오기 카카오지도에 마커생성<br/>
                    밎 테이블에 정보 입력 선택년도 정보 불러오기
                  </p>
                </div>
                <div className='flex py-4'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>URL</h1>
                    <a href='/' className='ml-8 text-blue-600' target="blank">
                      https://www.tasu.com<span className='ml-2 text-gray-600'>(예정)</span>
                    </a>
                  </div>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>Frontend</h1>
                    <p className='text-sm xl:text-base ml-8'>
                      HTML, CSS, JAVASCRIPT, REACT, TAILWIND
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-3xl p-10 mt-32'>
          <div className='w-full m-auto'>
            <h1 className='text-3xl font-bold text-center py-2'>가유 프로그램</h1>
            <p className='text-center text-gray-400'>2021.03 ~ ing(사내 프로젝트)</p>
          </div>
          <div className='xl:flex w-full mt-10'>
            <div className='xl:w-1/2'>
              <Slider {...settings}>
                <div>
                  <img src='../../img/gayou1.jpg' alt=''/>
                </div>
                <div>
                  <img src='../../img/gayou2.jpg' alt=''/>
                </div>
                <div>
                  <img src='../../img/gayou3.png' alt=''/>
                </div>
              </Slider>
            </div>
            <div className='xl:w-1/2 xl:pt-0 pt-10 xl:text-base xl:leading-6 xl:pl-10'>
              <p className='leading-6'>
                회사에서 제작중인 대형프로젝트이며 입사후 개발팀에 들어가 <br/>
                1년에 가까운 기간동안 작업중이며 현재 80% 제작이 진행중입니다. <br/>
                프론트 엔드 및 마크업 작업을 담당해 작업을 진행했으며 <br/>
                기획자와 사수 개발자를 통해 작업을 진행해 왔습니다 <br/>
                자세한 사항은 보안상의 이유로 맏씀드릴 수 없는점 죄송합니다. <br/>
                하지만 이런 큰 프로젝트를 도 맡아 진행하며 개발에 대한 <br/>  
                이해와 공부가 많이 되었습니다. 
                
              </p>
              <a href='/' target="blank">
                <button className='bg-neutral-800 rounded-lg px-4 py-2 mt-12' onClick={() => alert('해당 코드는 회사 보안사항이므로 보여 드릴수 없습니다')}>
                  <p className='text-white'>소스코드 보기 GITHUB</p>
                </button>
              </a>
              <div className='mt-10 border-t-2 pt-6'>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>주요기능</h1>
                  <p className='ml-6 xl:ml-8'>
                    딜리온에 있는 기능을 밴치마킹해 제작<br/>
                    원래있던 기능 뿐만 아니라 가유에 필요한 신기능 개발
                  </p>
                </div>
                <div className='flex py-4'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>URL</h1>
                  <div className='grid grid-cols-1'>
                    <a href='https://shop.gayou.kr' className='ml-8 text-blue-600 text-sm xl:text-base' target="blank">
                      https://shop.gayou.kr
                    </a>
                    <a href='https://admin.gayou.kr' className='ml-8 text-blue-600 text-sm xl:text-base' target="blank">
                      https://admin.gayou.kr
                    </a>
                  </div>
                </div>
                <div className='flex'>
                  <h1 className='w-20 text-sm xl:text-lg font-bold'>Frontend</h1>
                    <p className='ml-8 text-sm xl:text-base'>
                      HTML, CSS, JAVASCRIPT, SVELTE, TAILWIND
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default project;