import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface FooterProps {
  industryColor?: string;
}

export function Footer({ industryColor }: FooterProps) {
  const accent = industryColor || "#007FFD";

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[73rem] px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white font-heading font-bold text-lg"
                style={{ backgroundColor: accent }}
              >
                L
              </div>
              <span className="font-heading text-xl font-bold text-white">
                LeadScale
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Industries
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/hvac" className="text-sm text-gray-400 hover:text-white transition-colors">HVAC</Link></li>
              <li><Link href="/plumbing" className="text-sm text-gray-400 hover:text-white transition-colors">Plumbing</Link></li>
              <li><Link href="/roofing" className="text-sm text-gray-400 hover:text-white transition-colors">Roofing</Link></li>
              <li><Link href="/gardening" className="text-sm text-gray-400 hover:text-white transition-colors">Gardening</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[73rem] px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
