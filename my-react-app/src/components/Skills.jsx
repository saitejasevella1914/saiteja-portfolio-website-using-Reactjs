export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">Skills</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Progress Bars */}
          <div className="w-full md:w-1/3 space-y-8 text-left">
            {/* Expert */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Expert In</h3>
              {[
                { label: 'HTML, CSS, JavaScript', level: '75%' },
                { label: 'React.js, Tailwind CSS', level: '50%' },
                { label: 'Git & GitHub', level: '60%' },
              ].map(({ label, level }) => (
                <div key={label} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{label}</span>
                    <span className="text-gray-400 text-sm">{level}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div className="bg-cyan-400 h-2 rounded" style={{ width: level }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Intermediate */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">Intermediate In</h3>
              {[
                { label: 'Node.js, Express', level: '55%' },
                { label: 'MongoDB', level: '50%' },
                { label: 'Python, Linux', level: '70%' },
              ].map(({ label, level }) => (
                <div key={label} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{label}</span>
                    <span className="text-gray-400 text-sm">{level}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div className="bg-yellow-400 h-2 rounded" style={{ width: level }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Beginner */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-pink-300">Beginner In</h3>
              {[
                { label: 'TypeScript', level: '40%' },
                { label: 'CI/CD Tools', level: '35%' },
              ].map(({ label, level }) => (
                <div key={label} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{label}</span>
                    <span className="text-gray-400 text-sm">{level}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div className="bg-pink-400 h-2 rounded" style={{ width: level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Icon Grid Section */}
          <div className="w-full md:w-2/3 space-y-12">
            {/* Frontend */}
            <div className="bg-gray-900 skill-category border border-cyan-700 rounded-lg p-4 shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-4">Frontend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", label: "HTML5" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", label: "CSS3" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
                  { src: "/tailwindcss.svg", label: "Tailwind CSS" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: "Bootstrap" },
                ].map(({ src, label }) => (
                  <div key={label} className="flex flex-col items-center text-sm hover:scale-110 transition-transform duration-300">
                    <img src={src} alt={label} className="w-12 h-12 mb-2" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className=" bg-gray-900 skill-category border border-cyan-700 rounded-lg p-4 shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-4">Backend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                    label: "Express",
                    style: { filter: "invert(100%) brightness(200%)" },
                  },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
                ].map(({ src, label, style }) => (
                  <div key={label} className="flex flex-col items-center text-sm hover:scale-110 transition-transform duration-300">
                    <img src={src} alt={label} className="w-12 h-12 mb-2" style={style} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-gray-900 skill-category border border-cyan-700 rounded-lg p-4 shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-4">Tools & Platforms</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                    label: "GitHub",
                    style: { filter: "invert(100%) brightness(150%)" },
                  },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: "VS Code" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "Linux" },
                ].map(({ src, label, style }) => (
                  <div key={label} className="flex flex-col items-center text-sm hover:scale-110 transition-transform duration-300">
                    <img src={src} alt={label} className="w-12 h-12 mb-2" style={style} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
