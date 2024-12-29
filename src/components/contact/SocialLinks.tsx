import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/ak_attire_'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/ak.attire.official'
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gold-500 transition"
        >
          <social.icon className="h-6 w-6" />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
}