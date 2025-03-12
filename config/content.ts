interface Feature {
  title: string;
  description: string;
  icon: {
    svg: string;
  };
}

interface Product {
  title: string;
  description: string;
  price: number;
  benefit: string;
  image: string;
  isNew?: boolean;
  bestseller?: boolean;
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

interface ContactInfo {
  address: {
    street: string;
    city: string;
  };
  email: string;
  phone: string;
}

export const content = {
  theme: {
    primaryColor: '#D4AF37', // Rich Metallic Gold - classic luxury color
  },
  
  companyName: "Rolex",
  
  hero: {
    title: "Rolex",
    description: "A Crown for Every Achievement",
    cta: "Discover Our Collection",
    image: {
      src: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80",
      alt: "Premium Rolex timepiece displaying exceptional craftsmanship and detail"
    }
  },

  products: {
    title: "Featured Timepieces",
    description: "Discover our exceptional collection of precision timepieces, crafted with unparalleled expertise and sophistication.",
    items: [
      {
        title: 'Daytona',
        description: 'The ultimate chronograph, born for racing. Features a tachymetric scale and exceptional precision with self-winding mechanical movement.',
        price: 140000,
        benefit: 'Chronograph Excellence',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80',
        isNew: true,
        bestseller: true
      },
      {
        title: 'GMT Master II',
        description: 'The watch of choice for world travelers. Displays multiple time zones simultaneously with its distinctive bidirectional rotatable bezel.',
        price: 126000,
        benefit: 'Dual Time Zone Precision',
        image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80',
        isNew: false,
        bestseller: true
      }
    ] as Product[]
  },

  about: {
    title: "About Us",
    description: "For over 8 years, we have been bringing the prestige of Rolex timepieces to discerning collectors and enthusiasts. Our commitment to excellence and authenticity has earned the trust of over 500 satisfied clients.",
    quote: "Time never stops, excellence endures",
    features: [
      {
        title: 'Expert Authentication',
        description: 'Our certified specialists ensure the authenticity of every timepiece.',
        icon: {
          svg: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
        }
      },
      {
        title: 'Curated Collection',
        description: 'Access to over 200 premium timepieces from the most coveted collections.',
        icon: {
          svg: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>'
        }
      },
      {
        title: '8+ Years Experience',
        description: 'Serving Hong Kong\'s elite with unparalleled expertise since 2015.',
        icon: {
          svg: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        }
      }
    ] as Feature[]
  },

  whyUs: {
    title: "Why Choose Us",
    description: "Experience the epitome of luxury timepiece acquisition with our unparalleled service and expertise.",
    features: [
      {
        title: "Certified Authenticity",
        description: "Every timepiece in our collection is meticulously verified for authenticity and condition.",
        icon: {
          svg: '<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
        }
      },
      {
        title: "Expert Consultation",
        description: "Our horological experts provide personalized guidance for your collection.",
        icon: {
          svg: '<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>'
        }
      },
      {
        title: "After-Sales Service",
        description: "Comprehensive support and service for your precious timepieces.",
        icon: {
          svg: '<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        }
      }
    ]
  },

  stats: {
    items: [
      {
        value: 500,
        suffix: "+",
        label: "Happy Clients"
      },
      {
        value: 8,
        suffix: "+",
        label: "Years Experience"
      },
      {
        value: 200,
        suffix: "+",
        label: "Products Available"
      }
    ] as StatItem[]
  },

  reviews: {
    title: "Client Testimonials",
    description: "Hear from our distinguished clientele about their experience with our timepieces",
    items: [
      {
        name: "James Chen",
        role: "Watch Collector",
        text: "Their expertise in Rolex timepieces is unmatched. The Daytona I acquired through them is absolutely perfect."
      },
      {
        name: "Victoria Wong",
        role: "Luxury Enthusiast",
        text: "The GMT Master II from their collection exceeded my expectations. Their attention to detail and authentication process gives me complete confidence."
      }
    ] as Review[]
  },

  contact: {
    title: "Contact Us",
    description: "Connect with our specialists to explore our exceptional collection of timepieces.",
    info: {
      address: {
        street: "Room A1, 10/F, NCB Innovation Centre, 888 Lai Chi Kok Road",
        city: "Cheung Sha Wan, Kowloon, Hong Kong"
      },
      email: "info@target-fox.xom",
      phone: "+852 63796758"
    },
    cta: "Schedule a Consultation"
  },

  footer: {
    copyright: "Rolex. All rights reserved."
  }
} 