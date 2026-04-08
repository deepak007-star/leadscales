import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/50"
    >
      {/* Image placeholder */}
      <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-indigo-50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-xl font-bold text-slate-300/50">
            {post.category}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-slate-700 border-0">
            {post.category}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
