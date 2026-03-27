import { motion } from 'framer-motion';

const steps = [
  { num: '1', title: 'Você paga', desc: 'PIX ou cartão, agora mesmo' },
  { num: '2', title: 'A gente entra em contato', desc: 'Em até 2h' },
  { num: '3', title: 'Você manda as informações', desc: 'Do seu negócio' },
  { num: '4', title: 'Sua página tá no ar', desc: 'Em 3 dias — absurda' },
];

const ComoFuncionaSecao = () => (
  <section id="como-funciona" className="py-20 md:py-[120px] bg-card">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
      >
        Simples assim.
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="flex gap-6 relative"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-lg shrink-0">
                {s.num}
              </div>
              {i < steps.length - 1 && <div className="w-[2px] bg-primary/40 flex-1 min-h-[40px]" />}
            </div>
            <div className="pb-10">
              <h3 className="text-foreground font-display font-bold text-xl">{s.title}</h3>
              <p className="text-text-secondary mt-1">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoFuncionaSecao;
