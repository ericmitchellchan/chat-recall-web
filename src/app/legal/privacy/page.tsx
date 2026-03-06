export const metadata = {
  title: "Privacy Policy — Chat Recall",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Last updated: March 5, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            1. What We Collect
          </h2>
          <p className="mt-2">We collect the following data:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">Account information:</strong>{" "}
              Email address, name, and avatar from your OAuth provider (GitHub
              or Google)
            </li>
            <li>
              <strong className="text-neutral-300">Conversation data:</strong>{" "}
              AI conversation history that you explicitly upload or sync
            </li>
            <li>
              <strong className="text-neutral-300">Usage data:</strong>{" "}
              Basic analytics (page views, feature usage) to improve the Service
            </li>
            <li>
              <strong className="text-neutral-300">Billing information:</strong>{" "}
              Processed by Stripe. We do not store credit card numbers
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            2. How We Store Your Data
          </h2>
          <p className="mt-2">
            Your data is stored in Amazon Web Services (AWS) infrastructure,
            specifically in an RDS PostgreSQL database with encryption at rest
            and in transit. Backups are encrypted and retained for disaster
            recovery purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            3. What We Never Do
          </h2>
          <p className="mt-2">We commit to never:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>Train AI models on your conversation data</li>
            <li>Share your data with third parties for marketing or advertising</li>
            <li>Display advertisements</li>
            <li>Sell your personal information</li>
            <li>Access your conversation content except for technical support with your explicit permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            4. Third-Party Services
          </h2>
          <p className="mt-2">We use the following third-party services:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">GitHub & Google:</strong>{" "}
              OAuth authentication only. We receive your email, name, and avatar
            </li>
            <li>
              <strong className="text-neutral-300">Stripe:</strong>{" "}
              Payment processing for Pro subscriptions. Stripe handles all
              payment data under their own privacy policy
            </li>
            <li>
              <strong className="text-neutral-300">AWS:</strong>{" "}
              Cloud infrastructure for hosting and data storage
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            5. Your Rights (GDPR & CCPA)
          </h2>
          <p className="mt-2">You have the right to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">Access:</strong> View all
              data we hold about you via your dashboard
            </li>
            <li>
              <strong className="text-neutral-300">Export:</strong> Download
              your conversation data at any time
            </li>
            <li>
              <strong className="text-neutral-300">Delete:</strong> Request
              permanent deletion of all your data. Use the delete account
              option in Settings, or contact us
            </li>
            <li>
              <strong className="text-neutral-300">Rectification:</strong>{" "}
              Update your account information through Settings
            </li>
          </ul>
          <p className="mt-2">
            Data deletion requests are processed within 30 days. All
            conversation data, account information, and backups are permanently
            removed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            6. Data Retention
          </h2>
          <p className="mt-2">
            We retain your data for as long as your account is active. If you
            delete your account, all data is permanently removed within 30
            days. We do not retain conversation data after account deletion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            7. Cookies
          </h2>
          <p className="mt-2">
            We use essential cookies only for authentication (session tokens).
            We do not use tracking cookies or third-party analytics cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            8. Changes to This Policy
          </h2>
          <p className="mt-2">
            We will notify you of material changes via email. The &quot;Last
            updated&quot; date at the top reflects the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            9. Contact
          </h2>
          <p className="mt-2">
            For privacy questions or data requests, contact us at{" "}
            <a
              href="mailto:privacy@chatrecall.dev"
              className="text-emerald-400 hover:text-emerald-300"
            >
              privacy@chatrecall.dev
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
