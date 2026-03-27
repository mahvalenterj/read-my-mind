import { motion } from 'framer-motion';
import FormularioCaptacao from './FormularioCaptacao';

const CtaFinalSecao = () => (
  <section id="cta-final" className="py-20 md:py-[120px] bg-card border-t border-border">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
      >
        Pronto para ter uma página absurda?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-text-secondary text-lg mb-12"
      >
        3 dias. R$397. Sem mensalidade.
      </motion.p>

      <div className="max-w-lg mx-auto mb-12">
        <FormularioCaptacao />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* MERCADO PAGO: inserir link de pagamento aqui */}
        <a
          href="#"
          className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded text-lg btn-pulse transition-all w-full sm:w-auto"
        >
          Quero minha página agora — R$397
        </a>
        <a
          href="https://wa.me/5521965737988?text=Ol%C3%A1!%20Vi%20o%20PaginaAbsurda%20e%20quero%20saber%20mais%20sobre%20minha%20p%C3%A1gina%20%F0%9F%94%A5"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-foreground text-foreground font-bold px-8 py-4 rounded text-lg hover:bg-foreground/10 transition-all w-full sm:w-auto"
        >
          Prefiro falar no WhatsApp primeiro
        </a>
      </div>
    </div>
  </section>
);

export default CtaFinalSecao;
