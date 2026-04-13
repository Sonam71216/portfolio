import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Banner from './components/Banner'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Experience />
      <Projects />
      <div className='bg-[var(--main-bg-color)] md:py-18 py-8 px-4 md:px-0'>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] ">
          <div className="mainTitle">
            <h1><span className='text-[var(--main-btn-color)] text-center md:text-left'>Let’s Build </span>Something Great Together!</h1>
            <p>Share your ideas, and together we’ll create modern, user-friendly, and impactful digital experiences that deliver real results.</p>
          </div>
          <div className="btn my-4  md:text-right"><button className=' border-1 bg-[var(--main-btn-color)] p-[10px_25px] hover:border-1
           hover:bg-transparent hover:text-[var(--main-text-color)] rounded-md hover:bg-transparent transition duration-500'>
            <a href='#contact'>Send Message</a></button></div>
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
