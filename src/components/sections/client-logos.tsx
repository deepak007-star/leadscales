"use client";

interface ClientLogosProps {
  logos: string[];
  color: string;
}

export function ClientLogos({ logos, color }: ClientLogosProps) {
  // Double for infinite scroll effect
  const doubled = [...logos, ...logos];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex gap-12 items-center whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 shrink-0"
            >
              <div
                className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {logo.charAt(0)}
              </div>
              <span className="text-sm font-medium text-gray-500">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
