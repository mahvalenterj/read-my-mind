const ProvaSocialSecao = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-lg">
              "Portfólio em crescimento — a Julicam Têxtil é nosso projeto mais recente. Veja ao lado."
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="max-w-sm">
              <img 
                src="/exemplos/julicam-mockup.png" 
                alt="Julicam - Projeto Recente" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocialSecao;
