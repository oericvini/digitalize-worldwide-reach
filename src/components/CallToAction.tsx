
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
              Ready to <span className="gradient-text">Transform Your Business</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have successfully gone digital with our platform. 
              Start your transformation today with our risk-free 14-day trial.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-digitalize-blue to-digitalize-indigo hover-up">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="hover-up">
                Schedule a Demo
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
