import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/50"
    >
      {/* Image placeholder */}
      <div className="aspect-[16/10] bg-gradient-to-br from-indigo-100 to-sky-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-3xl font-bold text-indigo-300/50">
            {caseStudy.company}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-indigo-700 hover:bg-white border-0">
            {caseStudy.industry}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {caseStudy.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {caseStudy.results.slice(0, 2).map((result) => (
            <span
              key={result.label}
              className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1"
            >
              {result.value} {result.label}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center text-sm font-medium text-indigo-600">
          Read Full Story
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
