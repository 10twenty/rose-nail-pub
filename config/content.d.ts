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

export interface Content {
  theme: {
    primaryColor: string;
  };
  companyName: string;
  hero: {
    title: string;
    description: string;
    cta: string;
    image: {
      src: string;
      alt: string;
    };
  };
  products: {
    title: string;
    description: string;
    items: Product[];
  };
  about: {
    title: string;
    description: string;
    quote: string;
    features: Feature[];
  };
  whyUs: {
    title: string;
    description: string;
    features: Feature[];
  };
  stats: {
    items: StatItem[];
  };
  reviews: {
    title: string;
    description: string;
    items: Review[];
  };
  contact: {
    title: string;
    description: string;
    info: ContactInfo;
    cta: string;
  };
  footer: {
    copyright: string;
  };
}

export const content: Content; 