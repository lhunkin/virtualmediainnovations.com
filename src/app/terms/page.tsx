import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Virtual Media Innovations and the World of Asphodel campaign setting.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gradient-blue-green mb-2">
          Terms of Service
        </h1>
        <p className="text-foreground/50 mb-10">Last updated: February 28, 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
            <p>
              By accessing or using virtualmediainnovations.com or worldofasphodel.com (the &quot;Sites&quot;),
              you agree to be bound by these Terms of Service. If you do not agree, please do not use the Sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Services</h2>
            <p>
              Virtual Media Innovations (&quot;VMI&quot;) is the creative studio of Larry Hunkin, offering
              virtual world design, concept art, game assets, RPG design, animation, and creative direction
              services. The World of Asphodel is a D&amp;D 5e campaign setting. The World Builder platform
              (coming soon) will allow users to create campaign world websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
            <p>
              All content on the Sites — including but not limited to text, images, graphics, logos, audio,
              video, and code — is the property of Larry Hunkin / Virtual Media Innovations unless otherwise
              stated. D&amp;D 5e content is published under the SRD 5.1 Creative Commons Attribution 4.0
              International License where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">User Conduct</h2>
            <p>
              You agree not to use the Sites for any unlawful purpose, attempt to gain unauthorized access
              to any systems, or interfere with the proper functioning of the Sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Commissioned Work</h2>
            <p>
              For custom creative work, specific terms including scope, deliverables, timelines, and
              intellectual property rights will be outlined in a separate project agreement. Payment terms
              and revision policies will be established before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Disclaimer</h2>
            <p>
              The Sites and services are provided &quot;as is&quot; without warranties of any kind, either
              express or implied. I do not guarantee that the Sites will be uninterrupted, error-free, or
              free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Virtual Media Innovations shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of the Sites or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
            <p>
              I reserve the right to modify these terms at any time. Changes take effect when posted on this
              page. Continued use of the Sites constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              Questions about these terms? Reach out at{' '}
              <a href="mailto:contact@virtualmediainnovations.com" className="text-primary hover:text-neon transition-colors">
                contact@virtualmediainnovations.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <Link href="/" className="text-primary hover:text-neon transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
