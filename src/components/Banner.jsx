import React from 'react'
import profileImg from "../assets/images/profile1.png";

function Banner() {
  return (
    <section className="bnr-sec bg-[var(--main-bg-color)] text-[var(--main-text-color)] md:p-0 px-4" id='banner' >
    <div className='max-w-7xl mx-auto'>
    <div className="flex justify-center items-center">
    <div className="mainTitle py-9 ">
      <p className='top-line'>HELLO, I'M SONAM</p>
      <h1 className='title text-[60px]'>Frontend Developer & <span>UI/UX </span>Designer</h1>
      <p className='pt-4'>I deliver user-focused designs and scalable web solutions that enhance user experience, improve performance, and drive meaningful business results effectively.</p>
    <button className='bg-[var(--main-btn-color)] p-[10px_25px] my-6 mr-2 text-[var(--btn-text-color)] rounded-sm border-1
    hover:border-1 hover:bg-transparent hover:text-[var(--main-text-color)] rounded-md hover:bg-transparent transition duration-500'> <a href="#contact">View My Work</a></button>
    <button className='border p-[10px_25px] rounded-md bg-transparent hover:bg-[var(--main-btn-color)] hover:text-black transition duration-500'>Download CV</button>
    </div>
    <div className='md:block w-full mx-auto hidden right-side'>
      <div className="frontend"><p>Frontend Developer</p></div>
      <div className="ui"><p>UI/UX Designer</p></div>
      <div className="graphic"><p>Graphic Designer</p></div>
        <img src={profileImg} alt=""  className='w-full'/>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Banner
