import React from 'react'

function Services({ title, subtitle, description, servicesData }) {
    return (
        <div className='service-sec py-8 px-4 md:px-0 md:py-18' id="services">
            <div className="max-w-7xl mx-auto">

                <div className="mainTitle">
                    <p className='top-line'>{subtitle}</p>
                    <h1><span>{title.highlight}</span> {title.normal}</h1>
                    <p>{description}</p>
                </div>

                {/* Row 1 */}
                <div className="services grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                    {servicesData.slice(0, 2).map((item, index) => (
                        <div className="ser-box" key={index}>
                            <div className="icon"><img src={item.arrow} alt="" /></div>
                            <img src={item.icon} alt="" />
                            <h3 className='text-3 mt-2'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="services grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                    {servicesData.slice(2, 4).map((item, index) => (
                        <div className="ser-box" key={index}>
                            <div className="icon"><img src={item.arrow} alt="" /></div>
                            <img src={item.icon} alt="" />
                            <h3 className='text-3 mt-2'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Row 3 */}
                <div className="services grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 mb-4">
                    {servicesData.slice(4, 7).map((item, index) => (
                        <div className="ser-box" key={index}>
                            <div className="icon"><img src={item.arrow} alt="" /></div>
                            <img src={item.icon} alt="" />
                            <h3 className='text-3 mt-2'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Services