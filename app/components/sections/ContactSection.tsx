'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContactInfo {
  address: {
    street: string;
    city: string;
  };
  email: string;
  phone: string;
}

interface ContactSectionProps {
  title: string;
  description: string;
  info: ContactInfo;
  cta: string;
}

export default function ContactSection({ title, description, info, cta }: ContactSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleEmailClick = () => {
    window.location.href = `mailto:${info.email}`;
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 bg-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">{info.address.street}</p>
                  <p className="text-gray-600">{info.address.city}</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmailClick}>
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">{info.email}</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">{info.phone}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleEmailClick}
              className="w-full bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              <span className="flex items-center justify-center">
                <span>{cta}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8661836380444!2d114.14742661744384!3d22.33592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400b0b8620c51%3A0x81ee0978bde5f8ba!2sNCB%20Innovation%20Centre!5e0!3m2!1sen!2sus!4v1647331911111!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 