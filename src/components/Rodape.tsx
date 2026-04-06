const Rodape = () => (
  <footer className="bg-surface-dark py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="bg-primary text-primary-foreground font-display font-bold text-lg px-2 py-0.5 rounded-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}>PA</span>
          <span className="font-display font-bold text-foreground">PaginaAbsurda</span>
        </div>

        <div className="flex gap-6 text-text-secondary text-sm">
          <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          CNPJ: 16.865.237.0001-75 | Rio de janeiro - RJ 
        </p>
        <p className="text-muted-foreground text-xs mt-2 max-w-lg mx-auto">
          Desde 2012 criando landing pages profissionais para advogados, imobiliárias, mentores e infoprodutores.
        </p>
      </div>
    </div>
  </footer>
);

export default Rodape;
