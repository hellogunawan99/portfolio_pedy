'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp, FaTwitter, FaMedium } from 'react-icons/fa';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:gunawanwibisono4712@gmail.com";
  };

  const socialLinks = [
    { icon: FaLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/gunawan-wibisono-9aa883237/', color: 'text-blue-600 hover:text-blue-800' },
    { icon: FaGithub, text: 'GitHub', href: 'https://github.com/hellogunawan99', color: 'text-gray-800 hover:text-gray-600' },
    { icon: FaEnvelope, text: 'Email', onClick: handleEmailClick, color: 'text-red-600 hover:text-red-800' },
    { icon: FaInstagram, text: 'Instagram', href: 'https://www.instagram.com/hello.gunawan/', color: 'text-pink-600 hover:text-pink-800' },
    { icon: FaWhatsapp, text: 'WhatsApp', href: 'https://wa.me/085158735552', color: 'text-green-600 hover:text-green-800' },
    { icon: FaTwitter, text: 'Twitter', href: 'https://x.com/Gunawan96429055', color: 'text-blue-400 hover:text-blue-600' },
    { icon: FaMedium, text: 'Medium', href: 'https://medium.com/@gunawanwibisono4712', color: 'text-gray-700 hover:text-gray-900' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Social Media Icons */}
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Connect With Me</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} onClick={link.onClick} target="_blank" rel="noopener noreferrer" 
                   className={`flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg ${link.color}`}>
                  <link.icon className="w-8 h-8 mb-2" />
                  <span className="text-sm font-medium">{link.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md h-36 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"></textarea>
              </div>
              <button type="submit" 
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}