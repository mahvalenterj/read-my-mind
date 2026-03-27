import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const depoimentos = [
  { nome: 'Dra. Carla Mendes', nicho: 'Advogada', texto: 'Em uma semana já recebi 12 contatos pelo WhatsApp. Nunca imaginei que uma página pudesse trazer tanto resultado.' },
  { nome: 'Ricardo Almeida', nicho: 'Corretor de Imóveis', texto: 'Minha imobiliária decolou depois da página. Os clientes chegam prontos pra fechar.' },
  { nome: 'Juliana Torres', nicho: 'Mentora Digital', texto: 'Profissional, rápido e sem enrolação. Exatamente como prometeram.' },
  { nome: 'Fernando Costa', nicho: 'Vendedor de Cursos', texto: 'Dobrei minhas vendas no primeiro mês. A página é absurda mesmo!' },
  { nome: 'Ana Beatriz', nicho: 'Esteticista', texto: 'Minha agenda lotou. Os clientes me acham no Google e já mandam mensagem direto.' },
];

const ProvaSocialSecao = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % depoimentos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-[120px] bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
        >
          Quem já tem a página absurda
        </motion.h2>

        <div className="max-w-2xl mx-auto overflow-hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-background border border-border rounded p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary fill-primary" size={18} />
              ))}
            </div>
            <p className="text-foreground text-lg mb-6 italic">"{depoimentos[current].texto}"</p>
            <div>
              <p className="text-foreground font-bold">{depoimentos[current].nome}</p>
              <p className="text-text-secondary text-sm">{depoimentos[current].nicho}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-muted'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocialSecao;
