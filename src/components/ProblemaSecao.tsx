import { motion } from 'framer-motion';
import { XCircle, Search, TrendingDown, MessageCircleX } from 'lucide-react';

const problems = [
  { icon: XCircle, title: 'Site feio que afasta o cliente' },
  { icon: Search, title: 'Sem aparecer no Google' },
  { icon: TrendingDown, title: 'Concorrente na frente de você' },
  { icon: MessageCircleX, title: 'Perdendo venda por falta de WhatsApp' },
];

const ProblemaSecao = () => (
  <section className="py-20 md:py-[120px] bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
      >
        Você até tentou, mas não funcionou.
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="bg-card border border-border rounded p-6 flex items-start gap-4"
          >
            <p.icon className="text-primary shrink-0 mt-1" size={24} />
            <p className="text-foreground font-medium text-lg">{p.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemaSecao;
