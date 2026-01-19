'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#partners', label: 'Partners' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ScoreUp RiseUp"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-[#1f2937] transition-colors hover:text-[#1e40af]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#0a2540]" />
          ) : (
            <Menu className="h-6 w-6 text-[#0a2540]" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-blue-100 bg-white md:hidden"
        >
          <ul className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium text-[#1f2937] transition-colors hover:text-[#1e40af]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
