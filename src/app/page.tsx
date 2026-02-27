import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import FlagshipProject from '@/components/FlagshipProject';
import WorldBuilder from '@/components/WorldBuilder';
import About from '@/components/About';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Virtual Media Innovations - Creative Studio',
  description: 'Building virtual worlds, game art, RPG content, and immersive digital experiences.',
};

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <FlagshipProject />
      <WorldBuilder />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
