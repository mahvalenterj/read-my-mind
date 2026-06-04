import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSecao = () => {
  const fullText = "Sua página na internet\nque traz clientes de verdade.";
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero grid-tech overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-sm mb-8"
        >
          ⚡ Entrega em 3 dias úteis
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-[64px] font-display font-bold text-foreground leading-tight whitespace-pre-line min-h-[120px] md:min-h-[160px]">
          {displayed}
          <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-baseline" />
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="h-[3px] bg-primary mx-auto mt-4 max-w-[300px] origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-text-secondary text-lg md:text-xl mt-8 max-w-xl mx-auto"
        >
          A gente monta em 3 dias. Você só recebe os clientes.
          <br />Sem complicação, sem enrolação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a 
            href="https://checkout.infinitepay.io/marianna-correa?lenc=G0EBYIyUqO34CElmJ9d2tEJ7R6OobUP8TRrayUTVkrlOUaA-PbBAobJqQS0M5Dv6QQ_27WIXfxDslruySnIHWX74Wn0MabhGYyLKXzlhlN1B2kjabifTfqi0PPf8NpkADLGC0AZ7rL2e70iY9rjW38YVgt0eYCBBPdTJ35mJ7GRl6SYw2DRkYfQ3jwaf40cARVloAVxiOYKFQr8LWuxRbcMeyw6n2ygQWBUfRmrPl2OABFYkRMIV6egIahhwTWwZycLBUgkYITHmsJdQu42cxigYDXhySSS2A6WCJRVnWrzuo9pMMGtYFF94FO-OymVKhS7ix-8.v1.8d72a61472c66cd8"
            onClick={() => window.gtag?.('event', 'click_cta_primary', { location: 'hero_section' })}
            className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded text-lg btn-pulse transition-all w-full sm:w-auto"
          >
            Quero minha página absurda
          </a>
          <a 
            href="#como-funciona" 
            onClick={() => window.gtag?.('event', 'click_how_it_works', { location: 'hero_section' })}
            className="border border-foreground text-foreground font-bold px-8 py-4 rounded text-lg hover:bg-foreground/10 transition-all w-full sm:w-auto"
          >
            Ver como funciona
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSecao;
