import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { PricingTier } from "@/types";

interface PricingCardProps {
  tier: PricingTier;
  annual?: boolean;
}

export function PricingCard({ tier, annual = false }: PricingCardProps) {
  const price = annual ? tier.price.annual : tier.price.monthly;

  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-white p-8 transition-all duration-200",
        tier.popular
          ? "border-indigo-600 shadow-xl shadow-indigo-100/50 scale-[1.02]"
          : "border-slate-200 hover:border-indigo-200 hover:shadow-lg"
      )}
    >
      {tier.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="font-heading text-xl font-bold text-slate-900">
        {tier.name}
      </h3>
      <p className="mt-1 text-sm text-slate-600">{tier.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-bold text-slate-900">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-slate-500">/month</span>
      </div>
      {annual && (
        <p className="mt-1 text-xs text-emerald-600 font-medium">
          Save ${((tier.price.monthly - tier.price.annual) * 12).toLocaleString()}/year
        </p>
      )}

      <Button
        asChild
        className={cn(
          "w-full mt-6",
          tier.popular
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "bg-slate-900 hover:bg-slate-800 text-white"
        )}
      >
        <Link href="/contact">{tier.cta}</Link>
      </Button>

      <ul className="mt-8 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature.name} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
            ) : (
              <X className="h-5 w-5 text-slate-300 shrink-0 mt-0.5" />
            )}
            <span
              className={cn(
                "text-sm",
                feature.included ? "text-slate-700" : "text-slate-400"
              )}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
