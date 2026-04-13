import React from 'react'
import Pro1 from '../assets/images/app-desgin.png'
import Pro2 from '../assets/images/app-ui.png'
import Pro3 from '../assets/images/sm-posts.png'
import Pro4 from '../assets/images/web-design.png'
import Pro5 from '../assets/images/logo-design.png'
function Projects() {
  return (
    <section className='py-8 md:py-18  px-4 md:px-0 pro-sec' id='project'>
    <div className='max-w-7xl mx-auto'>
       <div className="mainTitle mb-4">
        <p className='top-line'>SELECTED PROJECTS</p>
                    <h1><span>My work,</span> your next inspiration.</h1>
                    <p>Explore projects that combine creativity, functionality, and user-focused design to deliver meaningful digital experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
                    <div className="pro-box mb-4 relative">
                      <img src={Pro1} className="w-[100%]" alt="" />
                    <p className='absolute'>Mobile Application</p>
                    </div>
                    <div className="pro-box mb-4 relative">
                      <img src={Pro2} className="w-[100%]" alt="" />
                      <p className='absolute'>Mobile Application</p>
                      </div>
                    <div className="pro-box mb-4 relative">
                      <img src={Pro3} className="w-[100%]" alt="" />
                    <p className='absolute'>Social Media Post</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="pro-box relative"><img src={Pro5} alt="" />
                    <p className='absolute'>Logo Design</p>
                    </div>
                    <div className="pro-box relative"><img src={Pro4} alt="" />
                    <p className='absolute'>Web App Design</p>
                    </div>
                   
                </div>
    </div>
    </section>
  ) 
}

export default Projects
