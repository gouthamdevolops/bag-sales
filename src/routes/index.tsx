import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Products from "@/components/landing/Products";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Index;

