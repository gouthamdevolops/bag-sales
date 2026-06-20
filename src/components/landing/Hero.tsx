import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-bag-cream overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-bag-cream via-bag-cream/80 to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&q=80')" }}
      />
      
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-bag-camel/20 text-bag-espresso text-sm font-medium rounded-full mb-6">
            Handcrafted Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-bag-espresso mb-6 leading-tight">
            Bags That Tell Your Story
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Artisan-crafted leather bags designed for those who appreciate timeless elegance and uncompromising quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-bag-camel hover:bg-bag-espresso text-white rounded-none px-8">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="border-bag-espresso text-bag-espresso hover:bg-bag-espresso hover:text-white rounded-none px-8">
              Our Craft
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
