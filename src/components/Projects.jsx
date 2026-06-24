import React from 'react'
import Pro1 from '../assets/images/website2.jpg'
import Pro2 from '../assets/images/e-commerce.png'
import Pro3 from '../assets/images/dashboard.jpg'
import Pro4 from '../assets/images/splash-srceen.jpg'
import Pro5 from '../assets/images/web-design1.png'
function Projects() {
  return (
    <section className='py-8 md:py-18  md:px-6 lg:px-4 px-6 pro-sec' id='project'>
    <div className='max-w-7xl mx-auto'>
       <div className="mainTitle mb-4">
        <p className='top-line'>SELECTED PROJECTS</p>
                    <h1><span>My work,</span> your next inspiration.</h1>
                    <p>Explore projects that combine creativity, functionality, and user-focused design to deliver meaningful digital experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4">
                  <a href="https://www.figma.com/proto/QSKv3u4sT2s1zXxstmlhsf/Untitled?node-id=422-443&t=0C3Y6E1ufiIJowA1-0&scaling=min-zoom&content-scaling=fixed&page-id=403%3A247" target="_blank">
                    <div className="pro-box mb-4 relative">
                      <img src={Pro1} className="w-[100%] rounded-4" alt="" />
                    <p className='absolute'>IT Services Website Design</p>
                      <a/>
                    </div>
                    <div className="pro-box mb-4 relative">
                      <img src={Pro2} className="w-[100%] rounded-4" alt="" />
                      <p className='absolute'>E-Commerce Website</p>
                      </div>
                    <div className="pro-box mb-4 relative">
                      <img src={Pro3} className="w-[100%] rounded-4" alt="" />
                    <p className='absolute'>Admin Panel</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="pro-box relative"><img src={Pro5} className="w-[100%] rounded-4" alt="" />
                    <p className='absolute'>Real Estate Website</p>
                    </div>
                    <div className="pro-box relative"><img src={Pro4} className="w-[100%] rounded-4" alt="" />
                    <p className='absolute'>Mobile Application</p>
                    </div>
                   
                </div>
    </div>
    </section>
  ) 
}

export default Projects
