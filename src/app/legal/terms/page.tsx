export const metadata = {
  title: "Terms of Service — Chat Recall",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Last updated: March 27, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing or using Chat Recall (&quot;the Service&quot;), you
            agree to be bound by these Terms of Service. If you do not agree, do
            not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            2. Description of Service
          </h2>
          <p className="mt-2">
            Chat Recall is a conversation history management tool that allows you
            to import, search, and organize your AI conversation data. The
            Service provides full-text search, thread organization, and MCP
            (Model Context Protocol) integration for connecting your history to
            AI tools like Claude.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            3. Account Registration
          </h2>
          <p className="mt-2">
            You must be at least 13 years old to use this service. You may sign
            up using GitHub or Google OAuth, or email and password. You are
            responsible for maintaining the security of your account. You must
            provide accurate information and promptly update it if it changes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            4. Free Trial
          </h2>
          <p className="mt-2">
            New accounts receive a 14-day free trial with full access to all
            features. There are no conversation limits or feature restrictions
            during the trial. When the trial ends, access to search, upload, and
            MCP is suspended until you subscribe. Your data is retained for 30
            days after trial expiry (see Data Retention below).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            5. Subscription & Billing
          </h2>
          <p className="mt-2">
            Chat Recall offers a single subscription plan:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">Monthly:</strong> $4.99/month
            </li>
            <li>
              <strong className="text-neutral-300">Annual:</strong> $49.99/year
              (save ~17%)
            </li>
          </ul>
          <p className="mt-2">
            Subscriptions are processed through Stripe and renew automatically.
            You may cancel at any time; access continues until the end of the
            current billing period. After cancellation, your data is retained for
            30 days before permanent deletion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            6. Your Data
          </h2>
          <p className="mt-2">
            You retain full ownership of all conversation data you upload. We do
            not read, train on, sell, or share your data. See our{" "}
            <a
              href="/legal/privacy"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Privacy Policy
            </a>{" "}
            for our complete privacy commitments.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            7. Uploaded Content
          </h2>
          <p className="mt-2">
            You represent that you have the right to upload and store any data
            you import into Chat Recall. You agree to indemnify and hold
            harmless Chat Recall against any claims, damages, or expenses
            arising from content you upload.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            8. Data Retention
          </h2>
          <p className="mt-2">
            When your trial expires or your subscription is cancelled:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-2 text-neutral-400">
            <li>
              Your data is retained for <strong className="text-neutral-300">30 days</strong>.
              Access is suspended, but your data remains intact.
            </li>
            <li>
              You will receive email notifications: when your trial expires,
              when you enter the 30-day grace period, and when deletion occurs.
            </li>
            <li>
              Subscribe (or resubscribe) within 30 days to restore full access
              with all your data intact.
            </li>
            <li>
              After 30 days, all data is{" "}
              <strong className="text-neutral-300">permanently deleted</strong>{" "}
              — conversations, threads, messages, search index, and your user
              record.
            </li>
          </ul>
          <p className="mt-2">
            You may also delete your account at any time via account settings.
            Manual deletion is immediate and permanent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            9. Data Export
          </h2>
          <p className="mt-2">
            You may export your full conversation archive as JSON at any time
            while your account is active. We do not lock you in.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            10. Acceptable Use
          </h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>Use the Service for any unlawful purpose</li>
            <li>
              Upload content that infringes on intellectual property rights
            </li>
            <li>
              Attempt to gain unauthorized access to the Service or its systems
            </li>
            <li>Interfere with or disrupt the Service</li>
            <li>
              Use automated tools to scrape or extract data from the Service
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            11. Account Termination
          </h2>
          <p className="mt-2">
            We may suspend or terminate your account if you violate these Terms.
            You may delete your account at any time through the settings page.
            Upon deletion, all your data is permanently removed immediately.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            12. Limitation of Liability
          </h2>
          <p className="mt-2">
            The Service is provided &quot;as is&quot; without warranties of any
            kind. To the maximum extent permitted by law, Chat Recall shall not
            be liable for any indirect, incidental, special, or consequential
            damages arising from your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            13. Dispute Resolution
          </h2>
          <p className="mt-2">
            Any disputes shall be resolved through binding arbitration in
            accordance with applicable rules, except where prohibited by law. You
            agree to resolve disputes individually, not as part of a class
            action.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            14. Changes to Terms
          </h2>
          <p className="mt-2">
            We may update these Terms from time to time. We will notify you of
            material changes via email or an in-app notice. Continued use of the
            Service after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            15. Contact
          </h2>
          <p className="mt-2">
            Questions about these Terms? Contact us at{" "}
            <a
              href="mailto:support@chatrecall.ai"
              className="text-emerald-400 hover:text-emerald-300"
            >
              support@chatrecall.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
