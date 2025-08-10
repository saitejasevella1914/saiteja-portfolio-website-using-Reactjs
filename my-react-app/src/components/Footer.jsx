import { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    const yearSpan = document.getElementById('year')
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear()
    }
  }, [])

  return (
    <footer className="bg-black text-white py-10 px-4 mt-12 border-t border-gray-800 text-center">
      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.linkedin.com/in/sevella-saiteja-webdeveloper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>
        <a
          href="https://github.com/saitejasevella1914"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-6 h-6 hover:opacity-80"
            style={{
              filter:
                'invert(36%) sepia(77%) saturate(289%) hue-rotate(151deg) brightness(91%) contrast(88%)',
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/iamsaiteja06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 mb-1">
        Designed & Developed with <span className="text-red-500">❤</span> by{' '}
        <strong>SAI TEJA</strong>
      </p>
      <p className="text-gray-500 text-sm">
        &copy; <span id="year"></span> Portfolio. All Rights Reserved.
      </p>
    </footer>
  )
}
