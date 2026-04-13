import React, { useState } from 'react'
import bar from '../assets/images/icons/toggle-bar.svg'
import close from '../assets/images/icons/close.svg'

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[var(--main-bg-color)] border-b border-[#3b3215]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-200">
            Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-[var(--main-text-color)] font-medium">
            <li className="text-[var(--text-y-color)] cursor-pointer"><a href="#banner">HOME</a></li>
            <li className="hover:text-[var(--text-y-color)] cursor-pointer"><a href="#about">ABOUT</a></li>
            <li className="hover:text-[var(--text-y-color)] cursor-pointer"><a href="#services">SERVICES</a></li>
            <li className="hover:text-[var(--text-y-color)] cursor-pointer"><a href="#project">PROJECTS</a></li>
            <li className="hover:text-[var(--text-y-color)] cursor-pointer"><a href="#contact">CONTACT</a></li>
          </ul>

          {/* Toggle Button */}
          <button
            className="text-gray-300 text-2xl z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? (
             <img src={close} alt="menu" className="w-6 h-6" />
            ) : (
              <img src={bar} alt="menu" className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#111] text-gray-300 p-6 transform transition-transform duration-300 z-50
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <button
          className="text-white text-2xl mb-8"
          onClick={() => setOpen(false)}
        >
          <img src={close} alt="close" className="w-6 h-6" />
        </button>

        <div onClick={() => setOpen(false)} className="text-[var(--main-text-color)]">
          <h3 className='text-[20px]'>Contact Details</h3>
          <ul className='text-[14px]'>
            <li>Email: snnm71216@gmail.com</li>
            <li>Phone: 8054306783</li>
            <li>Address: SAS Nagar Mohali</li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Header;