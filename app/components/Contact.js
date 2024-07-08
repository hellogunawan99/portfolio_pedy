export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"></textarea>
          </div>
          <button type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}