import React, { useState } from 'react'
import mapImg from '../assets/images/map.png'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    designStage: '',
    deadline: '',
    message: '',
    privacy: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
    alert('Form submitted successfully 🚀')

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      designStage: '',
      deadline: '',
      message: '',
      privacy: false
    })
  }

  return (
    <section className='md:py-18 py-8 md:px-6 lg:px-4 px-6' id='contact'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          
          <div>
            <div className='mainTitle'>
              <p className='top-line text-[14px] md:text-[13px]'>
                Let's Talk
              </p>

              <h1>
                <span>Let’s Discuss</span> Your Project
              </h1>

              <p>
                Tell me about your project, and I’ll help turn your ideas into
                effective and well-designed digital solutions.
              </p>
            </div>

            <div className='mapImg mt-4'>
              <img src={mapImg} alt='Map' />
            </div>
          </div>

          <div className='contactName'>
            <form className='contact-form' onSubmit={handleSubmit}>
              
              {/* Name & Email */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--main-text-color)]'>
                <div className='py-2'>
                  <label>Name *</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                    placeholder='Name'
                  />
                </div>

                <div className='py-2'>
                  <label>Email *</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                    placeholder='Email'
                  />
                </div>
              </div>

              {/* Phone & Project Type */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--main-text-color)]'>
                <div className='py-2'>
                  <label>Phone *</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                    placeholder='Phone Number'
                  />
                </div>

                <div className='py-2'>
                  <label>Project Type *</label>
                  <select
                    name='projectType'
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md bg-[var(--main-color)] text-[#656666]'
                  >
                    <option value=''>Select Project Type</option>
                    <option value='website'>Website Design</option>
                    <option value='ecommerce'>E-Commerce Website</option>
                    <option value='webapp'>Web Application</option>
                    <option value='uiux'>UI/UX Design</option>
                  </select>
                </div>
              </div>

              {/* Design Stage & Deadline */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--main-text-color)]'>
                <div className='py-2'>
                  <label>Design Stage *</label>
                  <select
                    name='designStage'
                    value={formData.designStage}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md bg-[var(--main-color)] text-[#656666]'
                  >
                    <option value=''>Select Design Stage</option>
                    <option value='idea'>Just an Idea</option>
                    <option value='wireframe'>Wireframe Ready</option>
                    <option value='design'>Design Ready</option>
                  </select>
                </div>

                <div className='py-2'>
                  <label>Deadline *</label>
                  <select
                    name='deadline'
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md bg-[var(--main-color)] text-[#656666]'
                  >
                    <option value=''>Select Deadline</option>
                    <option value='urgent'>Urgent</option>
                    <option value='2-4weeks'>2-4 Weeks</option>
                    <option value='flexible'>Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className='grid grid-cols-1 gap-2 text-[var(--main-text-color)]'>
                <div className='py-2'>
                  <label>Message *</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                    placeholder='Tell us about your project'
                  />
                </div>
              </div>

              {/* Privacy */}
              <div className='grid grid-cols-1 gap-2 text-[var(--main-text-color)]'>
                <div className='py-2 pl-1'>
                  <input
                    type='checkbox'
                    name='privacy'
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className='accent-[#D3AF37] mr-2'
                  />

                  <label>
                    I have read and accepted the Terms & Privacy Policy *
                  </label>
                </div>

                <div className='btn'>
                  <button
                    type='submit'
                    className='bg-[var(--main-btn-color)] p-[10px_30px] text-[var(--btn-text-color)] rounded-md border hover:bg-transparent hover:text-[var(--main-text-color)] transition duration-500'
                  >
                    Get Started
                  </button>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
