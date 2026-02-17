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
  slug?: string;
  fullDescription?: string;
  versions?: string[];
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
  // Illustrations
  {
    id: '1',
    title: 'Abstract 3D Shapes Pack',
    price: '$24',
    categorySlug: 'illustrations',
    slug: 'abstract-3d-shapes-pack',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Abstract+Shapes',
    fullDescription: 'Elevate your design projects with this comprehensive collection of abstract 3D shapes. Meticulously crafted for versatility, these high-resolution assets are perfect for websites, presentations, and digital art. Each shape is rendered with exquisite detail, offering a modern and sophisticated aesthetic that seamlessly integrates into any creative workflow.',
    versions: ['Basic Pack', 'Standard Pack', 'Premium Pack', 'Pro + Source Files'],
  },
  {
    id: '2',
    title: 'Minimalist Character Set',
    price: 'Free',
    categorySlug: 'illustrations',
    slug: 'minimalist-character-set',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Characters',
    fullDescription: 'A charming collection of minimalist characters designed to bring life and personality to your user interfaces. These vector-based illustrations are fully scalable and easy to customize, making them ideal for onboarding flows, empty states, and marketing materials.',
    versions: ['Free Personal', 'Commercial License', 'Extended License', 'Team License'],
  },
  {
    id: '3',
    title: 'Tech & Startup Illustrations',
    price: '$32',
    categorySlug: 'illustrations',
    slug: 'tech-startup-illustrations',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Tech+Startup',
    fullDescription: 'Modern, tech-focused illustrations tailored for startups and SaaS companies. This pack utilizes a vibrant color palette and isometric perspectives to visualize complex concepts like cloud computing, data analysis, and team collaboration in a clear and engaging way.',
    versions: ['Startup Pack', 'Growth Pack', 'Enterprise Bundle', 'Unlimited Access'],
  },
  {
    id: '4',
    title: 'Hand-drawn Icons',
    price: '$18',
    categorySlug: 'illustrations',
    slug: 'hand-drawn-icons',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Hand+Drawn',
    fullDescription: 'Add a human touch to your digital products with this set of authentic hand-drawn icons. Perfect for lifestyle apps, personal blogs, and creative portfolios, these icons offer a warm and approachable alternative to standard system iconography.',
    versions: ['Essential Set', 'Complete Set', 'Vector Source', 'All Formats'],
  },
  // 3D Assets
  {
    id: '5',
    title: 'Abstract Shapes Vol. 2',
    price: '$29',
    categorySlug: '3d-assets',
    slug: 'abstract-shapes-vol-2',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=3D+Shapes',
    fullDescription: 'The sequel to our best-selling pack, Volume 2 explores organic forms and fluid simulations. These 3D assets are rendered in high-definition pngs with transparent backgrounds, ready to drop into your high-end design projects.',
    versions: ['Standard PNGs', 'High-Res PNGs', 'Blender Files', 'Cinema 4D Files'],
  },
  {
    id: '6',
    title: 'Glassmorphism Elements',
    price: '$35',
    categorySlug: '3d-assets',
    slug: 'glassmorphism-elements',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Glass+Elements',
    fullDescription: 'Stay on trend with this stunning set of glassmorphism 3D elements. Featuring frosted glass textures, soft refractions, and vibrant gradients, these assets are perfect for creating modern, apple-inspired interfaces and backgrounds.',
    versions: ['UI Kit', 'Social Media Pack', 'Full Bundle', 'Source Files'],
  },
  {
    id: '7',
    title: 'Geometric Patterns 3D',
    price: '$22',
    categorySlug: '3d-assets',
    slug: 'geometric-patterns-3d',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Geometric+3D',
    fullDescription: 'A versatile collection of loopable 3D geometric patterns. Great for website backgrounds, video overlays, and packaging design. Includes both static renders and animated video loops.',
    versions: ['Static Pack', 'Animated Pack', '4K Loops', 'Master Collection'],
  },
  {
    id: '8',
    title: 'Minimalist Cubes',
    price: 'Free',
    categorySlug: '3d-assets',
    slug: 'minimalist-cubes',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Minimalist+Cubes',
    fullDescription: 'Simple yet effective. A set of high-quality rendered cubes in various materials and lighting setups. A staple for any designer\'s toolkit when you need quick, clean 3D elements to populate a scene.',
    versions: ['Free Pack', 'Material Pack', 'Lighting Kit', 'Pro Studio'],
  },
  // Framer Templates
  {
    id: '9',
    title: 'Agency Portfolio Template',
    price: '$49',
    categorySlug: 'framer-templates',
    slug: 'agency-portfolio-template',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Agency+Portfolio',
    fullDescription: 'Showcase your agency\'s work in style. This Framer template features scroll animations, a bespoke CMS for case studies, and a modern grid layout that puts your work front and center.',
    versions: ['Single License', 'Team License', 'Agency License', 'Unlimited License'],
  },
  {
    id: '10',
    title: 'SaaS Landing Page',
    price: '$59',
    categorySlug: 'framer-templates',
    slug: 'saas-landing-page',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=SaaS+Landing',
    fullDescription: 'Convert visitors into users with this optimized SaaS landing page template. Includes pricing tables, feature comparisons, andtestimonial sections, all responsive and lightning fast.',
    versions: ['Standard', 'Developer', 'Business', 'Enterprise'],
  },
  {
    id: '11',
    title: 'Personal Blog Theme',
    price: '$29',
    categorySlug: 'framer-templates',
    slug: 'personal-blog-theme',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Blog+Theme',
    fullDescription: 'A clean, typography-focused template for writers and thinkers. Features dark mode support, estimated reading times, and elegant typography settings to make your content shine.',
    versions: ['Writer', 'Pro Writer', 'Publisher', 'Network'],
  },
  {
    id: '12',
    title: 'E-commerce Starter',
    price: '$69',
    categorySlug: 'framer-templates',
    slug: 'e-commerce-starter',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=E-commerce',
    fullDescription: 'Launch your shop today. This template integrates seamlessly with top e-commerce platforms and provides a beautiful storefront, product details pages, and cart functionality right out of the box.',
    versions: ['Starter', 'Shopify Ready', 'Gumroad Ready', 'Full Stack'],
  },
  // Webflow Templates
  {
    id: '13',
    title: 'Corporate Business',
    price: '$79',
    categorySlug: 'webflow-templates',
    slug: 'corporate-business',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Corporate+Biz',
    fullDescription: 'A professional Webflow template designed for corporate entities. Trustworthy and reliable design language with sections for services, about us, team members, and investor relations.',
    versions: ['Single Site', 'CMS Plan', 'Business Plan', 'Enterprise'],
  },
  {
    id: '14',
    title: 'Creative Studio',
    price: '$49',
    categorySlug: 'webflow-templates',
    slug: 'creative-studio',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Creative+Studio',
    fullDescription: 'For studios that want to stand out. This template uses bold typography and large imagery to create an impact. dynamic interactions and smooth page transitions included.',
    versions: ['Freelancer', 'Studio', 'Agency', 'Holding Co'],
  },
  {
    id: '15',
    title: 'Photography Portfolio',
    price: '$39',
    categorySlug: 'webflow-templates',
    slug: 'photography-portfolio',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Photo+Portfolio',
    fullDescription: 'Let your photos speak for themselves. A minimalist portfolio template that gets out of the way. Features fullscreen galleries, lightbox functionality, and client proofing areas.',
    versions: ['Basic', 'Pro', 'Gallery', 'Exhibition'],
  },
  {
    id: '16',
    title: 'Startup Launch Kit',
    price: '$59',
    categorySlug: 'webflow-templates',
    slug: 'startup-launch-kit',
    image: 'https://placehold.co/600x400/eeeeee/999999?text=Startup+Kit',
    fullDescription: 'Everything you need to launch. Landing page, login/signup forms, waitlist capture, and blog - all in one cohesive design system. The perfect starting point for your next big idea.',
    versions: ['MVP', 'Startup', 'Scaleup', 'Unicorn'],
  },
];

