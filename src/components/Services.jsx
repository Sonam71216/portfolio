import React from 'react'
import serImg from '../assets/images/icons/ser-icon1.svg'
import UiUx from '../assets/images/icons/ui-ux.svg'
import frontend from '../assets/images/icons/frontend.svg'
import websiteDesign from '../assets/images/icons/website-design.svg'
import logoDesign from '../assets/images/icons/logo.svg'
import GraphicDesign from '../assets/images/icons/graphic-design.svg'
import optimization from '../assets/images/icons/optimization.svg'
import arrow from '../assets/images/icons/arrow.svg'

function Services() {
    return (
        <div className='service-sec py-8 px-4 md:px-0 md:py-18' id="services">
            <div className="max-w-7xl mx-auto">
                <div className="mainTitle">
                    <p className='top-line'>WHAT I DO</p>
                    <h1><span>Designing solutions </span> that make an impact</h1>
                    <p>I deliver user-focused designs and scalable web solutions that enhance user experience, improve performance, and drive meaningful business results effectively.</p>
                </div>
                {/*-------------service-box-----------*/}
                <div className="services grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                    <div className="ser-box ">
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={UiUx} alt="" />
                        <h3 className='text-3 mt-2'>UI/UX Design</h3>
                        <p>I design intuitive, user-centered interfaces that enhance usability, improve engagement, and create seamless digital experiences across web and mobile platforms.</p>
                    </div>
                     <div className="ser-box ">
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={frontend} alt="" />
                        <h3 className='text-3 mt-2'>Frontend Development</h3>
                        <p>I develop responsive, high-performance websites using modern technologies, ensuring fast loading, accessibility, and smooth user interactions across all devices and browsers.</p>
                    </div>
                </div>
                <div className="services grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 ">
                    <div className="ser-box ">
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={websiteDesign} alt="" />
                        <h3 className='text-3 mt-2'>Website Design </h3>
                        <p>I create visually appealing website designs that reflect brand identity, ensuring clean layouts, modern aesthetics, and a user-friendly browsing experience for users.</p>
                    </div>
                     <div className="ser-box">
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={GraphicDesign} alt="" />
                        <h3 className='text-3 mt-2'>Graphic Design</h3>
                        <p>I craft creative visual designs, including banners, logos, and marketing materials, to communicate brand messages effectively and enhance overall visual appeal.</p>
                    </div>
                    
                </div>
                <div className="services grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4  mb-4">
                    <div className="ser-box "> 
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={serImg} alt="" />
                        <h3 className='text-3 mt-2'>Responsive Design</h3>
                       
                        <p>I design and optimize websites to work flawlessly across all screen sizes, ensuring consistent user experience on desktops, tablets, and mobile devices.</p>
                    </div>
                     <div className="ser-box">
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={optimization} alt="" />
                        <h3 className='text-3 mt-2'>Website Optimization</h3>
                        <p>I improve website performance, speed, and SEO to enhance user experience, increase visibility, and ensure better rankings across search engines and platforms.</p>
                    </div>
                    <div className="ser-box">
                        <div className="icon"><img src={arrow} alt="" /></div>
                        <img src={logoDesign} alt="" />
                        <h3 className='text-3 mt-2'>Logo Design</h3>
                        <p>Designing professional logos that communicate brand values clearly, leaving a lasting impression and strengthening brand presence across digital and print media.</p>
                    </div>
                </div>
                  {/*-------------service-box-end----------*/}
            </div>
            
        </div>
    )
}

export default Services
