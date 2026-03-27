import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'O que é uma landing page?', a: 'É uma página na internet feita pra uma coisa só: trazer clientes pra você. Diferente de um site cheio de abas, ela é direta ao ponto — com formulário, WhatsApp e botão de pagamento.' },
  { q: 'Em quanto tempo fica pronto?', a: 'Em até 3 dias úteis sua página tá no ar, pronta pra vender.' },
  { q: 'E se eu não gostar?', a: 'Você tem revisões ilimitadas por 7 dias. A gente ajusta até ficar do jeito que você quer.' },
  { q: 'Funciona para o meu segmento?', a: 'Funciona pra advogados, imobiliárias, mentores, infoprodutores, vendedores de cursos, profissionais de estética e qualquer pequena empresa que quer mais clientes.' },
  { q: 'Como funciona o pagamento?', a: 'Você paga via PIX ou cartão pelo Mercado Pago. Pagamento único de R$397, sem mensalidade.' },
  { q: 'Minha página fica hospedada onde?', a: 'Sua página fica hospedada na Vercel, uma das plataformas mais rápidas e seguras do mundo. Funciona 24h por dia sem cair.' },
];

const FaqSecao = () => (
  <section id="faq" className="py-20 md:py-[120px] bg-background">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
      >
        Tá com dúvida? A gente responde.
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded px-6">
            <AccordionTrigger className="text-foreground font-bold text-left text-base hover:text-primary transition-colors">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-text-secondary">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSecao;
