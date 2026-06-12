import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
    const contacts = [
  {
    name: "GitHub",
    link: "https://github.com/vaibhavarora1205",
    icon: <FaGithub size={30} />,
    buttonText: "View Profile",
    description: "Check out my projects and code repositories."
  },
  {
    name: "LinkedIn",
     icon: <FaLinkedin size={30} />,
    link: "https://www.linkedin.com/in/vaibhavarora1205-/",
    buttonText: "Connect",
    description: "View my professional profile and network."
  },
  {
    name: "Email",
     icon: <FaEnvelope size={30} />,
    link: "mailto:vaibhavarora1205@gmail.com",
    buttonText: "Send Email",
    description: "Feel free to reach out for collaboration."
  }
];
  return (
    <section id="contact" className="px-6 md:px-12 py-24">
  <h2 className="text-4xl font-bold mb-8">
    Contact
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {contacts.map((option) => (
      <div
        key={option.name}
        className="flex flex-col items-center text-center bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
           <div className="text-blue-500 text-4xl mb-4">
    {option.icon}
  </div>
        <h3 className="text-2xl font-semibold mb-3">
          {option.name}
        </h3>

        <p className="text-slate-400 mb-6">
          {option.description}
        </p>

        <a href={option.link} target="_blank" rel="noreferrer" className=" inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all ">
          {option.buttonText}
        </a>
      </div>
    ))}
  </div>
</section>
  )
}

export default Contact
