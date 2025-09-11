import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-teal-500 to-purple-600 text-white"
      
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm Akash Chouhan
          </h1>
          <h2 className="text-xl mt-4 font-medium">
            <Typewriter
              words={["Application Developer.", "React Native Developer","React Developer.", " Fullstack Developer."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="mt-4 text-gray-200">
          Computer Science graduate in 2024 passionate about React Native and Full-Stack Development. I’ve built projects like a Book Library system, Gupio smart parking App, and Trexo Grocery App using JavaScript, React, Redux, Firebase, and MongoDB. I’m eager to create scalable, user-friendly applications and grow as a software developer.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <a
  href={`${import.meta.env.BASE_URL}AkashResume.pdf`}
  download="AkashResume"
  className="px-4 py-2 rounded-md bg-white text-teal-600 font-semibold hover:bg-gray-200 transition-colors duration-300"
>
  Download Resume
</a>


            <a
              href="#project"
              className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-teal-600 transition-colors duration-300"
            >
              See Projects
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
         <img 
  src={`${import.meta.env.BASE_URL}images/profile.png`} 
  alt="Akash"
  className="w-64 h-64 rounded-lg object-cover shadow-2xl border-4 border-white"
/>

        </div>
      </div>
    </section>
  )
}
