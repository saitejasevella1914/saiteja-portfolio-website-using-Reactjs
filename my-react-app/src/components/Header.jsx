import { useEffect, useState } from 'react'
import profile from '../assets/profilephoto.png'

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  
  useEffect(() => {
    const textEl = document.getElementById('animated-text')
    const phrases = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer','Resume Writer & Analyzer']
    let i = 0, j = 0, currentPhrase = [], isDeleting = false

    const loop = () => {
      if (!textEl) return
      textEl.innerHTML = currentPhrase.join('')
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
      }
      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop()
        j--
      }
      if (j === phrases[i].length) isDeleting = true
      if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i = (i + 1) % phrases.length
      }
      setTimeout(loop, isDeleting ? 100 : 100)
    }

    loop()
  }, [])

  return (
    <header className="relative py-24 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-3 bg-black bg-opacity-50 text-white z-10">
        <div className="flex gap-4 items-center">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-4 items-center">
         {/* Theme Toggle
          <button onClick={() => setDarkMode(prev => !prev)} aria-label="Toggle Theme">
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-300" />
            ) : (
              <Moon className="w-6 h-6 text-yellow-800" />
            )}
          </button>*/}

          {/* Resume Button (desktop only) */}
          <div className="group relative hidden sm:block">
            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded text-sm shadow transition duration-300"
            >
              Download Resume
            </a>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-opacity">
              Download Resume
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className=" bg-gray-900 fixed top-1/2 left-4 transform -translate-y-1/2 z-20 border border-cyan-500 p-3 rounded-lg bg-black/20">
  <div className="space-y-4">
    <a href="https://www.linkedin.com/in/sevella-saiteja-webdeveloper" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        className="w-6 h-6 hover:scale-110 transition-transform"
      />
    </a>
    <br></br>
    <a href="https://github.com/saitejasevella1914" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        className="w-6 h-6 hover:scale-110 transition-transform"
        style={{
          filter: 'invert(36%) sepia(77%) saturate(289%) hue-rotate(151deg) brightness(91%) contrast(88%)'
        }}
      />
    </a>
    <br></br>
    <a href="https://www.instagram.com/iamsaiteja06" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        className="w-6 h-6 hover:scale-110 transition-transform"
      />
    </a>
  </div>
</div>

      {/* Animated Text + Flip Card */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 px-6">
        <div className="w-full md:w-1/2 text-left">
          <h1
            id="animated-text"
            className="text-4xl font-bold h-16 text-cyan-500 dark:text-cyan-400"
          ></h1>
        </div>

        {/* Flip Card */}
        <div className="flip-card relative w-48 h-64 perspective">
          <div className="flip-card-inner w-full h-full">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden">
              <img src={profile} alt="Profile" className="rounded-lg w-full h-full object-fill" />
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg flex flex-col justify-center items-center bg-cyan-400 text-white p-4">
              <h2 className="text-xl font-bold">Hi 👋</h2>
              <p className="text-sm">Here, I am a Full Stack Developer!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Resume Button (mobile only) */}
      <div className="sm:hidden fixed bottom-6 right-6 z-50 group">
        <a
          href="public/resume.pdf "
          download
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-full shadow-lg transition-all"
        >
          📄
        </a>
        <div className="absolute -top-10 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-opacity">
          Download Resume
        </div>
      </div>
    </header>
  )
}
