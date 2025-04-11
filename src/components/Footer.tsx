
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thanks for subscribing!');
    const form = e.target as HTMLFormElement;
    form.reset();
  };
  
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-pink-dark" />
              <span className="font-bold text-xl text-pink-dark">
                PERIOD PAL
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Your kind, smart, and stigma-free guide to all things period.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" label="Instagram" />
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" label="Twitter" />
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" label="Facebook" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#tracker" label="Track Your Flow" />
              <FooterLink href="#myths" label="Myth Busters" />
              <FooterLink href="#guide" label="Beginner's Guide" />
              <FooterLink href="#feel-good" label="Feel-Good Section" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="First Period Guide" />
              <FooterLink href="#" label="Product Reviews" />
              <FooterLink href="#" label="Printable Goodies" />
              <FooterLink href="#" label="Community Stories" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4">
              Get monthly tips, stories, and resources delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="rounded-full"
              />
              <Button 
                type="submit" 
                className="w-full rounded-full bg-pink-dark hover:bg-pink text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Period Pal. All rights reserved. Created with 💖
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-600 hover:text-pink-dark transition-colors"
      >
        {label}
      </a>
    </li>
  );
};

const SocialLink = ({ 
  icon, 
  href, 
  label 
}: { 
  icon: React.ReactNode;
  href: string;
  label: string;
}) => {
  return (
    <a 
      href={href}
      className="bg-gray-100 hover:bg-pink-light p-2 rounded-full text-gray-600 hover:text-pink-dark transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;
