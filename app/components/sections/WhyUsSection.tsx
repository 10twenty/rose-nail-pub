'use client';

import { useInView } from 'react-intersection-observer';

interface Feature {
  title: string;
  description: string;
  icon: {
    svg: string;
  };
}

interface WhyUsSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

export default function WhyUsSection({ title, description, features }: WhyUsSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="why-us" ref={ref} className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, var(--primary-color) 1px, transparent 1px), linear-gradient(var(--primary-color) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.05
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transform transition-all duration-1000 delay-${index * 200} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="relative group">
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 text-primary transform transition-transform duration-300 group-hover:scale-110">
                    <div dangerouslySetInnerHTML={{ __html: feature.icon.svg }} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {/* Decorative Background */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              </div>
            </div>
          ))}
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