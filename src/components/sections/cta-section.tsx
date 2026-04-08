import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Ready to Fill Your Pipeline?",
  subtitle = "No contracts. No risk. Just results. Get a free marketing audit and see exactly how we'll grow your business.",
  buttonText = "Get Your Free Marketing Audit",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-indigo-700 hover:bg-indigo-50 text-base px-8 py-6 rounded-xl font-semibold"
          >
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-indigo-200">
          Free consultation &middot; No obligation &middot; Results guaranteed
        </p>
      </div>
    </section>
  );
}
