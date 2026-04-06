const ProvaSocialSecao = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 rounded-3xl bg-red-600 py-10 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Cases de Sucesso: Transformação Digital na Prática
          </h2>
          <p className="mt-4 text-base md:text-lg text-white animate-[pulse_2.5s_ease-in-out_infinite]">
            Veja como transformamos sites estáticos em máquinas de conversão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-900/50 hover:border hover:border-gray-700 rounded-3xl">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900">
              Antes: Layout Tradicional
            </span>
            <a
              href="https://julicam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg shadow-md transition duration-300 hover:opacity-90"
            >
              <img
                src="/exemplos/antes.png"
                alt="Antes - Layout Tradicional Julicam"
                className="w-full h-auto rounded-lg object-cover transition duration-300"
              />
            </a>
          </div>

          <div className="space-y-4 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-900/50 hover:border hover:border-gray-700 rounded-3xl">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white">
              Depois: Alta Performance
            </span>
            <a
              href="https://julicam-industria-textil.vercel.app/#contato"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src="/exemplos/depois.png"
                alt="Depois - Alta Performance Julicam"
                className="w-full h-auto rounded-2xl object-cover transition duration-300"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-4 text-gray-100 text-base leading-8">
          <p className="font-semibold text-white">
            O Desafio da Julicam: Uma fábrica com mais de 30 anos de mercado que possuía um site que não convertia e não refletia sua autoridade.
          </p>
          <p>
            <span className="font-semibold text-white">A Solução:</span> Redesenhamos toda a interface aplicando <strong>UX/UI Design</strong> (focado em criar uma navegação fácil e intuitiva para o usuário) e <strong>CRO</strong> (Otimização para Conversão, distribuindo botões e textos de forma a gerar mais pedidos de orçamento).
          </p>
          <p>
            O novo site foi desenvolvido com estrutura <strong>Mobile-First</strong> (priorizando o acesso por celular, onde a maioria dos clientes está) e um visual moderno que passa confiança instantânea logo no primeiro segundo de tela.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocialSecao;
