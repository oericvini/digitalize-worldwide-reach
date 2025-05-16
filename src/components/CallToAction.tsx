
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-digitalize-blue/10 to-digitalize-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-card p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-gradient-to-br from-digitalize-blue/20 to-digitalize-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-digitalize-teal/10 to-digitalize-indigo/10 rounded-full blur-3xl"></div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto <span className="gradient-text">para Transformar o Seu Negócio</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de negócios que já se digitalizaram com sucesso usando nossa plataforma.
            Comece sua transformação hoje com um teste gratuito de 14 dias, sem riscos.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-digitalize-blue to-digitalize-indigo hover-up">
              Iniciar Teste Gratuito
              </Button>
              <Button size="lg" variant="outline" className="hover-up">
              Agendar uma Demonstração
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
            Sem necessidade de cartão de crédito. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
