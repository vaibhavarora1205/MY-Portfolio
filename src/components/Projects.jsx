import React from 'react'

function Projects() {
    const projects=[
        {title:"Amazon Clone",
          image:"/projects/amazon.png",
            description:"Responsive Amazon clone using React and Tailwind CSS",
            tech:["React","Tailwind CSS"],
            github:"https://github.com/vaibhavarora1205/amazon-clone-project.git"
        },
        {
            title:"Calculator App",
            image:"/projects/calculator.png",
            description:
            "A calculator application capable of performing basic arithmetic operations.",
            tech: ["HTML", "CSS", "JavaScript"],
            github:"https://github.com/vaibhavarora1205/vaibhavarora1205.github.io.git"
        },
         {
        title: "Gym Landing Page",
        image:"/projects/landingpage.png",
        description:
        "A modern gym landing page built with React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS"],
        github:"https://github.com/vaibhavarora1205/vaibhavarora1205.github.io.git"
        },
    ]
  return (
    <section id="projects" className="px-6 md:px-12 py-24">
      <h2 className="text-4xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
  {projects.map((project) => (
    <div
      key={project.title}
      className="
        bg-slate-900
        p-6
        rounded-2xl
        border border-slate-800
        hover:border-blue-500
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {/* Project Preview */}
      <div className="h-48 bg-slate-800 rounded-xl mb-5 flex items-center justify-center text-slate-400">
       <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-xl'/>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-slate-800 px-3 py-1 rounded-full text-sm text-blue-400">
           {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className=" bg-blue-600 px-4 py-2rounded-lg hover:bg-blue-700 transition-all">
          <a href={project.github} target='_blank'>GitHub</a>
        </button>

        <button
          className="
            border
            border-slate-700
            px-4
            py-2
            rounded-lg
            hover:border-blue-500
            transition-all
          "
        >
          Live Demo
        </button>
      </div>
    </div>
  ))}
</div>
    </section>
  )
}

export default Projects
