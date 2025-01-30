import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Bot, Code2, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-black/20 sticky top-0 z-50 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
            AviCogX
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
            <Link to="/documentation" className="hover:text-emerald-400 transition">Documentation</Link>
            <Link to="/tutorials" className="hover:text-emerald-400 transition">Tutorials</Link>
            <Link to="/bot-details" className="hover:text-emerald-400 transition">Bot Details</Link>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/rareHop" className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://instagram.com/zenitsu.dev" className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://avioo.vercel.app" className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">
                <Bot size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-emerald-500/20 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-emerald-500/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block hover:text-emerald-400 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/documentation" className="block hover:text-emerald-400 transition" onClick={() => setIsMenuOpen(false)}>Documentation</Link>
            <Link to="/tutorials" className="block hover:text-emerald-400 transition" onClick={() => setIsMenuOpen(false)}>Tutorials</Link>
            <Link to="/bot-details" className="block hover:text-emerald-400 transition" onClick={() => setIsMenuOpen(false)}>Bot Details</Link>
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-emerald-500/20">
              <a href="https://github.com/rareHop" className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://instagram.com/zenitsu.dev" className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://avioo.vercel.app" className="hover:text-emerald-400 transition" target="_blank" rel="noopener noreferrer">
                <Bot size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}