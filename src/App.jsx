// App.js
import { useEffect } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductShowcase from "./components/ProductShowCase";
import Description from "./components/Description";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { initSmoothScroll } from "./utils/smoothScroll";

export default function App() {
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

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
      <ScrollToTop />
    </div>
  );
}
