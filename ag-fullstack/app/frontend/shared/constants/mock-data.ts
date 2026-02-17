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
];

