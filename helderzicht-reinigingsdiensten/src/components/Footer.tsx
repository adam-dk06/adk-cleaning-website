import { SERVICES } from '../data/services';
import type { AppRoute } from './Header';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#071322] pb-10 pt-20 text-white">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-white/12 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Kolom 1: Logo & Merkprofiel */}
          <div className="lg:col-span-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'home' });
              }}
              className="inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white"
            >
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <rect width="36" height="36" rx="9" fill="#132B49" />
                <path
                  d="M9.5 24.5L18 10L26.5 24.5"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 21.5H22.5"
                  stroke="#00C8D4"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M25 11.5L28 11.5"
                  stroke="#FF8500"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              <span>ADK Cleaning</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              ADK Cleaning is landelijk actief en biedt professionele reinigingsdiensten aan
              particulieren, bedrijven en VvE’s door heel Nederland.
            </p>

            {/* Social media links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#00C8D4] hover:text-[#00C8D4]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#00C8D4] hover:text-[#00C8D4]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:-translate-y-0.5 hover:border-[#00C8D4] hover:text-[#00C8D4]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigatie */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#00C8D4]">
              Navigatie
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'home' });
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#diensten"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'diensten' });
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                >
                  Dienstenoverzicht
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'reviews' });
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#over-ons"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'over-ons' });
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                >
                  Over ons
                </a>
              </li>
              <li>
                <a
                  href="#offerte"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'offerte' });
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                >
                  Offerte aanvragen
                </a>
              </li>
              <li>
                <a
                  href="#privacybeleid"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'privacybeleid' });
                  }}
                  className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                >
                  Privacybeleid
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Alle 11 diensten */}
          <div className="lg:col-span-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#00C8D4]">
              Onze 11 diensten
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 text-sm text-white/75 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`#dienst/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ page: 'dienst', slug: service.slug });
                    }}
                    className="inline-block transition-all hover:translate-x-1 hover:text-[#FF8500]"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Contactgegevens (geen bezoekadres, landelijk actief) */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#00C8D4]">
              Contactgegevens
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <span className="block text-xs text-white/50">Telefoon</span>
                <a href="tel:+31683662741" className="tabular-nums transition-colors hover:text-[#FF8500]">
                  06 83662741
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">E-mail</span>
                <a
                  href="mailto:contact.adkcleaning@gmail.com"
                  className="break-all transition-colors hover:text-[#FF8500]"
                >
                  contact.adkcleaning@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">Werkgebied</span>
                <span>Actief door heel Nederland (op locatie)</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/31683662741"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00C8D4]/50 bg-[#00C8D4]/10 px-4 py-2 font-[family-name:var(--font-display)] text-xs font-semibold text-white transition-all hover:border-[#00C8D4] hover:bg-[#00C8D4]/20"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00C8D4]" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-white/55 sm:flex-row sm:items-center">
          <p className="tabular-nums">
            &copy; {currentYear} ADK Cleaning. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacybeleid"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'privacybeleid' });
              }}
              className="transition-colors hover:text-white"
            >
              Privacybeleid
            </a>
            <a
              href="#offerte"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'offerte' });
              }}
              className="transition-colors hover:text-white"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
