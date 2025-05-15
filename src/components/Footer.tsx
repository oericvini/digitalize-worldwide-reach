
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-2xl gradient-text">Digitalize</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Helping physical stores transform into global digital businesses.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-4.701-5.299c1.101 1.101 1.9 2.4 2.3 3.8.5 1.5.5 3.1 0 4.6-.4 1.4-1.2 2.699-2.3 3.8-1.101 1.1-2.4 1.899-3.8 2.3-1.5.5-3.1.5-4.6 0-1.4-.4-2.699-1.2-3.8-2.3-1.1-1.101-1.9-2.4-2.3-3.8-.5-1.5-.5-3.1 0-4.6.4-1.4 1.2-2.699 2.3-3.8 1.101-1.1 2.4-1.9 3.8-2.3 1.5-.5 3.1-.5 4.6 0 1.4.4 2.699 1.2 3.8 2.3z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Integrations', 'Updates', 'Roadmap'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Customers', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'Support', 'API', 'Community'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Digitalize. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
