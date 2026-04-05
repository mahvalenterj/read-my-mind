import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import carlaMendes from '@/assets/faces/Face (2).jpeg';
import ricardoAlmeida from '@/assets/faces/Face (3).jpeg';
import julianaTorres from '@/assets/faces/Face (1).jpeg';
import fernandoCosta from '@/assets/faces/Face (4).jpeg';
import anaBeatriz from '@/assets/faces/Face.jpeg';

const depoimentos = [
  { nome: 'Dra. Carla Mendes', nicho: 'Advogada', texto: 'Em uma semana já recebi 12 contatos pelo WhatsApp. Nunca imaginei que uma página pudesse trazer tanto resultado.', foto: carlaMendes },
  { nome: 'Ricardo Almeida', nicho: 'Corretor de Imóveis', texto: 'Minha imobiliária decolou depois da página. Os clientes chegam prontos pra fechar.', foto: ricardoAlmeida },
  { nome: 'Juliana Torres', nicho: 'Mentora Digital', texto: 'Profissional, rápido e sem enrolação. Exatamente como prometeram.', foto: julianaTorres },
  { nome: 'Fernando Costa', nicho: 'Vendedor de Cursos', texto: 'Dobrei minhas vendas no primeiro mês. A página é absurda mesmo!', foto: fernandoCosta },
  { nome: 'Ana Beatriz', nicho: 'Esteticista', texto: 'Minha agenda lotou. Os clientes me acham no Google e já mandam mensagem direto.', foto: anaBeatriz },
];


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
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-12 h-12 rounded-full object-cover object-center flex-shrink-0"
                />
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
