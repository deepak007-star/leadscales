import Link from "next/link";
import {
  Search,
  MousePointerClick,
  Monitor,
  Share2,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  MousePointerClick,
  Monitor,
  Share2,
  MapPin,
  Star,
};

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Search;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/50 hover:border-indigo-200",
        !compact && "p-8"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {service.shortDescription}
      </p>
      {!compact && (
        <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </Link>
  );
}
