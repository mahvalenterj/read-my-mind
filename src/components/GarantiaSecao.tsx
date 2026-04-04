import { motion } from 'framer-motion';

const GarantiaSecao = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-card border border-border rounded-lg p-8 shadow-sm"
        >
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Garantia de 7 dias</h3>
          <p className="text-muted-foreground">
            Se você não ficar satisfeito com o resultado, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GarantiaSecao;