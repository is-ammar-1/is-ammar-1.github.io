import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/akattire'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/akattire'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/akattire'
  }
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