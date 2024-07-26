import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Gunawan Wibisono</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m a dedicated DevOps engineer with 2 years of experience in enhancing software development workflows. I excel in automating deployments, optimizing infrastructure, and building reliable CI/CD pipelines. My objective is to seamlessly integrate development and operations to efficiently deliver top-quality software.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="inline-block bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">Get in Touch</a>
              {/* <a href="/resume.pdf" download className="inline-block bg-white text-gray-900 py-2 px-6 rounded-full border border-gray-900 hover:bg-gray-100 transition duration-300">Download CV</a> */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/gunawan.png"
                alt="Gunawan Wibisono"
                layout="fill"
                objectFit="contain"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}