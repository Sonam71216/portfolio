import React, { useState } from "react";
import Pro1 from "../assets/images/website2.jpg";
import Pro2 from "../assets/images/e-commerce.png";
import Pro3 from "../assets/images/dashboard.jpg";
import Pro4 from "../assets/images/splash-srceen.jpg";
import Pro5 from "../assets/images/web-design1.png";
import Pro6 from "../assets/images/food-website.jpg"

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      img: Pro1,
      title: "IT Services Website Design",
      link: "#",
    },
    {
      img: Pro2,
      title: "E-Commerce Website",
    },
    {
      img: Pro3,
      title: "Admin Panel",
    },
    {
      img: Pro5,
      title: "Real Estate Website",
    },
    {
      img: Pro4,
      title: "Mobile Application",
    },
     {
      img: Pro6,
      title: "Food Website",
    },
  ];

  return (
    <section className="py-8 md:py-20 md:px-6 lg:px-4 px-6 pro-sec" id="project">
      <div className="max-w-7xl mx-auto">
        <div className="mainTitle mb-4">
          <p className="top-line">SELECTED PROJECTS</p>
          <h1>
            <span>My work,</span> your next inspiration.
          </h1>
          <p>
            Explore projects that combine creativity, functionality, and
            user-focused design to deliver meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="pro-box relative cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(project.img)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full rounded-lg transition duration-300 hover:scale-105"
              />
              <p className="absolute bottom-3 left-3 text-white bg-black/60 px-3 py-1 rounded">
                {project.title}
              </p>
            </div>
          ))}
        </div>

        {/* Full Screen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-5 right-8 text-white text-5xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt=""
              className="max-w-[90%] max-h-[90%] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
