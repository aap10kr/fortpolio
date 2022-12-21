import React, {useEffect, useState} from 'react';
import Header from './Components/header.js';
import Main from './Components/main.js';
import Skill from './Components/skill.js';
import Projects from './Components/project.js';
import Career from './Components/career.js';
import About from './Components/about.js';
import Footer from './Components/footer.js';

function App() {
  const [showButton, setShowButton] = useState(false);
  console.log(showButton)

  const scrollToTop = () => {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      })

  }
  useEffect(() => {
      const handleShowButton = () => {
          if (window.scrollY > 100) {
              setShowButton(true)
          } else {
              setShowButton(false)
          }
      }

      console.log(window.scrollY)
      window.addEventListener("scroll", handleShowButton)
      return () => {
        window.removeEventListener("scroll", handleShowButton)
      }
  }, [])

  return (
    <div className="w-full">
      <div id='Home'>
        <div className='w-full h-[556px] bg-no-repeat bg-center' style={{backgroundImage: "url(../img/masthead.jpg)"}}>
          <section className="w-full z-40">
            <div className='fixed top-0 left-0 w-screen m-auto bg-white z-50 drop-shadow'>
              <Header />
            </div>
            <Main />
          </section>
        </div>
      </div>
      <div>
        <section className="max-w-[1140px] m-auto">
          <About />
        </section>
      </div>
      <div className='bg-yellow-400'>
        <section className="max-w-[1140px] m-auto">
          <Skill />
        </section>
      </div>
      <div className='bg-neutral-800'>
        <section className="max-w-[1140px] m-auto">
          <Projects />
        </section>
      </div>
      <div className='bg-sky-300'>
        <section className="max-w-[1140px] m-auto">
          <Career />
        </section>
      </div>
      <div className='bg-neutral-800'>
        <Footer />
      </div>
      <div className="flex justify-center items-center fixed bottom-4 right-4 w-12 h-12 z-40 rounded-full border-2 border-gray-500 bg-gray-200">
            <button id="top" onClick={scrollToTop} type="button" className="w-10 h-10 font-bold text-gray-500">Top</button>
        </div>
    </div>
  );
}

export default App;
