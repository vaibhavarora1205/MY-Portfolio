import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 p-5 border-b border-slate-800'>
        <h1 className='text-2xl font-bold'>Vaibhav</h1>
        <ul className='flex gap-8'>
            <li>
                <a href="#home" className="text-slate-300 hover:text-blue-500">Home</a>
            </li>
            <li>
                <a href="#about" className="text-slate-300 hover:text-blue-500">About</a>
            </li>
            <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-500">Skills</a>
            </li>
            <li>
                <a href="#project" className="text-slate-300 hover:text-blue-500">Project</a>
            </li>
            <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-500">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
