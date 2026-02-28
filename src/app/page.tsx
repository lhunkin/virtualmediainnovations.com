import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FlagshipProject from '@/components/FlagshipProject';
import WorldBuilder from '@/components/WorldBuilder';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Virtual Media Innovations — World of Asphodel & D&D World Builder | Larry Hunkin',
  description: 'Virtual Media Innovations (VMI) by Larry Hunkin — home of the World of Asphodel D&D 5e campaign setting, ambient soundscapes by Roll & Resonance, and the free World Builder platform for tabletop RPG creators.',
};

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <FlagshipProject />
      <WorldBuilder />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
