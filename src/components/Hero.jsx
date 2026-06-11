import React from 'react'

function Hero() {
  return (
    <section id='home' className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
        <div>
             <p className="text-blue-500 text-lg mb-2">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Vaibhav Arora</h1>

        <h2 className="text-3xl text-slate-300 mb-6">
          Aspiring Frontend Developer | React Enthusiast
        </h2>

        <p className="text-slate-400 max-w-xl">
          Passionate about building modern, responsive web
          applications using React and Tailwind CSS.
          Currently learning and creating projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
            View Projects
        </button>

        <button className="border border-slate-600 px-6 py-3 rounded-lg hover:border-blue-500 transition-all duration-300">
            Download Resume
        </button>
        </div>
        </div>
        <img
  src="/profile.png"
  alt="Vaibhav"
  className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shrink-0 shadow-[0_0_40px_rgba(59,130,246,0.4)]"/>
    </section>
  )
}

export default Hero
