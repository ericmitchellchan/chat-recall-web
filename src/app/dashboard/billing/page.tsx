"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface BillingStatus {
  subscription_status: string;
  trial_ends_at: string | null;
  plan: string | null;
  current_period_end: string | null;
  stripe_subscription_id: string | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

export default function BillingPage() {
  const { data: session } = useSession();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    if (!session) return;
    fetchStatus();
  }, [session]);

  async function fetchStatus() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/billing/status`, {
        headers: {
          Authorization: `Bearer ${(session as any)?.accessToken || ""}`,
        },
      });
      if (!res.ok) throw new Error(`Failed to load billing status: ${res.status}`);
      const data: BillingStatus = await res.json();
      setStatus(data);
    } catch (err: any) {
      setError(err.message || "Failed to load billing status.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckout(plan: "monthly" | "annual") {
    setCheckoutLoading(plan);
    try {
      const res = await fetch(`${API_URL}/billing/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${(session as any)?.accessToken || ""}`,
        },
        body: JSON.stringify({ plan }),
      });
      if (!res.ok) throw new Error(`Checkout failed: ${res.status}`);
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || "Failed to start checkout.");
    } finally {
      setCheckoutLoading(null);
    }
  }

  async function handleCancel() {
    setCancelling(true);
    try {
      const res = await fetch(`${API_URL}/billing/cancel`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${(session as any)?.accessToken || ""}`,
        },
      });
      if (!res.ok) throw new Error(`Cancellation failed: ${res.status}`);
      setShowCancelConfirm(false);
      await fetchStatus();
    } catch (err: any) {
      setError(err.message || "Failed to cancel subscription.");
    } finally {
      setCancelling(false);
    }
  }

  function daysRemaining(dateStr: string): number {
    const end = new Date(dateStr);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Billing</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Manage your subscription and billing.
        </p>
        <LoadingSpinner className="mt-16" />
      </div>
    );
  }

  if (error && !status) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Billing</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Manage your subscription and billing.
        </p>
        <div className="mt-8 max-w-2xl">
          <Card>
            <p className="text-sm text-red-400">{error}</p>
            <div className="mt-4">
              <Button variant="secondary" onClick={fetchStatus}>
                Retry
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const isTrial =
    status?.subscription_status === "trialing" && status.trial_ends_at;
  const isActive = status?.subscription_status === "active";
  const isCancelled = status?.subscription_status === "cancelled";
  const isExpired =
    !status ||
    status.subscription_status === "expired" ||
    status.subscription_status === "past_due" ||
    (!isTrial && !isActive && !isCancelled);

  return (
    <div>
      <h1 className="text-2xl font-bold">Billing</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Manage your subscription and billing.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        {/* Trial active */}
        {isTrial && (
          <>
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xl text-emerald-400">
                  {"\u2606"}
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-100">
                    You&apos;re on your free trial
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    {daysRemaining(status!.trial_ends_at!)} days remaining
                    &mdash; your trial ends on{" "}
                    {formatDate(status!.trial_ends_at!)}.
                  </p>
                </div>
              </div>
            </Card>
            <PlanCards
              checkoutLoading={checkoutLoading}
              onCheckout={handleCheckout}
            />
          </>
        )}

        {/* Active subscription */}
        {isActive && (
          <Card>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xl text-emerald-400">
                {"\u2713"}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-neutral-100">
                  You&apos;re subscribed to Chat Recall
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                  {status!.plan === "annual" ? "Annual" : "Monthly"} plan
                  &mdash; next billing date:{" "}
                  {status!.current_period_end
                    ? formatDate(status!.current_period_end)
                    : "N/A"}
                  .
                </p>
                <div className="mt-4">
                  {!showCancelConfirm ? (
                    <Button
                      variant="danger"
                      onClick={() => setShowCancelConfirm(true)}
                    >
                      Cancel Subscription
                    </Button>
                  ) : (
                    <div>
                      <p className="mb-3 text-sm text-neutral-300">
                        Are you sure you want to cancel? You&apos;ll retain
                        access until{" "}
                        {status!.current_period_end
                          ? formatDate(status!.current_period_end)
                          : "the end of your billing period"}
                        .
                      </p>
                      <div className="flex gap-3">
                        <Button
                          variant="danger"
                          disabled={cancelling}
                          onClick={handleCancel}
                        >
                          {cancelling ? "Cancelling..." : "Confirm Cancel"}
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => setShowCancelConfirm(false)}
                        >
                          Keep Subscription
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Cancelled (grace period) */}
        {isCancelled && (
          <>
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-xl text-yellow-400">
                  {"\u26A0"}
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-100">
                    Your subscription ends on{" "}
                    {status!.current_period_end
                      ? formatDate(status!.current_period_end)
                      : "your next billing date"}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    You still have access until then. Resubscribe anytime to
                    keep your data accessible.
                  </p>
                </div>
              </div>
            </Card>
            <PlanCards
              checkoutLoading={checkoutLoading}
              onCheckout={handleCheckout}
              ctaLabel="Resubscribe"
            />
          </>
        )}

        {/* Expired / No subscription */}
        {isExpired && (
          <>
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-xl text-neutral-400">
                  {"\u2606"}
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-100">
                    Subscribe to access your conversations
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    Choose a plan below to get started with Chat Recall.
                  </p>
                </div>
              </div>
            </Card>
            <PlanCards
              checkoutLoading={checkoutLoading}
              onCheckout={handleCheckout}
            />
          </>
        )}
      </div>
    </div>
  );
}

function PlanCards({
  checkoutLoading,
  onCheckout,
  ctaLabel = "Subscribe",
}: {
  checkoutLoading: string | null;
  onCheckout: (plan: "monthly" | "annual") => void;
  ctaLabel?: string;
}) {
  const plans = [
    {
      key: "monthly" as const,
      name: "Monthly",
      price: "$4.99",
      period: "/mo",
      description: "Pay as you go, cancel anytime.",
      highlighted: false,
    },
    {
      key: "annual" as const,
      name: "Annual",
      price: "$49.99",
      period: "/yr",
      description: "Best value for committed users.",
      badge: "Save 17%",
      highlighted: true,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {plans.map((plan) => (
        <div
          key={plan.key}
          className={`rounded-xl border p-6 ${
            plan.highlighted
              ? "border-emerald-500/50 bg-emerald-500/5"
              : "border-neutral-800 bg-neutral-900/50"
          }`}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            {plan.badge && (
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                {plan.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-bold">{plan.price}</span>
            <span className="text-neutral-400">{plan.period}</span>
          </div>
          <p className="mt-2 text-sm text-neutral-400">{plan.description}</p>
          <Button
            className="mt-5 w-full"
            variant={plan.highlighted ? "primary" : "secondary"}
            disabled={checkoutLoading !== null}
            onClick={() => onCheckout(plan.key)}
          >
            {checkoutLoading === plan.key ? "Redirecting..." : ctaLabel}
          </Button>
        </div>
      ))}
    </div>
  );
}
