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

    if (!formData.privacy) {
      alert("Please accept terms & privacy")
      return
    }

    console.log(formData)
    alert("Form submitted successfully 🚀")
  }

  return (
    <section className='md:py-18 py-8 px-4 md:px-0' id='contact'>
      <div className='max-w-7xl mx-auto'>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div>
            <div className="mainTitle">
              <p className='top-line text-[14px] md:text-[13px]'>Let's Talk</p>
              <h1><span>Let’s Discuss</span> Your Project</h1>
              <p>Tell me about your project, and I’ll help turn your ideas into effective and well-designed digital solutions.</p>
            </div>
            <div className="mapImg mt-4"><img src={mapImg} alt="" /></div>
          </div>

          <div className='contactName'>
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--main-text-color)]">
                <div className='py-2'>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                    placeholder='Name'
                  />
                </div>

                <div className='py-2'>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                    placeholder='Email'
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--main-text-color)]">
                <div className='py-2'>
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md bg-[var(--main-color)] text-[#656666]'
                    placeholder='Number'
                  />
                </div>

                <div className='py-2'>
                  <label>Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md  bg-[var(--main-color)] text-[#656666]'
                  >
                    <option value="">Urgent</option>
                    <option value="2-4weeks">2-4 Week</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--main-text-color)]">
                <div className='py-2'>
                  <label>Design Stage</label>
                  <select
                    name="designStage"
                    value={formData.designStage}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md bg-[var(--main-color)] text-[#656666]'
                  >
                    <option value="">Urgent</option>
                    <option value="2-4weeks">2-4 Week</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className='py-2'>
                  <label>Deadline</label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md bg-[var(--main-color)] text-[#656666]'
                  >
                    <option value="" disabled>Select deadline</option>
                    <option value="urgent">Urgent</option>
                    <option value="2-4weeks">2-4 Weeks</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 text-[var(--main-text-color)]">
                <div className='py-2'>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full p-2 border-2 border-[var(--main-bg-color)] rounded-md'
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 text-[var(--main-text-color)]">
                <div className='py-2 pl-1'>
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className='accent-[#D3AF37] mr-2'
                  />
                  <label>I have read and accepted terms and privacy</label>
                </div>

                <div className="btn">
                  <button
                    type="submit"
                    className='bg-[var(--main-btn-color)] p-[10px_30px] text-[var(--btn-text-color)] rounded-sm border-1
                    hover:border-1 hover:bg-transparent hover:text-[var(--main-text-color)] rounded-md transition duration-500'
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