"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import type { Stat } from "@/types";

interface AnimatedCounterProps {
  stat: Stat;
}

export function AnimatedCounter({ stat }: AnimatedCounterProps) {
  const numericValue = parseFloat(stat.value);
  const isDecimal = stat.value.includes(".");
  const { count, ref } = useCounterAnimation(
    isDecimal ? numericValue * 10 : numericValue
  );

  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl sm:text-5xl font-bold text-white">
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm sm:text-base text-indigo-200">{stat.label}</p>
    </div>
  );
}
