"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HeaderProps {
  industryColor?: string;
}

export function Header({ industryColor }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white font-heading font-bold text-lg"
              style={{ backgroundColor: industryColor || "#007FFD" }}
            >
              L
            </div>
            <span
              className={cn(
                "font-heading text-xl font-bold transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              LeadScale
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#solutions"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                scrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              Marketing Solutions
            </a>
            <a
              href="#success"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                scrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              Case Studies
            </a>
            <a
              href="#insights"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                scrolled
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              Insights
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors",
                scrolled ? "text-gray-700" : "text-white/90"
              )}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a
              href="/contact"
              className="btn-pill btn-pill-primary text-sm hidden sm:inline-flex"
              style={{ backgroundColor: industryColor || "var(--accent)" }}
            >
              Get Started
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="mx-auto max-w-[73rem] px-6 py-4 space-y-1">
            <a href="#solutions" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Marketing Solutions</a>
            <a href="#success" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Case Studies</a>
            <a href="#insights" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Insights</a>
            <a href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 font-semibold rounded-lg text-center text-white mt-2" style={{ backgroundColor: industryColor || "var(--accent)" }}>Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
}
