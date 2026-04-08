"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "border-b transition-all duration-300 overflow-hidden",
          isScrolled
            ? "max-h-0 border-transparent"
            : "max-h-10 border-white/10"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                isScrolled
                  ? "text-slate-600 hover:text-indigo-600"
                  : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <span
              className={cn(
                "hidden sm:block",
                isScrolled ? "text-slate-500" : "text-white/60"
              )}
            >
              {siteConfig.email}
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-heading font-bold text-lg">
              L
            </div>
            <span
              className={cn(
                "font-heading text-xl font-bold transition-colors",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              LeadScale
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isScrolled
                        ? "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isScrolled
                      ? "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Link href="/contact">Get Free Audit</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className={cn(
                  "lg:hidden p-2 rounded-md transition-colors",
                  isScrolled
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                {mobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-heading font-bold text-lg">
                        L
                      </div>
                      <span className="font-heading text-xl font-bold text-slate-900">
                        LeadScale
                      </span>
                    </Link>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4">
                    {navLinks.map((link) => (
                      <div key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-8 py-2.5 text-sm text-slate-500 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                      >
                        Get Your Free Audit
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
