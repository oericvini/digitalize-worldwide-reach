
import React from 'react';
import { Globe, TrendingUp, Briefcase, World, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-6 h-6 text-digitalize-blue" />,
    title: "Global Reach",
    description: "Expand beyond your local market and sell to customers worldwide with our integrated shipping and payment solutions."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-digitalize-purple" />,
    title: "Increased Revenue",
    description: "On average, our clients see a 45% increase in revenue within the first six months after going digital."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-digitalize-teal" />,
    title: "Mobile-First Design",
    description: "Capture the growing mobile market with responsive storefronts optimized for any device."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-digitalize-indigo" />,
    title: "Customizable Templates",
    description: "Choose from dozens of industry-specific themes designed to showcase your products perfectly."
  },
  {
    icon: <World className="w-6 h-6 text-digitalize-blue" />,
    title: "Multilingual Support",
    description: "Break language barriers with automatic translation features that help you serve international customers."
  },
  {
    icon: <Users className="w-6 h-6 text-digitalize-purple" />,
    title: "Dedicated Support",
    description: "Our team of experts is available 24/7 to help you navigate your digital transformation journey."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Physical Store with 
            <span className="gradient-text"> Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to take your business online and thrive
            in the digital marketplace, all in one simple platform.
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
