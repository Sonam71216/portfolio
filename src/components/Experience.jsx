import React from 'react'
import ProfileImg from '../assets/images/profile1.png'
import com1 from '../assets/images/com-icon1.png'
import js from '../assets/images/icons/js.png'
import reactjs from '../assets/images/icons/reactjs.png'
import angular from '../assets/images/icons/angular.png'
import bootstrap from '../assets/images/icons/bootstrap.png'
import wordpress from '../assets/images/icons/wordpress.png'
import css from '../assets/images/icons/css.png'
import tailwind from '../assets/images/icons/tailwind.png'
import illustrator from '../assets/images/icons/illustrator.png'
import figma from '../assets/images/icons/figma.png'
import photoshop from '../assets/images/icons/photoshop.png'
import betasoft from '../assets/images/icons/betasoft.png'
import webcloud from '../assets/images/icons/webcloud.png'

function Experience() {
    return (
        <section className="expr-sec py-8 bg-[var(--main-bg-color)] md:py-18 px-4 md:px-0 " id='about'>

            <div className='max-w-7xl mx-auto'>
                <div className="mainTitle">
                    <p className='top-line'>ABOUT US</p>
                    <h1><span>Crafting products </span> with purpose, clarity, and impact</h1>
                    <p>I turn early ideas into structured wireframes and interactive prototypes to test functionality and user experience before full-scale development.</p>
                </div>
                {/*--------profile-details---------*/}
                <div className="exDetails flex flex-col lg:flex-row  gap-4 mb-2 mt-4 mb-4">
                    <div className="text-box 3/5 bg-[var(--main-color)] text-[var(--main-text-color)] p-5 rounded-md hover:border-1">
                    <h3 className='text-[18px] lg:text-[26px]'>I’m Sonam, a creative Frontend Developer & UI/UX Designer based in India.</h3>
                    <p>I’ve worked with teams of all sizes, from agencies to individual projects. No matter the scale, I focus on bringing clarity, structure, and a user-centered approach to every design.</p>
                    <p>Over time, I’ve built skills in research, product thinking, and visual design. I make decisions with empathy and use data when needed. I’ve helped plan projects, supported team members, and worked on design systems. I see every project as a chance to learn, grow, and create meaningful digital experiences.</p>
                 </div>
                 <div className="rightBox bg-[var(--main-btn-color)] rounded-sm 2/5">
                    <img src={ProfileImg} alt="" />
                 </div>
                </div>
                {/*--------profile-details-end--------*/}
                {/*--------companies--------*/}
                <div className="companies-name  grid grid-cols-1 gap-4 md:grid-cols-2">
                    
                    <div className='com-area bg-[var(--main-color)] rounded-md p-4'>
                         <h3 className='text-[var(--main-text-color)] text-2xl text-medium'>Work experiences</h3>
                        <p className='text-[var(--main-text-color)]'>I’ve spent over 5 years designing products for startups, SaaS companies, and enterprise clients. From creating MVPs to building design systems.</p>
                    <div className="details flex gap-4 text-[var(--main-text-color)] bg-[var(--main-bg-color)] p-2 m-2 rounded-md">
                        <img src={com1} alt="" className='size-12'/>
                        <div className="dText relative w-full">
                            <h4 className='text-[18px]'>Hitbullseye</h4>
                            <p className='text-[14px]'>Front-end Developer & UI/UX Designer</p>
                            <div className='years absolute right-0 top-0'><p> Sep 2022 - Present</p></div>
                        </div>
                    </div>
                      <div className="details flex gap-4 text-[var(--main-text-color)] bg-[var(--main-bg-color)] p-2 m-2 rounded-md">
                        <img src={webcloud} alt="" className='size-12'/>
                        <div className="dText relative w-full">
                           <h4 className='text-[18px]'>Enterprice Web cloud</h4>
                            <p className='text-[14px]'>Web & Graphic Designer</p>
                            <div className='years absolute right-0 top-0'><p>Nov 2020 -  Aug 2022</p></div>
                        </div>
                    </div>
                      <div className="details flex gap-4 text-[var(--main-text-color)]  bg-[var(--main-bg-color)] p-2 m-2 rounded-md">
                        <img src={betasoft} alt="" className='size-12'/>
                        <div className="dText relative w-full">
                            <h4 className='text-[18px]'>Betasoft Solutons</h4>
                            <p className='text-[14px]'>Web Designer</p>
                            <div className='years absolute right-0 top-0'><p>Nov 2019 - Oct 2020</p></div>
                        </div>
                    </div>
                    </div>
                   
                     <div className='com-area bg-[var(--main-color)] rounded-md p-4 '>
                     <h3 className='text-[var(--main-text-color)] text-2xl text-medium'>Work Work Experience</h3>
                        <p className='text-[var(--main-text-color)]'>I’ve spent over 6 years designing products for startups, SaaS companies, and enterprise clients. From creating MVPs to building design systems.</p>
                  <div className="details grid grid-cols-3 md:grid-cols-5 gap-3 my-2 text-[var(--main-text-color)] text-[14px] text-center">
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={js} alt="" /><p>Java Script</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={reactjs} alt="" /><p>Reactjs</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={angular} alt="" /><p>Angular</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={bootstrap} alt="" /><p>Bootstrap</p></div>                        
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={css} alt="" /><p>CSS</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={wordpress} alt="" /><p>WordPress</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={tailwind} alt="" /><p>Tailwind</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={photoshop} alt="" /><p>Photoshop</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={illustrator} alt="" /><p>Illustrator</p></div>
                        <div className="tools bg-[var(--main-bg-color)] p-2 rounded-md">  <img src={figma} alt="" /><p>Figma</p></div>
                       
                    </div>
                </div>
                </div>
                {/*--------companies-end-------*/}

            </div>
   
        </section>
    )
}

export default Experience
