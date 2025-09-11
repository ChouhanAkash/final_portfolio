import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide">
          © {new Date().getFullYear()} <span className="font-semibold">Akash Chouhan</span>. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center gap-6 text-sm">
          <a
            href="#home"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#project"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
