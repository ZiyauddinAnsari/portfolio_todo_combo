import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Todos', href: '/todos' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: '🔗',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '💼',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '🐦',
  },
  {
    name: 'Email',
    href: 'mailto:contact@example.com',
    icon: '✉️',
  },
];