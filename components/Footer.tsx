import Link from "next/link";
import BcAiLogo from "./BcAiLogo";

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <BcAiLogo width={48} />
              <span className="text-forest-600 text-lg font-light">|</span>
              <span className="font-serif font-bold text-gold text-lg">RAP</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Responsible AI Professional Certification. A program of BC + AI Ecosystem
              Association.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-cream text-sm font-semibold mb-3 uppercase tracking-wider">
              Program
            </p>
            <ul className="space-y-2">
              {[
                ["Program", "/program"],
                ["Methodology", "/methodology"],
                ["Instructors", "/instructors"],
                ["Cohorts", "/cohorts"],
                ["Pricing", "/pricing"],
                ["FAQ", "/faq"],
                ["Enroll", "/enroll"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-muted text-sm hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-cream text-sm font-semibold mb-3 uppercase tracking-wider">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:hello@bc-ai.ca" className="hover:text-cream transition-colors">
                  hello@bc-ai.ca
                </a>
              </li>
              <li>
                <a href="https://bc-ai.ca" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                  bc-ai.ca
                </a>
              </li>
              <li>
                <a href="https://bc-ai.net" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                  Discord: bc-ai.net
                </a>
              </li>
              <li className="text-muted">@vancouver_AI</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-700 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-muted text-xs">
            © 2026 BC + AI Ecosystem Association. On the unceded territories of the
            Musqueam, Squamish, and Tsleil-Waututh peoples.
          </p>
          <p className="text-muted text-xs">Technology isn&apos;t neutral and neither are we.</p>
        </div>
      </div>
    </footer>
  );
}
