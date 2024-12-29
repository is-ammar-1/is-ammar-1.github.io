import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Newsletter from '../home/Newsletter';

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com', label: 'Youtube' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-neutral-900 py-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Newsletter Section */}
          <div className="flex-1 w-full md:max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-xl font-serif text-white">Join Our Newsletter</h2>
              <div className="h-px flex-1 bg-neutral-800"></div>
            </div>
            <Newsletter />
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 md:mr-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition"
                aria-label={link.label}
              >
                <div className="transform transition-transform hover:-translate-y-0.5">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
