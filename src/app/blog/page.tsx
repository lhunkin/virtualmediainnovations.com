import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog - Virtual Media Innovations',
  description: 'Insights and stories from Virtual Media Innovations creative studio.',
};

export default function BlogPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-blue-green mb-4">
              Blog
            </h1>
            <p className="text-foreground/70 text-lg">
              Insights, tutorials, and stories from the Virtual Media Innovations team.
            </p>
          </div>
          <BlogList />
        </div>
      </section>
      <Footer />
    </main>
  );
}
