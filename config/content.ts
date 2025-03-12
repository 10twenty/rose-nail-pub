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
    primaryColor: '#FF69B4', // Hot Pink - feminine and spa-like
  },
  
  companyName: "Rose Nail Pub",
  
  hero: {
    title: "Rose Nail Pub",
    description: "Your Premium Beauty & Wellness Destination in Asia",
    image: {
      src: "/images/hero-spa.jpg",
      alt: "Elegant spa interior with modern decor and peaceful ambiance",
      width: 1920,
      height: 1080
    },
    cta: "Book Your Session",
  },

  products: {
    title: "Featured Products",
    description: "Discover our exclusive collection of premium beauty essences, carefully selected for your wellness journey.",
    items: [
      {
        title: 'Louise Aroma Lymphatic Essence',
        description: 'A powerful blend of natural ingredients designed to enhance lymphatic drainage and promote overall wellness.',
        benefit: 'Enhanced Circulation',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80',
        isNew: true,
        bestseller: true
      },
      {
        title: 'Louise Aroma Body Designer Essence',
        description: 'Premium aromatherapy essence that helps sculpt and tone while providing deep relaxation.',
        benefit: 'Body Contouring',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80',
        isNew: false,
        bestseller: true
      }
    ] as Product[]
  },

  about: {
    title: "About Us",
    description: "At Rose Nail Pub, we've been delivering premium beauty and wellness services across Asia since 2015. Our commitment to excellence, coupled with our innovative treatments and professional expertise, has made us a trusted name in the beauty industry. We blend traditional techniques with modern innovations to provide an unparalleled spa experience.",
    quote: "Beauty meets wellness, excellence meets comfort",
    features: [
      {
        title: 'Professional Service',
        description: 'Our certified beauty specialists ensure premium service quality.',
        icon: {
          svg: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
        }
      },
      {
        title: 'Premium Products',
        description: 'Access to over 50 exclusive beauty and wellness products.',
        icon: {
          svg: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>'
        }
      },
      {
        title: '8+ Years Experience',
        description: 'Serving clients across Asia with unparalleled expertise since 2015.',
        icon: {
          svg: '<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 2rem; height: 2rem;"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        }
      }
    ] as Feature[]
  },

  whyUs: {
    title: "Why Choose Us",
    description: "Experience the perfect blend of luxury and wellness with our premium services and products.",
    features: [
      {
        title: "Professional Excellence",
        description: "Our team of certified specialists ensures the highest quality of service and care.",
        icon: {
          svg: '<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
        }
      },
      {
        title: "Premium Products",
        description: "Exclusive access to high-quality beauty and wellness products.",
        icon: {
          svg: '<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>'
        }
      },
      {
        title: "Personalized Care",
        description: "Tailored treatments and services to meet your unique beauty needs.",
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
        value: 50,
        suffix: "+",
        label: "Products Available"
      }
    ] as StatItem[]
  },

  reviews: {
    title: "Client Testimonials",
    description: "Hear from our valued clients about their experience with our services",
    items: [
      {
        name: "Sarah Chen",
        role: "Regular Client",
        text: "The lymphatic essence has transformed my wellness routine. The staff's expertise and attention to detail are exceptional."
      },
      {
        name: "Michelle Wong",
        role: "Beauty Enthusiast",
        text: "Rose Nail Pub offers the perfect combination of luxury and results. Their body designer essence is a game-changer!"
      }
    ] as Review[]
  },

  contact: {
    title: "Contact Us",
    description: "Connect with our specialists to begin your wellness journey.",
    info: {
      address: {
        street: "Room A1, 10/F, NCB Innovation Centre, 888 Lai Chi Kok Road",
        city: "Cheung Sha Wan, Kowloon, Hong Kong"
      },
      email: "info@target-fox.xom",
      phone: "+852 63796758"
    },
    cta: "Book Your Session"
  },

  footer: {
    copyright: "Rose Nail Pub. All rights reserved."
  }
} 