import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const depoimentos = [
  { nome: 'Dra. Carla Mendes', nicho: 'Advogada', texto: 'Em uma semana já recebi 12 contatos pelo WhatsApp. Nunca imaginei que uma página pudesse trazer tanto resultado.' },
  { nome: 'Ricardo Almeida', nicho: 'Corretor de Imóveis', texto: 'Minha imobiliária decolou depois da página. Os clientes chegam prontos pra fechar.' },
  { nome: 'Juliana Torres', nicho: 'Mentora Digital', texto: 'Profissional, rápido e sem enrolação. Exatamente como prometeram.' },
  { nome: 'Fernando Costa', nicho: 'Vendedor de Cursos', texto: 'Dobrei minhas vendas no primeiro mês. A página é absurda mesmo!' },
  { nome: 'Ana Beatriz', nicho: 'Esteticista', texto: 'Minha agenda lotou. Os clientes me acham no Google e já mandam mensagem direto.' },
];

const getInitials = (name: string) => {
  const parts = name.split(' ');
  const first = parts[0]?.[0] || '';
  const last = parts[parts.length - 1]?.[0] || '';
  return (first + last).toUpperCase();
};

const ProvaSocialSecao = () => {
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

        <div className="max-w-4xl mx-auto space-y-8">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {getInitials(depoimento.nome)}
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <p className="text-foreground text-lg mb-4 italic">"{depoimento.texto}"</p>
                  <div>
                    <p className="text-foreground font-bold">{depoimento.nome}</p>
                    <p className="text-muted-foreground text-sm">{depoimento.nicho}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocialSecao;
