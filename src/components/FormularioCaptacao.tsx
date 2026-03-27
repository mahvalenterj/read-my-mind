import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    try {
      // Capturar UTMs da URL
      const params = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: params.get('utm_source') || null,
        utm_medium: params.get('utm_medium') || null,
        utm_campaign: params.get('utm_campaign') || null,
        utm_term: params.get('utm_term') || null,
        utm_content: params.get('utm_content') || null,
      };

      // 1. Buscar ou criar campaign
      let campaignId: string | null = null;
      const { data: existingCampaign } = await supabase
        .from('campaigns')
        .select('id')
        .eq('slug', 'pagina-absurda')
        .single();

      if (existingCampaign) {
        campaignId = existingCampaign.id;
      } else {
        const { data: newCampaign } = await supabase
          .from('campaigns')
          .insert({ slug: 'pagina-absurda', name: 'Página Absurda' })
          .select('id')
          .single();
        campaignId = newCampaign?.id || null;
      }

      // 2. Inserir lead
      const { data: lead, error: leadError } = await supabase
        .from('leads')
        .insert({
          campaign_id: campaignId,
          name: form.nome,
          phone: form.whatsapp,
          status: 'new',
          ...utmData,
        })
        .select('id')
        .single();

      if (leadError) {
        console.error('Erro ao salvar lead:', leadError);
        throw leadError;
      }

      // 3. Registrar evento
      if (lead?.id) {
        await supabase.from('lead_events').insert({
          lead_id: lead.id,
          event_type: 'form_submit',
          metadata: { segmento: form.segmento },
        });
      }

      navigate('/obrigado');
    } catch (err) {
      console.error('Erro no formulário:', err);
      // Fallback: redireciona mesmo com erro para não travar o usuário
      navigate('/obrigado');
    } finally {
      setLoading(false);
    }
  };

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
