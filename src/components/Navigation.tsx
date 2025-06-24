'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold text-white hover:text-accent transition-colors">
            Will M
          </Link>
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-accent ${
                  pathname === item.href ? 'text-accent' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;