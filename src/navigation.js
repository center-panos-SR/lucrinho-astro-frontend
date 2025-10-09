export const headerData = {
  links: [
    {
      text: 'Homes',
      href: '#',
      links: [
        { text: 'SaaS', href: '#' },
        { text: 'Startup', href: '#' },
        { text: 'Mobile App', href: '#' },
        { text: 'Personal', href: '/' },
      ],
    },
    {
      text: 'Pages',
      href: '#',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Services', href: '/servicos' },
        { text: 'Pricing', href: '#' },
        { text: 'About us', href: '/sobre' },
        { text: 'Contact', href: '/contato' },
        { text: 'Terms', href: '/termos' },
        { text: 'Privacy policy', href: '/privacidade' },
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Widgets',
      href: '#components',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/sobre' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/termos' },
    { text: 'Privacy Policy', href: '/privacidade' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: '𝕏', href: '#' },
    { ariaLabel: 'Instagram', icon: '📷', href: '#' },
    { ariaLabel: 'Facebook', icon: '👥', href: '#' },
    { ariaLabel: 'RSS', icon: '📡', href: '/rss.xml' },
    { ariaLabel: 'Github', icon: '💻', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-blue-400" href="https://onwidget.com/"> Arthelokyo</a> · All rights reserved.
  `,
};

