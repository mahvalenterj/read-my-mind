'use client';

import { motion } from 'framer-motion';

const exemplos = [
  {
    id: 1,
    nome: 'Evento de Carreira',
    url: 'https://evento-mentoria-carreira.vercel.app/',
    imagem: '/exemplos/evento-carreira.png',
  },
  {
    id: 2,
    nome: 'Pacote de Prompts IA',
    url: 'https://www.pacotedeprompts.com.br/',
    imagem: '/exemplos/pacote-prompts.png',
  },
  {
    id: 3,
    nome: 'Lumina — Clínica de Estética',
    url: 'https://clinica-luminaglow-site.vercel.app/',
    imagem: '/exemplos/lumina-estetica.png',
  },
];

const ExemplosSecao = () => {
  return (
    <>
      <style>{`
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(220, 38, 38, 0.3); }
          50% { box-shadow: 0 0 40px rgba(220, 38, 38, 0.7), 0 0 80px rgba(220, 38, 38, 0.3); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shimmer-overlay {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            transparent
          );
          animation: shimmer 2s infinite;
        }
      `}</style>

      <section className="py-20 md:py-[120px] bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Exemplos de páginas entregues
            </h2>
            <p className="text-muted-foreground text-lg">
              Clique para visitar cada projeto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exemplos.map((exemplo, index) => (
              <motion.a
                key={exemplo.id}
                href={exemplo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 relative"
                style={{ animation: 'borderGlow 3s ease-in-out infinite' }}
              >
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shimmer-overlay" />

                {/* Image Container */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <img
                    src={exemplo.imagem}
                    alt={exemplo.nome}
                    className="w-full aspect-video object-cover object-top"
                  />
                </div>

                {/* Card Footer */}
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-bold text-foreground">
                    {exemplo.nome}
                  </h3>
                  <span className="text-primary text-sm font-semibold whitespace-nowrap ml-2">
                    Ver projeto →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExemplosSecao;
