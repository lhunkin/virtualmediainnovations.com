import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FlagshipProject from '@/components/FlagshipProject';
import WorldBuilder from '@/components/WorldBuilder';
import Services from '@/components/Services';
import ArtGallery from '@/components/ArtGallery';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <FlagshipProject />
      <WorldBuilder />
      <Services />
      <ArtGallery />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
