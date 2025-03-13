'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from '../CountUp';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface StatsSectionProps {
  items: StatItem[];
}

export default function StatsSection({ items }: StatsSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-color)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-5" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {items.map((stat, index) => (
            <div
              key={stat.label}
              className={`transform transition-all duration-1000 delay-${index * 200} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="relative group">
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center">
                  {/* Number */}
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* Label */}
                  <p className="text-xl text-gray-600">{stat.label}</p>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/20 group-hover:w-32 transition-all duration-300" />
                </div>

                {/* Hover Effect */}
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>
      </div>
    </section>
  );
} 