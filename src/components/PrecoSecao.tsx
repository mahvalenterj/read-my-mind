import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const included = [
  'Design exclusivo e responsivo',
  'Formulário de captação de leads',
  'Banco de dados dos seus clientes (é seu, pra sempre)',
  'WhatsApp flutuante integrado',
  'Botão de pagamento (PIX e cartão)',
  'SEO configurado para o Google',
  'Google Ads e pixel de conversão',
  'Página de obrigado personalizada',
  'Revisões ilimitadas por 7 dias',
  'Entrega em até 3 dias úteis',
];

const PrecoSecao = () => (
  <section id="preco" className="py-20 md:py-[120px] bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-4"
      >
        Tudo isso de R$397 por R$ 49
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-text-secondary text-lg text-center mb-16"
      >
        Pagamento único. Sem mensalidade. Sem surpresa.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="text-primary shrink-0" size={18} />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-primary rounded p-8 text-center"
        >
          <p className="text-text-secondary line-through text-xl mb-2">R$397</p>
          <p className="text-foreground font-display font-bold text-5xl md:text-6xl">R$49</p>
          <p className="text-text-secondary text-sm mt-3 mb-8">pagamento único via PIX ou cartão</p>
          {/* MERCADO PAGO: inserir link de pagamento aqui */}
          <a
            href="https://checkout.infinitepay.io/marianna-correa?lenc=G0EBYIyUqO34CElmJ9d2tEJ7R6OobUP8TRrayUTVkrlOUaA-PbBAobJqQS0M5Dv6QQ_27WIXfxDslruySnIHWX74Wn0MabhGYyLKXzlhlN1B2kjabifTfqi0PPf8NpkADLGC0AZ7rL2e70iY9rjW38YVgt0eYCBBPdTJ35mJ7GRl6SYw2DRkYfQ3jwaf40cARVloAVxiOYKFQr8LWuxRbcMeyw6n2ygQWBUfRmrPl2OABFYkRMIV6egIahhwTWwZycLBUgkYITHmsJdQu42cxigYDXhySSS2A6WCJRVnWrzuo9pMMGtYFF94FO-OymVKhS7ix-8.v1.8d72a61472c66cd8"
            className="block bg-primary text-primary-foreground font-bold text-lg py-4 rounded btn-pulse transition-all"
          >
            Quero a minha agora
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PrecoSecao;
