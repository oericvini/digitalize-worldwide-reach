import React from 'react';
import { Globe, TrendingUp, Briefcase, GlobeIcon, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-6 h-6 text-digitalize-blue" />,
    title: "Alcance Global",
    description: "Vá além do mercado local e venda para clientes em todo o mundo com nossas soluções integradas de envio e pagamento."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-digitalize-purple" />,
    title: "Aumento de Receita",
    description: "Em média, nossos clientes registram um aumento de 45% na receita nos primeiros seis meses após a digitalização."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-digitalize-teal" />,
    title: "Design Prioritário para Dispositivos Móveis",
    description: "Aproveite o mercado móvel em expansão com lojas virtuais responsivas e otimizadas para qualquer dispositivo."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-digitalize-indigo" />,
    title: "Templates Personalizáveis",
    description: "Escolha entre dezenas de temas específicos para o seu segmento, criados para valorizar ao máximo os seus produtos."
  },
  {
    icon: <Globe className="w-6 h-6 text-digitalize-blue" />,
    title: "Suporte Multilíngue",
    description: "Our team of experts is available 24/7 to help you navigate your digital transformation journey."
  },
  {
    icon: <Users className="w-6 h-6 text-digitalize-purple" />,
    title: "Suporte Dedicado",
    description: "Nosso time de especialistas está disponível 24/7 para te acompanhar em cada etapa da sua jornada de transformação digital."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Transforme Sua Loja Física com a Digitalizei!
            <span className="gradient-text"> Recursos Poderosos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
          Tudo o que você precisa para levar seu negócio ao online e prosperar no mercado digital em uma única plataforma simples e completa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

