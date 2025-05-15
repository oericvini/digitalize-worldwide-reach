
import React from 'react';

const testimonials = [
  {
    quote: "Digitalize transformed my small bakery into an international business. I now ship my signature pastries to customers across Europe!",
    author: "Maria Gonzalez",
    position: "Owner, Sweet Dreams Bakery",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "I was hesitant about going online, but Digitalize made it so simple. My vintage clothing store now reaches collectors worldwide.",
    author: "Thomas Chen",
    position: "Founder, Retro Threads",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    quote: "Our family-run bookstore was struggling until we went digital with Digitalize. Now our rare book sales have tripled!",
    author: "Sarah Johnson",
    position: "Manager, Heritage Books",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by <span className="gradient-text">Business Owners</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from store owners who have successfully 
            transformed their businesses with Digitalize.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-shadow duration-300 card-shadow">
              {/* Quote Icon */}
              <div className="w-10 h-10 mb-4 text-digitalize-blue opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-foreground mb-6 italic">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
