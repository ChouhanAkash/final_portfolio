import React from 'react'

export default function GithubStats() {
  const username = "ChouhanAkash"; 

  return (
    <section id="github-stats" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h4 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
          GitHub Stats
        </h4>

        {/* Stats & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`}
              alt="GitHub Stats"
              className="w-full max-w-md object-contain"
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
              alt="Top Languages"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Contribution Calendar */}
        <div className="mt-12 text-center">
          <h5 className="font-semibold text-xl mb-6 text-gray-800">
            Contribution Calendar
          </h5>
          <div className="bg-white rounded-xl shadow-lg p-6 inline-block hover:shadow-xl transition-shadow duration-300">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="Contribution Calendar"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
