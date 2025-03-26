import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chat", path: "/chat" },
    { name: "Features", path: "/#features" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 glassmorphism-dark' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 transition-transform hover:scale-[1.02]"
            >
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary text-primary-foreground font-semibold text-2xl">
                E
              </div>
              <span className="text-xl font-medium tracking-tight">
                Exo-vision <span className="font-semibold">AI</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${location.pathname === item.path
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="ml-4 pl-4 border-l">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleDarkMode}
                  className="rounded-full"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </div>
              
              <Link to="/chat">
                <Button className="ml-4 animate-pulse-slow">
                  Try Exo-vision AI
                </Button>
              </Link>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleDarkMode}
                className="mr-2 rounded-full"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobile && showMobileMenu && (
        <div className="md:hidden glassmorphism-dark rounded-b-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${location.pathname === item.path
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link to="/chat" className="block pt-4">
              <Button className="w-full">
                Try Exo-vision AI
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
      }
