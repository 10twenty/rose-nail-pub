'use client';

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
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--primary-color) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.05
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{description}</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className={`transform transition-all duration-1000 delay-100 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-primary mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Visit Us</h3>
              <p className="text-gray-600">{info.address.street}</p>
              <p className="text-gray-600">{info.address.city}</p>
            </div>
          </div>

          {/* Email Card */}
          <div className={`transform transition-all duration-1000 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-primary mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Email Us</h3>
              <button
                onClick={handleEmailClick}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                {info.email}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-primary mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Call Us</h3>
              <p className="text-gray-600">{info.phone}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <span>{cta}</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-16 w-32 h-32">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 -right-16 w-48 h-48">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>
      </div>
    </section>
  );
} 