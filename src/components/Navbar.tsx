import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { trackCTAClick } from '@/lib/gtm';

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Preço', href: '#preco' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll || current < 80);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    trackCTAClick('navbar');
    scrollTo('#cta-final');
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#" className="flex items-center gap-2">
          <span className="bg-primary text-primary-foreground font-heading font-bold text-lg px-2 py-0.5 rounded-sm skew-x-[-6deg] inline-block">PA
          </span>
            <span className="font-display font-bold text-foreground text-lg hidden sm:block">PaginaAbsurda</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {l.label}
              </button>
            ))}
            <button onClick={handleCtaClick} className="bg-primary text-primary-foreground font-bold text-sm px-5 py-2 rounded btn-pulse transition-all">
              Quero a minha
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-border">
              <span className="font-display font-bold text-foreground text-lg">PáginaAbsurda</span>
              <button onClick={() => setMobileOpen(false)}><X size={24} className="text-foreground" /></button>
            </div>
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="text-foreground text-xl font-display font-bold text-left">
                  {l.label}
                </button>
              ))}
              <button onClick={handleCtaClick} className="bg-primary text-primary-foreground font-bold text-lg px-6 py-3 rounded mt-4">
                Quero a minha
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
