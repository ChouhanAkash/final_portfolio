import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-xl border border-gray-200">
        
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
          Contact Me
        </h3>
        <p className="text-gray-600 text-center mb-10 text-lg">
          Feel free to connect with me through LinkedIn or GitHub.  
        </p>

        {/* Contact Info */}
        <ul className="space-y-6">
          <li className="flex items-center gap-4 text-gray-700 group">
            <AiOutlineMail className="text-teal-500 text-2xl group-hover:scale-110 transition-transform" />
            <a
              href="mailto:akash@example.com"
              className="hover:text-teal-600 font-medium transition-colors duration-300"
            >
              akashchouhan1209@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-4 text-gray-700 group">
            <AiOutlinePhone className="text-teal-500 text-2xl group-hover:scale-110 transition-transform" />
            <span className="font-medium">+91 6266068835</span>
          </li>

          <li className="flex items-center gap-4 text-gray-700 group">
            <AiFillLinkedin className="text-blue-600 text-2xl group-hover:scale-110 transition-transform" />
            <a
              href="https://www.linkedin.com/in/akash-chouhan-a06320202/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 font-medium transition-colors duration-300"
            >
              LinkedIn
            </a>
          </li>

          <li className="flex items-center gap-4 text-gray-700 group">
            <AiFillGithub className="text-gray-800 text-2xl group-hover:scale-110 transition-transform" />
            <a
              href="https://github.com/ChouhanAkash"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 font-medium transition-colors duration-300"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
