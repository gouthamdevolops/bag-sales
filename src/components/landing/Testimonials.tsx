const testimonials = [
  {
    quote: "The quality is absolutely exceptional. I've owned designer bags that don't hold a candle to this. Worth every penny.",
    author: "Sarah M.",
    role: "Interior Designer, New York",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    quote: "I've been using my Atelier tote daily for three years. It looks better now than the day I bought it.",
    author: "Michael K.",
    role: "Architect, San Francisco",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    quote: "The attention to detail is remarkable. You can feel the craftsmanship in every stitch. Truly a heirloom piece.",
    author: "Emma R.",
    role: "Gallery Owner, London",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bag-espresso text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-bag-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Loved by Thousands
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Join the community of discerning individuals who have made Atelier part of their daily journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-bag-gold fill-bag-gold" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
