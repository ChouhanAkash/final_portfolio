import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'About Me', 'Skills', 'Project', 'Contact']

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Full width gradient background */}
      <div className="w-full bg-gradient-to-r from-teal-500 to-purple-600 shadow-lg backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-teal-500 font-bold flex items-center justify-center">
              AC
            </div>
            <div className="font-semibold text-white text-lg">Akash Chouhan</div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map(l => (
              <a
                key={l}
                href={l === 'Home' ? '#home' : `#${l.toLowerCase().replace(/ /g, '-')}`}
                className="hover:text-gray-200 transition-colors duration-300 font-medium"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {links.map(l => (
            <a
              key={l}
              href={l === 'Home' ? '#home' : `#${l.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 text-white hover:text-gray-200 font-medium transition-colors duration-300"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
