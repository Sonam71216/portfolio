import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'

// ✅ FIXED PATHS
import serImg from './assets/images/icons/ser-icon1.svg'
import UiUx from './assets/images/icons/ui-ux.svg'
import frontend from './assets/images/icons/frontend.svg'
import websiteDesign from './assets/images/icons/website-design.svg'
import logoDesign from './assets/images/icons/logo.svg'
import GraphicDesign from './assets/images/icons/graphic-design.svg'
import optimization from './assets/images/icons/optimization.svg'
import arrow from './assets/images/icons/arrow.svg'

function App() {
  const [count, setCount] = useState(0)

  const servicesData = [
    {
      title: "UI/UX Design",
      desc: "I design intuitive, user-centered interfaces that enhance usability, improve engagement, and create seamless digital experiences across web and mobile platforms.",
      icon: UiUx,
      arrow: arrow
    },
    {
      title: "Frontend Development",
      desc: "I develop responsive, high-performance websites using modern technologies, ensuring fast loading, accessibility, and smooth user interactions across all devices and browsers.",
      icon: frontend,
      arrow: arrow
    },
    {
      title: "Website Design",
      desc: "Website Design </h3> <p>I create visually appealing website designs that reflect brand identity, ensuring clean layouts, modern aesthetics, and a user-friendly browsing experience for users.",
      icon: websiteDesign,
      arrow: arrow
    },
    {
      title: "Graphic Design",
      desc: "I craft creative visual designs, including banners, logos, and marketing materials, to communicate brand messages effectively and enhance overall visual appeal.",
      icon: GraphicDesign,
      arrow: arrow
    },
    {
      title: "Responsive Design",
      desc: "I design and optimize websites to work flawlessly across all screen sizes, ensuring consistent user experience on desktops, tablets, and mobile devices.",
      icon: serImg,
      arrow: arrow
    },
    {
      title: "Website Optimization",
      desc: "I improve website performance, speed, and SEO to enhance user experience, increase visibility, and ensure better rankings across search engines and platforms.",
      icon: optimization,
      arrow: arrow
    },
    {
      title: "Logo Design",
      desc: "Designing professional logos that communicate brand values clearly, leaving a lasting impression and strengthening brand presence across digital and print media.",
      icon: logoDesign,
      arrow: arrow
    }
  ]

  return (
    <>
      <Header />
      <Banner />

      {/* services section */}
      <Services
        subtitle="WHAT I DO"
        title={{ highlight: "Designing solutions", normal: "that make an impact" }}
        description="I deliver user-focused designs and scalable web solutions that enhance user experience, improve performance, and drive meaningful business results effectively."
        servicesData={servicesData}
      />
      {/* services section */}

      <Experience />
      <Projects />

      <div className='bg-[var(--main-bg-color)] md:py-18 py-8 px-4 md:px-0'>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] ">
            <div className="mainTitle">
              <h1>
                <span className='text-[var(--main-btn-color)] text-center md:text-left'>
                  Let’s Build
                </span> Something Great Together!
              </h1>
              <p>
                Share your ideas, and together we’ll create modern, user-friendly,
                and impactful digital experiences that deliver real results.
              </p>
            </div>

            <div className="btn my-4 md:text-right">
              <button className='border-1 bg-[var(--main-btn-color)] p-[10px_25px] 
              hover:border-1 hover:bg-transparent hover:text-[var(--main-text-color)] 
              rounded-md transition duration-500'>
                <a href='#contact'>Send Message</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Contact />

      <div className='footer-sec'>
        <div className="max-w-7xl mx-auto">
          <div className='py-5 text-[var(--main-text-color)] text-center copyright'>
            <p>Copy@ All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App