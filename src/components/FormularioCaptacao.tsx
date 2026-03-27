import { useState } from 'react';
import { motion } from 'framer-motion';

// SUPABASE_URL: inserir aqui
// SUPABASE_ANON_KEY: inserir aqui

// TODO: Importar createClient do @supabase/supabase-js
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const segmentos = [
  'Advogado(a)',
  'Imobiliária / Corretor',
  'Mentor(a) / Infoprodutor(a)',
  'Vendedor(a) de Cursos',
  'Estética / Beleza',
  'Outro',
];

const FormularioCaptacao = () => {
  const [form, setForm] = useState({ nome: '', whatsapp: '', segmento: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!form.nome.trim()) e.nome = true;
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, '').length < 10) e.whatsapp = true;
    if (!form.segmento) e.segmento = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // TODO: Integrar com Supabase
    // Capturar UTMs da URL:
    const params = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: params.get('utm_source') || null,
      utm_medium: params.get('utm_medium') || null,
      utm_campaign: params.get('utm_campaign') || null,
      utm_term: params.get('utm_term') || null,
      utm_content: params.get('utm_content') || null,
    };

    console.log('Lead data:', { ...form, ...utmData });

    // TODO: Salvar no Supabase:
    // 1. Buscar ou criar campaign slug = 'pagina-absurda'
    // 2. Inserir em leads com campaign_id
    // 3. Registrar lead_events com event_type = 'form_submit'
    // 4. Capturar UTMs da URL automaticamente
    //
    // const { data: campaign } = await supabase
    //   .from('campaigns')
    //   .select('id')
    //   .eq('slug', 'pagina-absurda')
    //   .single();
    //
    // const { data: lead } = await supabase
    //   .from('leads')
    //   .insert({
    //     campaign_id: campaign?.id,
    //     name: form.nome,
    //     phone: form.whatsapp,
    //     status: 'new',
    //     ...utmData,
    //   })
    //   .select('id')
    //   .single();
    //
    // await supabase.from('lead_events').insert({
    //   lead_id: lead?.id,
    //   event_type: 'form_submit',
    //   metadata: { segmento: form.segmento },
    // });

    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-primary rounded p-8 text-center"
      >
        <p className="text-primary font-display font-bold text-xl">
          Recebemos! Em breve entraremos em contato 🔥
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded p-6 space-y-4 text-left">
      <div>
        <label className="text-foreground text-sm font-medium block mb-1">Nome completo</label>
        <input
          type="text"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          className={`w-full bg-background border ${errors.nome ? 'border-primary' : 'border-border'} rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label className="text-foreground text-sm font-medium block mb-1">WhatsApp</label>
        <input
          type="tel"
          value={form.whatsapp}
          onChange={e => setForm({ ...form, whatsapp: e.target.value })}
          className={`w-full bg-background border ${errors.whatsapp ? 'border-primary' : 'border-border'} rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`}
          placeholder="(21) 99999-9999"
        />
      </div>
      <div>
        <label className="text-foreground text-sm font-medium block mb-1">Segmento</label>
        <select
          value={form.segmento}
          onChange={e => setForm({ ...form, segmento: e.target.value })}
          className={`w-full bg-background border ${errors.segmento ? 'border-primary' : 'border-border'} rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors`}
        >
          <option value="">Selecione seu segmento</option>
          {segmentos.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground font-bold py-3 rounded btn-pulse transition-all disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Quero ser contatado'}
      </button>
    </form>
  );
};

export default FormularioCaptacao;
