import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/data/industries";
import { IndustryPage } from "@/components/industry-page";

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `${industry.name} Marketing — More Leads, More Revenue`,
    description: industry.heroDescription,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return <IndustryPage industry={industry} />;
}
