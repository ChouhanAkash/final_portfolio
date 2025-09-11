import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiAndroidstudio,
  SiExpo,
  SiFigma,
} from "react-icons/si";

const stacks = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-3xl" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  { name: "React", icon: <SiReact className="text-blue-400 text-3xl" /> },

  {
    name: "React Native",
    icon: (
      <img
        src="data:image/png;base64,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"
        alt="React Native"
        className="w-8 h-8"
      />
    ),
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 text-3xl" />,
  },
  { name: "Express", icon: <SiExpress className="text-gray-700 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
  },
  { name: "Git", icon: <SiGit className="text-orange-600 text-3xl" /> },

  {
    name: "VS Code",
    icon: <img src="data:image/png;base64,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" alt="VS Code" className="w-8 h-8" />,
  },

  {
    name: "Android Studio",
    icon: <SiAndroidstudio className="text-green-500 text-3xl" />,
  },
  { name: "Expo", icon: <SiExpo className="text-black text-3xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-3xl" /> },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 text-center">
          Tech Stack & Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {stacks.map((s) => (
            <div
              key={s.name}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              {s.icon}
              <div className="mt-3 text-sm font-medium text-gray-700">
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
