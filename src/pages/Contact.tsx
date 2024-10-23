import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-xl mb-8">
        We're here to answer any questions you may have about Nigeria's solid minerals sector. Reach out to us using the contact information below or fill out the form, and we'll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-4 text-green-600" />
              <p>Ministry of Solid Minerals, Federal Secretariat Complex, Abuja, Nigeria</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-green-600" />
              <p>+234 (0) 123 456 7890</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-green-600" />
              <p>info@solidminerals.gov.ng</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-6">Office Hours</h2>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Send Message <Send className="ml-2" />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Visit Our Offices</h2>
        <p className="mb-4">
          Our headquarters are located in the heart of Abuja, Nigeria's capital city. We also have regional offices across the country to better serve you.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5384721251845!2d7.495679615124265!3d9.057277793488126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5265b1bfd%3A0x2b64e8f9d7a8b6f3!2sFederal%20Secretariat%20Complex!5e0!3m2!1sen!2sng!4v1620147332408!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </animated.div>
  );
};

export default Contact;