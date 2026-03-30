export const metadata = {
  title: "Privacy Policy — Chat Recall",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Last updated: March 27, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            Our Commitments
          </h2>
          <p className="mt-2">
            Privacy is not a feature — it is the foundation of Chat Recall.
            Every design decision filters through one question: &quot;Would we
            trust this with our own conversation history?&quot; These commitments
            are non-negotiable:
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-neutral-400">
            <li>
              <strong className="text-neutral-200">
                We never read your conversations.
              </strong>{" "}
              Our servers process data for indexing. No human reviews content. No
              content is used for analytics, training, or any purpose beyond
              serving it back to you.
            </li>
            <li>
              <strong className="text-neutral-200">
                We never train on your data.
              </strong>{" "}
              Not ours, not a third party&apos;s. Your conversations are not
              training data.
            </li>
            <li>
              <strong className="text-neutral-200">
                We never sell your data.
              </strong>{" "}
              No data brokers, no ad networks, no &quot;anonymized&quot; data
              sales.
            </li>
            <li>
              <strong className="text-neutral-200">
                We minimize data sharing.
              </strong>{" "}
              We share the minimum data necessary with service providers: Stripe
              receives your email for billing, Vercel hosts the web dashboard,
              and AWS hosts the API and database. None of these providers have
              access to your conversation content.
            </li>
            <li>
              <strong className="text-neutral-200">
                You can delete everything, anytime.
              </strong>{" "}
              One-click account deletion removes all conversations, user data,
              and metadata. Deletion is real — not &quot;marked as
              deleted,&quot; actually purged.
            </li>
            <li>
              <strong className="text-neutral-200">
                You can export everything, anytime.
              </strong>{" "}
              Download your full archive as JSON. No lock-in.
            </li>
            <li>
              <strong className="text-neutral-200">
                Encryption at rest.
              </strong>{" "}
              All conversation data encrypted at rest via AWS RDS encryption
              (AES-256). Data in transit encrypted via TLS.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            No Tiered Privacy
          </h2>
          <p className="mt-2">
            Every user — trial or paid — gets identical privacy protections.
            There is no &quot;premium security&quot; tier. Trust is binary.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            1. What We Collect
          </h2>
          <p className="mt-2">We collect the following data:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">
                Account information:
              </strong>{" "}
              Email address, name, and avatar from your OAuth provider (GitHub or
              Google)
            </li>
            <li>
              <strong className="text-neutral-300">Conversation data:</strong>{" "}
              AI conversation history that you explicitly upload
            </li>
            <li>
              <strong className="text-neutral-300">Usage counters:</strong>{" "}
              Per-user counters such as total conversations and messages, stored
              for dashboard display
            </li>
            <li>
              <strong className="text-neutral-300">
                Billing information:
              </strong>{" "}
              Processed by Stripe. We do not store credit card numbers
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            2. How We Store Your Data
          </h2>
          <p className="mt-2">
            Your data is stored in Amazon Web Services (AWS) infrastructure, in
            an RDS PostgreSQL database with AES-256 encryption at rest and TLS
            encryption in transit. Automated backups are encrypted. Data stays in
            the AWS region where it is stored — no cross-border transfers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            3. Data Isolation
          </h2>
          <p className="mt-2">
            All database queries are filtered by your user ID. There is no API
            endpoint or query path that can access another user&apos;s data.
            Multi-tenant isolation is enforced at the application layer: API
            middleware injects your user ID from the authenticated session, and
            every query includes user-scoped filtering.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            4. Data Retention
          </h2>
          <p className="mt-2">
            We retain your data according to the following policy:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-neutral-400">
            <li>
              <strong className="text-neutral-300">Active trial or subscription:</strong>{" "}
              All data retained with full access.
            </li>
            <li>
              <strong className="text-neutral-300">
                Trial expired or subscription cancelled:
              </strong>{" "}
              Data retained for 30 days. Access is suspended, but your data is
              safe. Subscribe (or resubscribe) within 30 days to restore full
              access.
            </li>
            <li>
              <strong className="text-neutral-300">
                30+ days after expiry or cancellation:
              </strong>{" "}
              All data is permanently deleted — conversations, threads, messages,
              search index, and user record.
            </li>
            <li>
              <strong className="text-neutral-300">Manual account deletion:</strong>{" "}
              Immediate permanent deletion of all data.
            </li>
          </ul>
          <p className="mt-3">
            We send email notifications at key points: when your trial expires,
            when you enter the 30-day grace period, and when deletion occurs. We
            do not hoard data from users who are not using the product.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            5. Third-Party Services
          </h2>
          <p className="mt-2">We use the following third-party services:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">GitHub & Google:</strong>{" "}
              OAuth authentication only. We receive your email, name, and avatar
            </li>
            <li>
              <strong className="text-neutral-300">Stripe:</strong> Payment
              processing. Stripe handles all payment data under their own privacy
              policy
            </li>
            <li>
              <strong className="text-neutral-300">AWS:</strong> Cloud
              infrastructure for API hosting and data storage
            </li>
            <li>
              <strong className="text-neutral-300">Vercel:</strong> Frontend
              hosting for the web dashboard
            </li>
            <li>
              <strong className="text-neutral-300">Cloudflare:</strong> DNS
              provider
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            6. Your Rights (GDPR & CCPA)
          </h2>
          <p className="mt-2">You have the right to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
            <li>
              <strong className="text-neutral-300">Access:</strong> View all
              data we hold about you via your dashboard
            </li>
            <li>
              <strong className="text-neutral-300">Export:</strong> Download your
              full conversation archive as JSON at any time
            </li>
            <li>
              <strong className="text-neutral-300">Delete:</strong> Permanently
              delete all your data immediately via account settings
            </li>
            <li>
              <strong className="text-neutral-300">Rectification:</strong> Update
              your account information through settings
            </li>
          </ul>
          <p className="mt-2">
            Manual deletion requests are processed immediately. All conversation
            data and account information are permanently deleted from the
            database. Encrypted database backups are retained for up to 7 days
            for disaster recovery, after which they are automatically purged. A
            data processing agreement is available on request for EU users.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            7. Cookies
          </h2>
          <p className="mt-2">
            We use essential cookies only for authentication (session tokens). We
            do not use tracking cookies or third-party analytics cookies.
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
            9. Age Requirement
          </h2>
          <p className="mt-2">
            You must be at least 13 years old to use Chat Recall. If you are
            under 16 and in the European Economic Area, you must have parental
            consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-100">
            10. Contact
          </h2>
          <p className="mt-2">
            For privacy questions or data requests, contact us at{" "}
            <a
              href="mailto:privacy@chatrecall.ai"
              className="text-emerald-400 hover:text-emerald-300"
            >
              privacy@chatrecall.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
