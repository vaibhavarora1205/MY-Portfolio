import React from 'react'

function Hero() {
  return (
    <section id='home' className="min-h-[80vh] flex items-center justify-between px-12">
        <div>
             <p className="text-blue-500 text-lg mb-2">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mb-4">
          Vaibhav Arora
        </h1>

        <h2 className="text-3xl text-slate-300 mb-6">
          Frontend Developer & CSE Student
        </h2>

        <p className="text-slate-400 max-w-xl">
          Passionate about building modern, responsive web
          applications using React and Tailwind CSS.
          Currently learning and creating projects.
        </p>
        <div className="flex gap-4 mt-8">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
            View Projects
        </button>

        <button className="border border-slate-600 px-6 py-3 rounded-lg hover:border-blue-500 transition-all duration-300">
            Download Resume
        </button>
        </div>
        </div>
        <div className="w-80 h-80 rounded-full border-4 border-blue-500 flex items-center justify-center text-slate-400">
            Photo
        </div>
    </section>
  )
}

export default Hero
