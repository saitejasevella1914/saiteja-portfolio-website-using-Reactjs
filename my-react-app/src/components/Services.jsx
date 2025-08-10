import { useState } from 'react'
import frontend from '../assets/frontend.jpg';
import backend from '../assets/backend.jpg';
import resume from '../assets/resume.jpg';


export default function Services() {
  const [page, setPage] = useState(1)

  const services = [
    {
      title: 'Frontend Development',
      image: frontend,
      description:
        'Building modern, responsive, and accessible user interfaces with React, Vue, or Angular.',
    },
    {
      title: 'Backend Development',
      image: backend,
      description:
        'Creating robust server-side applications, RESTful APIs, and database management using Node.js, Express, and MongoDB.',
    },
    {
      title: 'Resume writer & Analyzer',
      image: resume,
      description:[
        'Professional resume writing and analysis tailored to your career goals',
        ' This service includes ATS-optimized formatting, keyword enhancement, and personalized content to highlight your strengths.',
         'We also offer cover letter writing, LinkedIn profile optimization',
        'and job-specific customization to maximize your chances of landing interviews.'],
    },
  ]

  const handleChangePage = (delta) => {
    const newPage = page + delta
    if (newPage >= 1 && newPage <= services.length) {
      setPage(newPage)
    }
  }

  return (
    <section id="services" className="py-20 px-6 bg-black text-cyan-400">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-12 tracking-wide">
          Services
        </h2>

        <div className="flex justify-center">
          <div className="bg-gray-900 p-12 rounded-lg shadow-lg max-w-3xl mx-auto border border-cyan-600
          transition-transform hover:scale-105 duration-300">
            <img
              src={services[page - 1].image}
              alt={services[page - 1].title}
              className="rounded-xl mb-6 w-full h-64 object-fit shadow-md "
            />
            <h3 className="text-3xl font-bold mb-4">{services[page - 1].title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {services[page - 1].description}
            </p>
          </div>
        </div>

        {/* Pagination Buttons (UNCHANGED) */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            onClick={() => handleChangePage(-1)}
            className={`px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 ${
              page === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={page === 1}
          >
            ❮ Prev
          </button>
          <span className="text-lg font-semibold">{page}</span>
          <button
            onClick={() => handleChangePage(1)}
            className={`px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 ${
              page === services.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={page === services.length}
          >
            Next ❯
          </button>
        </div>

        {/* Contact Me Button (UPDATED STYLE) */}
        <div className="mt-12">
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
