import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Virtual Media Innovations and the World of Asphodel campaign setting.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gradient-blue-green mb-2">
          Privacy Policy
        </h1>
        <p className="text-foreground/50 mb-10">Last updated: February 28, 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
            <p>
              Virtual Media Innovations (&quot;VMI,&quot; &quot;I,&quot; &quot;me&quot;) is the creative studio of Larry Hunkin.
              This Privacy Policy explains how I collect, use, and protect information when you visit
              virtualmediainnovations.com, worldofasphodel.com, or use my services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Information I Collect</h2>
            <p className="mb-3">
              I collect minimal personal information, limited to what you voluntarily provide:
            </p>
            <p>
              <strong className="text-foreground">Contact Form:</strong> When you submit the contact form, I collect your name,
              email address, project type, and message. This data is processed through Web3Forms and sent to my email.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Waitlist Signup:</strong> If you join the World Builder waitlist, I collect your
              email address to notify you when the platform launches.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">How I Use Your Information</h2>
            <p>
              I use collected information solely to respond to your inquiries, send waitlist notifications,
              and improve my services. I do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
            <p>
              This site uses Web3Forms for form processing, YouTube for embedded audio/video content,
              and Vercel for hosting. Each service has its own privacy policy. I also use standard
              analytics to understand site traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
            <p>
              This site uses minimal cookies necessary for functionality. Third-party embeds (such as
              YouTube) may set their own cookies according to their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of any personal data I hold about you.
              To make such a request, email me at contact@virtualmediainnovations.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
            <p>
              I may update this policy from time to time. Changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              Questions about this policy? Reach out at{' '}
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
