import { motion } from 'framer-motion';

/* INSERT GOOGLE ADS CONVERSION LABEL HERE: AW-XXXXXXXXX */

const steps = [
  { num: '1', text: 'Vamos entrar em contato em até 2h' },
  { num: '2', text: 'Você envia as informações do seu negócio' },
  { num: '3', text: 'Em 3 dias sua página tá no ar — absurda' },
];

const Obrigado = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-lg"
    >
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
        Pagamento confirmado! 🔥
      </h1>
      <p className="text-text-secondary text-lg mb-12">
        Em até 3 dias sua página tá absurda.
      </p>

      <div className="space-y-6 text-left mb-12">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
            className="flex gap-4 items-center"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold shrink-0">
              {s.num}
            </div>
            <p className="text-foreground">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <a
        href="https://wa.me/5521965737988?text=Ol%C3%A1!%20Acabei%20de%20fazer%20o%20pagamento%20no%20PaginaAbsurda%20%F0%9F%94%A5"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-primary-foreground font-bold px-8 py-4 rounded text-lg btn-pulse transition-all"
      >
        Acompanhar no WhatsApp
      </a>
    </motion.div>
  </div>
);

export default Obrigado;
