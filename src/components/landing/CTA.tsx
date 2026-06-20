import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bag-espresso mb-6">
            Find Your Perfect Bag
          </h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto">
            Take our brief style quiz and discover which bag complements your lifestyle and aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bag-camel hover:bg-bag-espresso text-white rounded-none px-10 py-6 text-lg">
              Take the Quiz
            </Button>
            <Button size="lg" variant="outline" className="border-bag-espresso text-bag-espresso hover:bg-bag-espresso hover:text-white rounded-none px-10 py-6 text-lg">
              Browse Catalog
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-8">
            Join 12,000+ subscribers. Get early access to new collections and exclusive offers.
          </p>
        </div>
      </div>
    </section>
  );
}
