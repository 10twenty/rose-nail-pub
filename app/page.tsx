import Image from 'next/image'
import Navbar from './components/Navbar'
import ScrollAnimation from './components/ScrollAnimation'
import CountUp from './components/CountUp'
import ProductSection from './components/ProductSection'
import ScrollButton from './components/ScrollButton'
import Footer from './components/Footer'
import { content } from '../config/content'

interface Product {
  title: string;
  description: string;
  price: number;
  benefit: string;
  image: string;
  isNew?: boolean;
  bestseller?: boolean;
}

interface Feature {
  title: string;
  description: string;
  icon: {
    svg: string;
  };
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface Review {
  name: string;
  role: string;
  text: string;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollAnimation />
      <Navbar companyName={content.companyName} />
      
      {/* Hero Section */}
      <div className="hero-section">
        {/* Main Image Layer */}
        <div className="hero-slide">
          <Image
            src={content.hero.image.src}
            alt={content.hero.image.alt}
            fill
            className="hero-image object-cover"
            priority
          />
          <div className="hero-overlay bg-black/60" />
        </div>

        {/* Particle Effect Layer */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* Light Rays Layer */}
        <div className="light-rays" />

        {/* Content Layer */}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container">
            <div className="max-w-4xl mx-auto hero-content">
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-serif text-white mb-8">
                {content.hero.title}
              </h1>
              <p className="hero-description text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                {content.hero.description}
              </p>
              <ScrollButton
                targetId="services"
                className="hero-button relative inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-medium group overflow-hidden hover-glow-intense"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{content.hero.cta}</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </ScrollButton>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">{content.products.title}</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              {content.products.description}
            </p>
            
            <div className="space-y-32">
              {content.products.items.map((product: Product, index: number) => (
                <ProductSection key={product.title} {...product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Mesh gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#f0f7ff_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(at_bottom_right,#e6f0ff_0%,transparent_50%)]"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="container relative">
          <div className="max-w-7xl mx-auto">
            {/* Main content */}
            <div className="relative">
              {/* Heading with animated line */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">{content.about.title}</h2>
                <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
                  {content.about.description}
                </p>
              </div>

              {/* Features in magazine layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Left column */}
                <div className="space-y-16 md:space-y-24">
                  {content.about.features.slice(0, 2).map((feature: Feature, index: number) => (
                    <div key={feature.title} className="relative slide-in-left group">
                      <div className="flex items-start gap-8">
                        {/* Icon container with enhanced animation */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                          <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                            <div 
                              className="text-primary transform group-hover:scale-125 transition-all duration-500"
                              dangerouslySetInnerHTML={{ __html: feature.icon.svg }}
                            />
                          </div>
                          <div className="absolute -inset-2 border border-primary/10 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        </div>
                        
                        {/* Content with enhanced typography */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-serif mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                            <div className="h-px w-12 bg-primary/30 mt-2 group-hover:w-full transition-all duration-700"></div>
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right column with offset */}
                <div className="space-y-16 md:space-y-24 md:mt-32">
                  {content.about.features.slice(2).map((feature: Feature, index: number) => (
                    <div key={feature.title} className="relative slide-in-right group">
                      <div className="flex items-start gap-8">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                          <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                            <div 
                              className="text-primary transform group-hover:scale-125 transition-all duration-500"
                              dangerouslySetInnerHTML={{ __html: feature.icon.svg }}
                            />
                          </div>
                          <div className="absolute -inset-2 border border-primary/10 rounded-2xl transform rotate-45 group-hover:rotate-0 transition-transform duration-700"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-serif mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                            <div className="h-px w-12 bg-primary/30 mt-2 group-hover:w-full transition-all duration-700"></div>
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Decorative quote with enhanced styling */}
                  <div className="relative pl-8 slide-in-right delay-300 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500"></div>
                    <blockquote className="text-2xl font-serif text-primary/80 italic group-hover:text-primary transition-colors duration-500">
                      "{content.about.quote}"
                      <div className="h-px w-24 bg-primary/20 mt-4 group-hover:w-full transition-all duration-700"></div>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-12 w-24 h-24 border border-primary/10 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-1/4 -right-12 w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">{content.whyUs.title}</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              {content.whyUs.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyUs.features.map((feature: Feature, index: number) => (
              <div key={feature.title} className="slide-in-left stagger-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-primary text-4xl mb-4 rotate-in"
                    dangerouslySetInnerHTML={{ __html: feature.icon.svg }}
                  />
                  <h3 className="text-2xl font-serif mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 transform -skew-y-6"></div>
            <div className="container relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 mt-16">
                {content.stats.items.map((stat: StatItem, index: number) => (
                  <div key={stat.label} className="scale-fade stagger-2 group flex flex-col items-center">
                    <div className="text-5xl font-serif text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                    <div className="w-16 h-1 bg-primary/30 mt-3 rounded-full transition-all duration-300 group-hover:w-24 group-hover:bg-primary"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">{content.reviews.title}</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              {content.reviews.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              {content.reviews.items.map((review: Review, index: number) => (
                <div key={review.name} className="group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="bg-white rounded-xl p-8 shadow-sm relative transform transition-all duration-500 hover:-translate-y-2">
                      <div className="flex items-center mb-8">
                        <div className="flex flex-col">
                          <h3 className="font-serif text-xl mb-1">{review.name}</h3>
                          <p className="text-primary/80 text-sm font-medium">{review.role}</p>
                        </div>
                      </div>
                      <svg className="text-primary/10 w-16 h-16 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                        {review.text}
                      </blockquote>
                      <div className="flex text-primary space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 slide-in-down">{content.contact.title}</h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto slide-in-up stagger-1">
              {content.contact.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-6">
                {/* Location Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">{content.contact.info.address.street}</p>
                      <p className="text-gray-600">{content.contact.info.address.city}</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-gray-900">Email Us</h3>
                      <a 
                        href={`mailto:${content.contact.info.email}`}
                        className="text-gray-600 hover:text-primary transition-colors group inline-flex items-center"
                      >
                        {content.contact.info.email}
                        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 rounded-full p-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 text-gray-900">Call Us</h3>
                      <p className="text-gray-600">{content.contact.info.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 text-center md:text-left">
                  <a
                    href={`mailto:${content.contact.info.email}`}
                    className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg group"
                  >
                    <span>{content.contact.cta}</span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${content.contact.info.address.street}, ${content.contact.info.address.city}`)}&z=16&t=m&output=embed&iwloc=near`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 