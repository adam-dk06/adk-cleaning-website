import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export type AppRoute =
  | { page: 'home' }
  | { page: 'diensten' }
  | { page: 'dienst'; slug: string }
  | { page: 'reviews'; openForm?: boolean }
  | { page: 'over-ons' }
  | { page: 'offerte'; preselect?: string }
  | { page: 'privacybeleid' };

interface HeaderProps {
  route: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export function Header({ route, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navigateAndClose = (nextRoute: AppRoute) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    onNavigate(nextRoute);
  };

  const isServicesActive = route.page === 'diensten' || route.page === 'dienst';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1D33]/95 py-3.5 shadow-[0_12px_36px_rgba(7,19,34,0.2)] backdrop-blur-md'
            : 'bg-gradient-to-b from-[#0B1D33]/75 to-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
          {/* Zone 1: Brand wordmark (1-line clean lockup) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateAndClose({ page: 'home' });
            }}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00C8D4]"
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

          {/* Zone 2: 4 single-line navigation links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'home' });
              }}
              className={`relative shrink-0 whitespace-nowrap py-1.5 font-[family-name:var(--font-display)] text-sm font-medium transition-colors ${
                route.page === 'home' ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Home
              {route.page === 'home' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00C8D4]" />
              )}
            </a>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => navigateAndClose({ page: 'diensten' })}
                aria-expanded={dropdownOpen}
                className={`relative flex shrink-0 items-center gap-1.5 whitespace-nowrap py-1.5 font-[family-name:var(--font-display)] text-sm font-medium transition-colors ${
                  isServicesActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                <span>Diensten</span>
                <ChevronDown
                  className={`h-4 w-4 text-[#00C8D4] transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
                {isServicesActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00C8D4]" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[560px] rounded-2xl border-t-2 border-[#00C8D4] bg-[#0B1D33]/98 p-7 shadow-[0_28px_64px_rgba(7,19,34,0.45)] backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                      {SERVICES.map((service) => (
                        <a
                          key={service.slug}
                          href={`#dienst/${service.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateAndClose({ page: 'dienst', slug: service.slug });
                          }}
                          className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/80 transition-colors hover:border-[#00C8D4]/50 hover:text-white"
                        >
                          <span className="truncate pr-2">{service.name}</span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#FF8500] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between pt-2">
                      <span className="text-xs text-white/55">
                        Alle 11 specialistische reinigingsdiensten
                      </span>
                      <a
                        href="#diensten"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateAndClose({ page: 'diensten' });
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF8500] transition-colors hover:text-[#ffa033]"
                      >
                        <span>Bekijk volledig overzicht</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'reviews' });
              }}
              className={`relative shrink-0 whitespace-nowrap py-1.5 font-[family-name:var(--font-display)] text-sm font-medium transition-colors ${
                route.page === 'reviews' ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Reviews
              {route.page === 'reviews' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00C8D4]" />
              )}
            </a>

            <a
              href="#over-ons"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'over-ons' });
              }}
              className={`relative shrink-0 whitespace-nowrap py-1.5 font-[family-name:var(--font-display)] text-sm font-medium transition-colors ${
                route.page === 'over-ons' ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Over ons
              {route.page === 'over-ons' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00C8D4]" />
              )}
            </a>

            <a
              href="#offerte"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'offerte' });
              }}
              className={`relative shrink-0 whitespace-nowrap py-1.5 font-[family-name:var(--font-display)] text-sm font-medium transition-colors ${
                route.page === 'offerte' ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
              {route.page === 'offerte' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#00C8D4]" />
              )}
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA button */}
          <div className="flex shrink-0 items-center gap-4">
            <a
              href="#offerte"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'offerte' });
              }}
              className="hidden shrink-0 whitespace-nowrap rounded-full bg-[#FF8500] px-6 py-2.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-[0_10px_28px_-8px_rgba(255,133,0,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E67600] lg:inline-flex"
            >
              Offerte aanvragen
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[#0B1D33] px-6 pb-12 pt-24 text-white lg:hidden">
          <nav className="mx-auto max-w-lg space-y-1" aria-label="Mobiele navigatie">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'home' });
              }}
              className="block border-b border-white/10 py-4 font-[family-name:var(--font-display)] text-2xl font-bold"
            >
              Home
            </a>

            <div className="border-b border-white/10 py-4">
              <a
                href="#diensten"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndClose({ page: 'diensten' });
                }}
                className="block font-[family-name:var(--font-display)] text-2xl font-bold"
              >
                Alle 11 diensten
              </a>
              <div className="mt-3 grid grid-cols-1 gap-2 pl-3">
                {SERVICES.map((service) => (
                  <a
                    key={service.slug}
                    href={`#dienst/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndClose({ page: 'dienst', slug: service.slug });
                    }}
                    className="py-1.5 text-sm text-white/75 transition-colors hover:text-[#00C8D4]"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'reviews' });
              }}
              className="block border-b border-white/10 py-4 font-[family-name:var(--font-display)] text-2xl font-bold"
            >
              Reviews
            </a>

            <a
              href="#over-ons"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'over-ons' });
              }}
              className="block border-b border-white/10 py-4 font-[family-name:var(--font-display)] text-2xl font-bold"
            >
              Over ons
            </a>

            <a
              href="#privacybeleid"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose({ page: 'privacybeleid' });
              }}
              className="block border-b border-white/10 py-4 font-[family-name:var(--font-display)] text-2xl font-bold"
            >
              Privacybeleid
            </a>

            <div className="pt-6">
              <a
                href="#offerte"
                onClick={(e) => {
                  e.preventDefault();
                  navigateAndClose({ page: 'offerte' });
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF8500] px-6 py-4 font-[family-name:var(--font-display)] text-base font-semibold text-white"
              >
                <span>Offerte aanvragen</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
