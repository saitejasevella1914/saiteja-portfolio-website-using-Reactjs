import { useState } from 'react'
import portfoliowebsite from '../assets/portfoliowebsite.png'
import todoapplication from '../assets/toDo application.png'
import ecommerce from '../assets/e-commercewebsite.png'
import quickchatapp from '../assets/quickchatapp.png'

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      title: 'PERSONAL PORTFOLIO WEBSITE USING REACT.JS',
      image: portfoliowebsite,
      shortDesc: 'A responsive React-based portfolio showcasing modern frontend development skills.',
      description: [
        'A personal portfolio website built with React.js offers a dynamic, interactive platform to present your professional identity.',
        'With responsive design, intuitive navigation, and a modern UI, it elegantly showcases your skills, experience, and projects.',
        'The site uses reusable components for scalability and employs state management for interactive features.',
        'Animated elements and seamless page transitions enhance user engagement.',
        'This project highlights my proficiency in front-end development, demonstrates knowledge of modern JavaScript frameworks, and provides a robust showcase for potential me.'
      ],
      link: 'https://github.com/saitejasevella1914/saiteja-portfolio-website-using-Reactjs.git',
    },
    {
      title: 'TO DO APPLICATION USING FULL STACK',
      image: todoapplication,
      shortDesc: 'A task manager built with Node.js, Express, React, and MongoDB.',
      description:
        ['This To-Do Application is a feature-rich task management tool developed using the MERN stack—MongoDB, Express.js, React.js, and Node.js.',
         'It allows users to create, edit, delete, and organize tasks efficiently with a user-friendly and responsive interface. ',
         'The app includes secure user authentication and real-time updates, ensuring seamless task tracking. ',
        ' Tasks are stored in a MongoDB database, offering persistence across user sessions.' ,
         'This project highlights end-to-end full-stack development skills, covering front-end design, API creation, backend logic, and database operations. ',
         'Its built to enhance productivity while showcasing practical knowledge of full-stack architecture and application deployment.,']
      ,link: 'https://github.com/saitejasevella1914/TO-DO-List-React_App_Project.git',
    },
    {
      title: 'E-COMMERCE WEBSITE USING FRONTEND',
      image: ecommerce,
      shortDesc: 'A frontend shopping platform with modern UI and responsive design.',
      description:
        [
          'This E-Commerce Website is a visually appealing and fully responsive frontend application designed to deliver a seamless online shopping experience. ',
          'Built using HTML, CSS, and JavaScript (or optionally React.js), it features a dynamic product listing page, category filtering, product detail views, shopping cart functionality, ',
          'and a smooth checkout interface. The design is user-centric with modern UI/UX principles, making it easy to browse and interact.',
           'Though backend integration is not included, this project demonstrates strong frontend development skills, emphasizing layout design, responsiveness, interactivity, and component-based architecture suitable for real-world e-commerce platforms. ',
          ' Perfect for showcasing frontend proficiency.'

        ],
      link: 'https://github.com/saitejasevella1914/Saiteja-E-Commerce-Website.git',
    },
    {
      title: 'QUICK CHAT APP  USING FULLSTACK',
      image: quickchatapp,
      shortDesc: 'A real-time chat application built using the MERN stack with socket.io for instant messaging, user authentication, and a responsive UI for seamless communication.',
      description:
        [
          'This Quick Chat App is a real-time messaging platform developed with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for instant communication. ',
          'It features user authentication, chat room support, live message exchange, and a clean, responsive interface.',
           'Users can send and receive messages in real-time with instant updates across devices. ',
           'The backend handles user sessions and chat history storage, while the frontend delivers an intuitive chat experience. ',
          ' This project showcases practical full-stack development skills, real-time data handling, and responsive UI design—ideal for social apps or team collaboration tools requiring fast and reliable communication.'
        ],
      link: 'https://github.com/saitejasevella1914/QuickChat_With_Socket.io_Using_FullStack.git',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [newProject, setNewProject] = useState({
    title: '',
    image: '',
    shortDesc: '',
    description: '',
    link: '',
  })

  const [openAboutIndex, setOpenAboutIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const handleAddProject = () => {
    const { title, image, shortDesc, description, link } = newProject

    if (!title || !image || !shortDesc || !description || !link) {
      alert('Please fill in all fields.')
      return
    }

    setProjects([...projects, newProject])
    setNewProject({
      title: '',
      image: '',
      shortDesc: '',
      description: '',
      link: '',
    })
    setShowForm(false)
  }

  const displayedProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <section id="projects" className="bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">Projects</h2>

        <div className="grid gap-12">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-md border border-cyan-500 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 object-fit h-64 md:h-400 transition-transform duration-500 ease-in-out hover:scale-110"
                style={{ willChange: 'transform' }}
              />

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h3>

                  {project.shortDesc && (
                    <p className="text-gray-300 text-sm mb-4">{project.shortDesc}</p>
                  )}
                </div>

                <div className="flex gap-4 mt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded shadow"
                  >
                    Live Demo
                  </a>
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
                    onClick={() =>
                      setOpenAboutIndex(openAboutIndex === idx ? null : idx)
                    }
                  >
                    {openAboutIndex === idx ? 'Hide About' : 'About This'}
                  </button>
                </div>

                {openAboutIndex === idx && (
                  <div className="mt-4 text-gray-300 text-sm leading-relaxed space-y-2">
                    {Array.isArray(project.description) ? (
                      project.description.map((line, i) => <p key={i}>• {line}</p>)
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More / Show Less Button */}
        {projects.length > 2 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded shadow"
            >
              {showAll ? 'Show Less' : 'More'}
              <span
                className="ml-2 transition-transform duration-300"
                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▶
              </span>
            </button>
          </div>
        )}
         {/*
        {/* Add Project Form 
        <div className="mt-16 text-center">
          <p className="text-gray-400">Want to add more projects?</p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-2 px-6 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded shadow"
          >
            {showForm ? 'Cancel' : '+ Add New Project'}
          </button>
        </div>

        {showForm && (
          <div className="mt-8 bg-gray-800 p-6 rounded shadow-lg">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Project Title"
                className="p-2 rounded bg-gray-700 text-white"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL or import"
                className="p-2 rounded bg-gray-700 text-white"
                value={newProject.image}
                onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
              />
              <input
                type="text"
                placeholder="Project Link"
                className="p-2 rounded bg-gray-700 text-white"
                value={newProject.link}
                onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
              />
              <input
                type="text"
                placeholder="Short Description"
                className="p-2 rounded bg-gray-700 text-white"
                value={newProject.shortDesc}
                onChange={(e) => setNewProject({ ...newProject, shortDesc: e.target.value })}
              />
              <textarea
                rows="3"
                placeholder="Project Description (can be list or single para)"
                className="p-2 rounded bg-gray-700 text-white col-span-2"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              />
            </div>
            <button
              onClick={handleAddProject}
              className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow"
            >
              Submit Project
            </button>
          </div>
        )}*/}
      </div>
    </section>
  )
}
