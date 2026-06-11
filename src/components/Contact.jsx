import React from 'react'

function Contact() {
    const contacts = [
  {
    name: "GitHub",
    link: "https://github.com/vaibhavarora1205",
    buttonText: "View Profile",
    description: "Check out my projects and code repositories."
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vaibhavarora1205-/",
    buttonText: "Connect",
    description: "View my professional profile and network."
  },
  {
    name: "Email",
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
        className=" bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
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
