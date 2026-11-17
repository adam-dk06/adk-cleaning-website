import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IMG_VW_TRANSPORTER, IMG_DRIVEWAY_EQUIPMENT } from '../data/services';
import { MediaImage } from './MediaImage';
import type { AppRoute } from './Header';

interface AboutEditorialSectionProps {
  onNavigate: (route: AppRoute) => void;
}

export function AboutEditorialSection({ onNavigate }: AboutEditorialSectionProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Asymmetrische combinatie van standaard grijze VW Transporter & professioneel materieel zonder personen */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl">
              <MediaImage
                src={IMG_VW_TRANSPORTER}
                alt="Standaard grijze Volkswagen Transporter geparkeerd bij een modern gebouw"
                className="aspect-[16/10]"
                imgClassName="transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>

            {/* Overlappende foto van professioneel reinigingsmaterieel & schone oprit (zonder personen) */}
            <div className="mt-5 grid grid-cols-1 items-center gap-5 sm:grid-cols-12 lg:-mt-16 lg:pl-6">
              <div className="overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_44px_rgba(11,29,51,0.22)] sm:col-span-5">
                <MediaImage
                  src={IMG_DRIVEWAY_EQUIPMENT}
                  alt="Professioneel glasbewassingsmaterieel op een schone oprit"
                  className="aspect-[4/3]"
                />
              </div>

              <div className="border-b border-[#0B1D33]/12 pb-3 text-xs font-medium text-[#52657A] sm:col-span-7 lg:pt-14">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>Grijze Volkswagen Transporter · Op locatie ingezet</span>
                  <span className="inline-flex items-center gap-1.5 text-[#0099A3]">
                    <svg width="13" height="15" viewBox="0 0 24 28" fill="none" aria-hidden="true">
                      <path
                        d="M14.2 1.8L18.5 3.6L20.4 7.8L19.1 11.4L22.2 14.5L20.3 18.8L16.8 20.6L17.4 25.4L13.4 26.2L11.6 22.8L7.4 22.4L3.8 19.6L4.6 14.8L2.8 12.2L6.4 7.2L10.8 3.2L14.2 1.8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Actief door heel Nederland</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Persoonlijke redactionele tekststroom */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                Over ADK Cleaning
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1D33]">
              Persoonlijke service. Professioneel resultaat.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#47596E]">
              ADK Cleaning is landelijk actief en biedt professionele reinigingsdiensten aan
              particulieren, bedrijven en VvE’s door heel Nederland. Bij ADK Cleaning heeft u
              rechtstreeks en persoonlijk contact: korte lijnen, heldere communicatie en vaste
              afspraken.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#47596E]">
              Uw pand verdient de beste verzorging. Daarom rijd ik met een representatieve,
              standaard grijze Volkswagen Transporter compleet uitgerust met professioneel
              reinigingsmaterieel naar iedere locatie in Nederland.
            </p>

            {/* Open typografische doelgroepen zonder blokken */}
            <div className="mt-9 grid grid-cols-3 gap-6 border-t border-[#0B1D33]/12 pt-7">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#0B1D33]">
                  Particulier
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#52657A]">
                  Persoonlijk en netjes onderhoud aan huis.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#0B1D33]">
                  Zakelijk
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#52657A]">
                  Representatieve kantoren en bedrijfspanden.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#0B1D33]">
                  VvE’s
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#52657A]">
                  Betrouwbare verzorging van complexen.
                </p>
              </div>
            </div>

            <div className="mt-9">
              <a
                href="#over-ons"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ page: 'over-ons' });
                }}
                className="group inline-flex items-center gap-2.5 border-b border-[#0B1D33]/25 pb-1.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:border-[#00C8D4] hover:text-[#FF8500]"
              >
                <span>Lees meer over mijn werkwijze</span>
                <ArrowRight className="h-4 w-4 text-[#FF8500] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
