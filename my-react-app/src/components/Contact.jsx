import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_t8sl8hs', // replace with your EmailJS service ID
        'template_yx2vyeu', // replace with your EmailJS template ID
        form.current,
        'JFPMzJuAjsa2--urK' // replace with your actual public key
      )
      .then(
        () => {
          alert('Message sent successfully!')
          form.current.reset()
        },
        (error) => {
          alert('Failed to send message: ' + error.text)
        }
      )
  }

  return (
    <section id="contact" className="bg-gray-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto border border-cyan-500 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-8">Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full h-32 px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded shadow"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
