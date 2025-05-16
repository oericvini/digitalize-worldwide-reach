
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl gradient-text">Digitalize</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="text-foreground/80 hover:text-foreground transition-colors">Funcionalidades</Link>
          <Link to="/#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Depoimentos</Link>
          <Link to="/#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Planos</Link>
          <Link to="/#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contato</Link>
        </nav>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hover-up">Login</Button>
          <Button className="bg-gradient-to-r from-digitalize-blue to-digitalize-indigo hover-up">Comece Agora!</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/50">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link to="/#features" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#testimonials" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link to="/#pricing" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/#contact" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 pb-4">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full bg-gradient-to-r from-digitalize-blue to-digitalize-indigo">Comece Agora!</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
