'use client';

import { useInView } from 'react-intersection-observer';

interface Feature {
  title: string;
  description: string;
  icon: {
    svg: string;
  };
}

interface AboutSectionProps {
  title: string;
  description: string;
  quote: string;
  features: Feature[];
}

export default function AboutSection({ title, description, quote, features }: AboutSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-white" />
      
      {/* Animated Mesh Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${`var(--primary-color)`} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transform transition-all duration-1000 delay-${index * 200} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 text-primary transform transition-transform duration-300 hover:scale-110">
                  <div dangerouslySetInnerHTML={{ __html: feature.icon.svg }} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`mt-20 max-w-2xl mx-auto text-center transform transition-all duration-1000 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-primary">
            "{quote}"
          </blockquote>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
} 