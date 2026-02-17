export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  subtitle: string;
  icon: string; // Placeholder for now, can be an SVG path or Lucide component name
};

export type Product = {
  id: string;
  title: string;
  price: string;
  categorySlug: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Illustrations',
    slug: 'illustrations',
    description: 'Beautiful, hand-crafted illustrations for your next project. Perfect for websites, apps, and presentations.',
    subtitle: 'Dimensional elements',
    icon: 'M9.75 3.25L2.25 12h7.5l-2.5 11.25L14.75 14h-7.5l2.5-10.75z', // Lightning bolt/abstract shape
  },
  {
    id: '2',
    name: '3D Assets',
    slug: '3d-assets',
    description: 'Immersive 3D elements to add depth and realism to your designs.',
    subtitle: 'Immersive elements',
    icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', // Cube
  },
  {
    id: '3',
    name: 'Framer Templates',
    slug: 'framer-templates',
    description: 'Professionally designed Framer templates to kickstart your website.',
    subtitle: 'Easy-to-edit websites',
    icon: 'M4 4h16v16H4V4z', // Square/Frame
  },
  {
    id: '4',
    name: 'Webflow Templates',
    slug: 'webflow-templates',
    description: 'High-quality Webflow templates for building stunning responsive websites.',
    subtitle: 'Perfect looking websites',
    icon: 'M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z', // Layers/Stack
  },
];

export const SIDEBAR_CATEGORIES: Category[] = [
  {
    id: '0',
    name: 'All Products',
    slug: 'all-products',
    description: 'Browse our complete collection of high-quality digital resources.',
    subtitle: 'Everything you need',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', // Grid icon
  },
  ...CATEGORIES,
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Abstract 3D Shapes Pack',
    price: '$24',
    categorySlug: 'illustrations',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Abstract+Shapes',
  },
  {
    id: '2',
    title: 'Minimalist Character Set',
    price: 'Free',
    categorySlug: 'illustrations',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Characters',
  },
  {
    id: '3',
    title: 'Tech & Startup Illustrations',
    price: '$32',
    categorySlug: 'illustrations',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Tech+Startup',
  },
  {
    id: '4',
    title: 'Hand-drawn Icons',
    price: '$18',
    categorySlug: 'illustrations',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Hand+Drawn',
  },
  // 3D Assets
  {
    id: '5',
    title: 'Abstract Shapes Vol. 2',
    price: '$29',
    categorySlug: '3d-assets',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=3D+Shapes',
  },
  {
    id: '6',
    title: 'Glassmorphism Elements',
    price: '$35',
    categorySlug: '3d-assets',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Glass+Elements',
  },
  {
    id: '7',
    title: 'Geometric Patterns 3D',
    price: '$22',
    categorySlug: '3d-assets',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Geometric+3D',
  },
  {
    id: '8',
    title: 'Minimalist Cubes',
    price: 'Free',
    categorySlug: '3d-assets',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Minimalist+Cubes',
  },
  // Framer Templates
  {
    id: '9',
    title: 'Agency Portfolio Template',
    price: '$49',
    categorySlug: 'framer-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Agency+Portfolio',
  },
  {
    id: '10',
    title: 'SaaS Landing Page',
    price: '$59',
    categorySlug: 'framer-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=SaaS+Landing',
  },
  {
    id: '11',
    title: 'Personal Blog Theme',
    price: '$29',
    categorySlug: 'framer-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Blog+Theme',
  },
  {
    id: '12',
    title: 'E-commerce Starter',
    price: '$69',
    categorySlug: 'framer-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=E-commerce',
  },
  // Webflow Templates
  {
    id: '13',
    title: 'Corporate Business',
    price: '$79',
    categorySlug: 'webflow-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Corporate+Biz',
  },
  {
    id: '14',
    title: 'Creative Studio',
    price: '$49',
    categorySlug: 'webflow-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Creative+Studio',
  },
  {
    id: '15',
    title: 'Photography Portfolio',
    price: '$39',
    categorySlug: 'webflow-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Photo+Portfolio',
  },
  {
    id: '16',
    title: 'Startup Launch Kit',
    price: '$59',
    categorySlug: 'webflow-templates',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Startup+Kit',
  },
];

