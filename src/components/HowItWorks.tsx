
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Cadastre-se e Crie Sua Loja",
    description: "Crie sua conta, selecione seu segmento e configure sua loja digital em poucos minutos.",
    color: "blue"
  },
  {
    number: "02",
    title: "Envie seus produtos",
    description: "Adicione seu estoque com nosso sistema de gerenciamento de produtos intuitivo, incluindo fotos e descrições.",
    color: "purple"
  },
  {
    number: "03",
    title: "Personalize Seu Tema",
    description: "Escolha entre dezenas de temas específicos para o seu segmento e adapte cada detalhe à identidade da sua marca.",
    color: "indigo"
  },
  {
    number: "04",
    title: "Lance Sua Loja e Comece a Vender",
    description: "Coloque sua loja digital no ar e comece a receber pedidos de clientes do mundo todo.",
    color: "teal"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Passos Simples</span> para se Digitalizar
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process gets your business online quickly and efficiently,
            with no technical expertise required.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-digitalize-blue via-digitalize-purple to-digitalize-teal"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''} px-4 mb-6 lg:mb-0`}>
                  <div className={`p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow duration-300 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className={`inline-block px-3 py-1 rounded-lg bg-digitalize-${step.color}/10 text-digitalize-${step.color} text-sm font-semibold mb-4`}>
                      Passo {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center relative`}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-digitalize-blue to-digitalize-purple flex items-center justify-center text-white font-bold z-10">
                    {step.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
