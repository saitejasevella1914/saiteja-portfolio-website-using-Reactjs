import developer from "../assets/developer.jpg"
export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2" flex justify-center>
          <img
            src={developer}
            alt="Developer"
            className="rounded-lg shadow-lg  max-w-xs md:max-w-sm w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed  ">
            I am a passionate Full Stack Developer with expertise in building dynamic, scalable,
            and user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript,
            and frameworks like React, Node.js, and Express, I specialize in crafting seamless
            front-end experiences and robust back-end architectures.
            <br /><br />
            I thrive on solving complex problems, optimizing performance, and implementing responsive
            designs that enhance user engagement. My experience includes database management (MongoDB, MySQL),
            API development, authentication systems, and integrating third-party services.
            <br /><br />
            Beyond coding, I explore new technologies, best practices, and innovative solutions to stay ahead.
            Whether it's refining UI/UX, improving load times, or ensuring security, I deliver high-quality,
            scalable applications that make an impact.
          </p>

          <div className="flex gap-4">
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow"
  >Resume
  </a>
            <a href="#contact" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded shadow">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
