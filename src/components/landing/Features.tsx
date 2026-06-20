import { Shield, Truck, RefreshCw, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Materials",
    description: "Full-grain Italian leather sourced from ethical tanneries, built to last generations."
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary worldwide delivery on all orders over $200. Arrive in 5-7 business days."
  },
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    description: "Not completely in love? Return within 30 days for a full refund, no questions asked."
  },
  {
    icon: Award,
    title: "Lifetime Warranty",
    description: "Every stitch, every buckle guaranteed. We stand behind our craftsmanship forever."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bag-espresso mb-4">
            Why Choose Atelier
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four generations of artisanal expertise go into every piece we create.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-sm bg-bag-cream/50 hover:bg-bag-cream transition-colors">
              <feature.icon className="w-12 h-12 text-bag-camel mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-display font-semibold text-bag-espresso mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
