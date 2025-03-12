import Image from 'next/image'
import Navbar from './components/Navbar'
import ScrollAnimation from './components/ScrollAnimation'
import CountUp from './components/CountUp'
import ProductSection from './components/ProductSection'
import ScrollButton from './components/ScrollButton'
import Footer from './components/Footer'
import { content } from '../config/content'

// Import new section components
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import WhyUsSection from './components/sections/WhyUsSection'
import StatsSection from './components/sections/StatsSection'
import ReviewsSection from './components/sections/ReviewsSection'
import ContactSection from './components/sections/ContactSection'

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
      <HeroSection {...content.hero} />

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
              {content.products.items.map((product, index) => (
                <ProductSection key={product.title} {...product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection {...content.about} />

      {/* Why Choose Us Section */}
      <WhyUsSection {...content.whyUs} />

      {/* Stats Section */}
      <StatsSection items={content.stats.items} />

      {/* Reviews Section */}
      <ReviewsSection {...content.reviews} />

      {/* Contact Section */}
      <ContactSection {...content.contact} />

      <Footer />
    </div>
  )
} 