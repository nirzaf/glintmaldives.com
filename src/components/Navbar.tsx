import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import clsx from 'clsx';
import { useScrollTo } from '../hooks/useScrollTo';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const scrollTo = useScrollTo();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    const elementId = href.substring(1);
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={clsx(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-secondary font-bold text-xl">G</span>
              </div>
              <div>
                <h2 className={clsx(
                  'text-2xl font-bold transition-colors duration-300',
                  isScrolled ? 'text-secondary' : 'text-white'
                )}>
                  Glint <span className="text-primary">Maldives</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = 
                  (link.href === '/' && location.pathname === '/') ||
                  (link.href.startsWith('/#') && activeSection === link.href.substring(2)) ||
                  (link.href === location.pathname);

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={clsx(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group',
                      isScrolled
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-gray-200 hover:text-white',
                      isActive && (isScrolled ? 'text-primary' : 'text-white')
                    )}
                  >
                    {link.name}
                    <span className={clsx(
                      'absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300',
                      isActive && 'scale-x-100'
                    )} />
                  </button>
                );
              })}
              <button
                onClick={() => handleNavigation('/contact')}
                className={clsx(
                  'ml-4 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  isScrolled
                    ? 'bg-primary text-secondary hover:bg-secondary hover:text-white'
                    : 'bg-primary/20 text-white hover:bg-primary hover:text-secondary'
                )}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                'inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-300',
                isScrolled
                  ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  : 'text-white hover:text-primary hover:bg-white/10'
              )}
            >
              {isOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <RiMenu4Line className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Transition
        show={isOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform -translate-y-full opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition duration-200 ease-in"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-full opacity-0"
      >
        <div className="md:hidden">
          <div className={clsx(
            'px-2 pt-2 pb-3 space-y-1 shadow-lg',
            isScrolled ? 'bg-white' : 'bg-secondary/95 backdrop-blur-md'
          )}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className={clsx(
                  'block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300',
                  isScrolled
                    ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                )}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/contact')}
              className={clsx(
                'block w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-center',
                isScrolled
                  ? 'bg-primary text-secondary hover:bg-secondary hover:text-white'
                  : 'bg-primary/20 text-white hover:bg-primary hover:text-secondary'
              )}
            >
              Get Started
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
