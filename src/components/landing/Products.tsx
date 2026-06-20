import { Button } from "@/components/ui/button";

const products = [
  {
    name: "The Heritage Tote",
    price: 425,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    tag: "Bestseller"
  },
  {
    name: "Milano Crossbody",
    price: 295,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
    tag: null
  },
  {
    name: "Executive Briefcase",
    price: 550,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    tag: "New"
  },
  {
    name: "Weekend Duffle",
    price: 385,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    tag: null
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-bag-cream">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-bag-espresso mb-4">
              The Collection
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Each piece is numbered and signed by the artisan who crafted it.
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex border-bag-espresso text-bag-espresso hover:bg-bag-espresso hover:text-white rounded-none">
            View All Products
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden bg-white aspect-[3/4] mb-4">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-bag-camel text-white text-xs font-medium">
                    {product.tag}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold text-bag-espresso mb-1">
                {product.name}
              </h3>
              <p className="text-bag-camel font-medium">${product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="border-bag-espresso text-bag-espresso hover:bg-bag-espresso hover:text-white rounded-none">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
