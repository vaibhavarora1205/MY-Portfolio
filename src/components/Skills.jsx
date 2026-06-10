import React from 'react'

function Skills() {
    const skills=[
        'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Git','GitHub', 'C++'
    ]
  return (
    <section id='skills' className="px-12 py-24">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill)=>(
                <div key={skill} className="bg-slate-900 px-6 py-3 rounded-xl">
                    {skill}
                </div>
            ))}
        </div>
    </section>

  )
}

export default Skills
