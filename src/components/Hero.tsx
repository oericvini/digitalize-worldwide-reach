
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Globe, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="gradient-text">Transforme</span> Seu Negócio na Era Digital
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
              Transforme sua loja física em um negócio global de forma rápida.
              Alcance clientes no mundo todo e aumente seus lucros com nossas 
              soluções simples de transformação digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-digitalize-blue to-digitalize-indigo hover-up">
                  Comece Agora Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="hover-up">
                  Solicitar Demonstração
                </Button>
              </div>
              
              <div className="mt-8 flex items-center text-sm text-muted-foreground">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-digitalize-${i % 2 ? 'blue' : 'purple'}/20`}></div>
                  ))}
                </div>
                <span>Junte-se a mais de <span className="font-semibold text-foreground">1,000+</span> negócios que já estão crescendo no mundo digital</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Preview */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                {/* Dashboard mockup */}
                <div className="rounded-2xl bg-white p-4 shadow-2xl border border-border/50 animate-float">
                  {/* Header section of dashboard */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-digitalize-blue to-digitalize-indigo flex items-center justify-center text-white">
                        <Globe size={20} />
                      </div>
                      <div className="ml-3">
                        <div className="font-bold">Painel de Vendas da Boutique</div>
                        <div className="text-xs text-muted-foreground">Rastreador de Vendas Globais</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-green-500">
                        <TrendingUp size={16} />
                        <span className="text-xs font-bold">+32%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'Online Sales', value: '€8,521', change: '+12.5%' },
                      { label: 'New Customers', value: '625', change: '+18.2%' },
                      { label: 'Global Reach', value: '24 countries', change: '+5' },
                      { label: 'Conversion Rate', value: '8.3%', change: '+2.1%' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-muted rounded-lg p-3">
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                        <div className="font-bold">{stat.value}</div>
                        <div className="text-xs text-green-500">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Sales chart placeholder */}
                  <div className="bg-muted rounded-lg p-4 relative h-32">
                    <div className="absolute top-4 left-4">
                      <div className="font-medium text-sm">Vendas Mensais</div>
                      <div className="font-bold text-lg">R$52.489</div>
                    </div>
                    {/* Chart illustration */}
                    <div className="absolute bottom-4 left-4 right-4 h-12 flex items-end">
                      {[35, 55, 40, 60, 50, 75, 65, 80, 75, 90, 85].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 mx-0.5 rounded-t-sm bg-gradient-to-t from-digitalize-blue to-digitalize-indigo"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-digitalize-blue/20 to-digitalize-purple/20 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -top-4 -left-4 w-40 h-40 bg-gradient-to-r from-digitalize-teal/20 to-digitalize-indigo/20 rounded-full blur-2xl"></div>
                
                {/* Floating cards */}
                <div className="absolute -right-10 -bottom-10 p-3 bg-white rounded-lg shadow-lg border border-border/50 animate-bounce-slow">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-2">
                      <div className="text-xs font-medium">Novo Pedido</div>
                      <div className="text-xs text-muted-foreground">R$239,00</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 top-1/2 p-3 bg-white rounded-lg shadow-lg border border-border/50 animate-bounce-slow">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-digitalize-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div className="ml-2">
                      <div className="text-xs font-medium">Nova Mensagem</div>
                      <div className="text-xs text-muted-foreground">De São Paulo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
