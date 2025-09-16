import React from "react";
import projects from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section
      id="project"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
          Projects
        </h3>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image Slider */}
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="h-60 w-full"
              >
                {p.image.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${p.title}-${i}`}
                      className="h-60 w-full object-cover rounded-t-xl"
                      onError={(e) =>
                        (e.currentTarget.src = `${import.meta.env.BASE_URL}images/fallback.png`)
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {p.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 flex-1">{p.desc}</p>

                {/* Tech Stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white shadow-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={p.github || "#"}
                    className={`px-4 py-2 rounded-md text-gray-800 font-medium transition-colors duration-300 ${
                      p.github
                        ? "bg-gray-100 hover:bg-gray-200"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    GitHub
                  </a>

                  {p.live && p.live !== "#" ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={p.live}
                      className="px-4 py-2 rounded-md bg-gradient-to-r from-teal-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity duration-300"
                    >
                      Live / Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 rounded-md bg-gray-300 text-white font-medium cursor-not-allowed"
                    >
                      Not Deployed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

