import React from "react";

function Resume() {
  return (
    <section id="resume" className="px-6 md:px-12 py-24">
      <h2 className="text-4xl font-bold mb-8">Resume</h2>
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <h3 className="text-2xl font-semibold mb-4">My Resume</h3>
        <p className="text-slate-400 mb-6">
          Download my resume to Learn more about my education, skills and
          projects
        </p>
        <a
          href="/Resume.pdf"
          download
          className="inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
