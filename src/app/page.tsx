import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FlagshipProject from '@/components/FlagshipProject';
import SoundscapePlayer from '@/components/SoundscapePlayer';
import WorldBuilder from '@/components/WorldBuilder';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Virtual Media Innovations - World of Asphodel & World Builder',
  description: 'Home of the World of Asphodel D&D 5e campaign setting and the World Builder platform. Immersive worldbuilding, soundscapes, and creative tools.',
};

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <FlagshipProject />
      <SoundscapePlayer />
      <WorldBuilder />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
