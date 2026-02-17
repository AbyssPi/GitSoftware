export type Category = {
  id: string;
  name: string;
  subtitle: string;
  icon: string; // Placeholder for now, can be an SVG path or Lucide component name
};

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Illustrations',
    subtitle: 'Dimensional elements',
    icon: 'M9.75 3.25L2.25 12h7.5l-2.5 11.25L14.75 14h-7.5l2.5-10.75z', // Lightning bolt/abstract shape
  },
  {
    id: '2',
    name: '3D Assets',
    subtitle: 'Immersive elements',
    icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', // Cube
  },
  {
    id: '3',
    name: 'Framer Templates',
    subtitle: 'Easy-to-edit websites',
    icon: 'M4 4h16v16H4V4z', // Square/Frame
  },
  {
    id: '4',
    name: 'Webflow Templates',
    subtitle: 'Perfect looking websites',
    icon: 'M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z', // Layers/Stack
  },
  {
    id: '5',
    name: 'Figma Templates',
    subtitle: 'User interfaces',
    icon: 'M5.5 2C3.57 2 2 3.57 2 5.5S3.57 9 5.5 9 9 7.43 9 5.5 7.43 2 5.5 2zM5.5 9C3.57 9 2 10.57 2 12.5S3.57 16 5.5 16 9 14.43 9 12.5 10.57 9 12.5 9zM12.5 2C10.57 2 9 3.57 9 5.5S10.57 9 12.5 9 16 7.43 16 5.5 14.43 2 12.5 2zM12.5 9c-1.93 0 -3.5 1.57 -3.5 3.5S10.57 16 12.5 16 16 14.43 16 12.5 14.43 9 12.5 9z', // Figma-ish
  },
  {
    id: '6',
    name: 'UX / UI Kits',
    subtitle: 'Design with purpose',
    icon: 'M4 6h16M4 12h16M4 18h16', // List/Layout
  },
  {
    id: '7',
    name: 'Mockups',
    subtitle: 'Realistic display devices',
    icon: 'M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z', // Phone/Device
  },
  {
    id: '8',
    name: 'Fonts',
    subtitle: 'Expressive typography',
    icon: 'M4 4v16h2v-8h10v8h2V4h-2v6H6V4H4z', // Text/Font symbol
  },
];
