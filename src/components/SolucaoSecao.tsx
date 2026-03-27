import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const items = [
  'Design que para de rolar (absurdo mesmo)',
  'Formulário que captura seus futuros clientes',
  'WhatsApp do jeito que o brasileiro usa',
  'Aparece no Google desde o dia 1',
  'Botão de pagamento PIX e cartão',
  'Pixel do Google Ads configurado',
];

const SolucaoSecao = () => (
  <section className="py-20 md:py-[120px] bg-card">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
      >
        A gente resolve tudo isso.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-text-secondary text-lg mb-12 max-w-lg mx-auto"
      >
        Nossa landing page foi feita pra converter, não só pra ser bonita.
      </motion.p>
      <div className="max-w-md mx-auto text-left space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <Check className="text-primary shrink-0" size={20} />
            <span className="text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolucaoSecao;
