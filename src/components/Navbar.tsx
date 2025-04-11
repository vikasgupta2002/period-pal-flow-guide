
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Heart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-pink-dark" />
          <span className="font-bold text-xl text-pink-dark">
            PERIOD PAL
          </span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('tracker')}>Track Your Flow</NavLink>
          <NavLink onClick={() => scrollToSection('myths')}>Myth Busters</NavLink>
          <NavLink onClick={() => scrollToSection('guide')}>Beginner's Guide</NavLink>
          <NavLink onClick={() => scrollToSection('feelgood')}>Feel-Good</NavLink>
          <Button 
            variant="outline" 
            className="rounded-full bg-lavender-light hover:bg-lavender text-lavender-dark hover:text-lavender-dark font-medium" 
            size="sm"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Log In
          </Button>
        </nav>

        {/* Mobile navigation overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 z-40 flex flex-col p-6 transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex justify-end">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="h-8 w-8"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-6 flex-grow">
            <MobileNavLink onClick={() => scrollToSection('home')}>Home</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('tracker')}>Track Your Flow</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('myths')}>Myth Busters</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('guide')}>Beginner's Guide</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('feelgood')}>Feel-Good</MobileNavLink>
            <Button 
              variant="outline" 
              className="rounded-full bg-lavender-light hover:bg-lavender text-lavender-dark hover:text-lavender-dark font-medium w-full max-w-xs mt-4" 
              size="sm"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Log In
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      className="text-gray-600 hover:text-pink-dark font-medium transition-colors"
    >
      {children}
    </button>
  );
};

const MobileNavLink = ({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      className="text-xl font-medium text-gray-800 hover:text-pink-dark transition-colors"
    >
      {children}
    </button>
  );
};

export default Navbar;
