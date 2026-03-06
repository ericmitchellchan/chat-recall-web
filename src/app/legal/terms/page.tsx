export const metadata = {
  title: "Terms of Service — Chat Recall",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Last updated: March 5, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing or using Chat Recall (&quot;the Service&quot;), you
            agree to be bound by these Terms of Service. If you do not agree,
            do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            2. Description of Service
          </h2>
          <p className="mt-2">
            Chat Recall is a conversation history management tool that allows
            you to import, search, and organize your AI conversation data. The
            Service provides full-text search, thread organization, and MCP
            integration for connecting to AI tools.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            3. Account Registration
          </h2>
          <p className="mt-2">
            You may sign up using GitHub or Google OAuth. You are responsible
            for maintaining the security of your account. You must provide
            accurate information and promptly update it if it changes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            4. Acceptable Use
          </h2>
          <p className="mt-2">You agree not to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>Use the Service for any unlawful purpose</li>
            <li>Upload content that infringes on intellectual property rights</li>
            <li>Attempt to gain unauthorized access to the Service or its systems</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Use automated tools to scrape or extract data from the Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            5. Your Data
          </h2>
          <p className="mt-2">
            You retain ownership of all conversation data you upload. We do not
            use your data to train AI models, share it with third parties, or
            display advertising. See our Privacy Policy for details on data
            handling.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            6. Subscription & Billing
          </h2>
          <p className="mt-2">
            The Free tier is available at no cost with usage limits. The Pro
            tier requires a monthly subscription processed through Stripe.
            Subscriptions renew automatically. You may cancel at any time;
            access continues until the end of the billing period.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            7. Account Termination
          </h2>
          <p className="mt-2">
            We may suspend or terminate your account if you violate these Terms.
            You may delete your account at any time through the Settings page.
            Upon deletion, all your data will be permanently removed within 30
            days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            8. Limitation of Liability
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
            9. Dispute Resolution
          </h2>
          <p className="mt-2">
            Any disputes shall be resolved through binding arbitration in
            accordance with applicable rules, except where prohibited by law.
            You agree to resolve disputes individually, not as part of a class
            action.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            10. Changes to Terms
          </h2>
          <p className="mt-2">
            We may update these Terms from time to time. We will notify you of
            material changes via email or an in-app notice. Continued use of
            the Service after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            11. Contact
          </h2>
          <p className="mt-2">
            Questions about these Terms? Contact us at{" "}
            <a
              href="mailto:support@chatrecall.dev"
              className="text-emerald-400 hover:text-emerald-300"
            >
              support@chatrecall.dev
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
