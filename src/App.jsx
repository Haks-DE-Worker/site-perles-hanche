// App.js
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductShowcase from "./components/ProductShowcase";
import Description from "./components/Description";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#F7F3EF] text-black font-sans">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <Description />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
