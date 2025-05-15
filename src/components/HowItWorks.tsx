
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Sign Up & Create Your Store",
    description: "Create your account, choose your industry, and set up your digital storefront in minutes.",
    color: "blue"
  },
  {
    number: "02",
    title: "Upload Your Products",
    description: "Add your inventory with our easy-to-use product management system, including photos and descriptions.",
    color: "purple"
  },
  {
    number: "03",
    title: "Customize Your Theme",
    description: "Choose from dozens of industry-specific themes and customize them to match your brand identity.",
    color: "indigo"
  },
  {
    number: "04",
    title: "Launch & Start Selling",
    description: "Go live with your digital store and start accepting orders from customers around the world.",
    color: "teal"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Simple Steps</span> to Go Digital
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
                      Step {step.number}
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
