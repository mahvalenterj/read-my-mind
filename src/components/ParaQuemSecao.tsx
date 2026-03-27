import { motion } from 'framer-motion';

const nichos = [
  { emoji: '⚖️', label: 'Advogados' },
  { emoji: '🏠', label: 'Imobiliárias' },
  { emoji: '🎓', label: 'Mentores e Infoprodutores' },
  { emoji: '📱', label: 'Vendedores de Cursos' },
  { emoji: '💄', label: 'Profissionais de Estética' },
  { emoji: '🏢', label: 'Pequenas Empresas' },
];

const ParaQuemSecao = () => (
  <section id="para-quem" className="py-20 md:py-[120px] bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
      >
        Feito para quem vende de verdade
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {nichos.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            whileHover={{ y: -8, borderColor: 'hsl(358 100% 45%)' }}
            className="bg-card border border-border rounded p-8 text-center cursor-default transition-colors"
          >
            <span className="text-4xl block mb-3">{n.emoji}</span>
            <span className="text-foreground font-display font-bold text-lg">{n.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ParaQuemSecao;
