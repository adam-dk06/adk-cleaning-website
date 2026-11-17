import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, IMG_HERO, type ServiceCategory } from '../data/services';
import { MediaImage } from '../components/MediaImage';
import { CurveDivider } from '../components/CurveDivider';
import { OfferteCtaSection } from '../components/OfferteCtaSection';
import type { AppRoute } from '../components/Header';

interface DienstenOverviewPageProps {
  onNavigate: (route: AppRoute) => void;
}

type FilterOption = 'all' | ServiceCategory;

const FILTER_TABS: { id: FilterOption; label: string }[] = [
  { id: 'all', label: 'Alle diensten (11)' },
  { id: 'glas-gevel', label: 'Glas & gevel' },
  { id: 'dak-buiten', label: 'Dak & buitenterrein' },
  { id: 'interieur', label: 'Interieur & oplevering' },
];

export function DienstenOverviewPage({ onNavigate }: DienstenOverviewPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const visibleServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeFilter);

  return (
    <>
      {/* Subpage Hero */}
      <section className="relative overflow-hidden bg-[#0B1D33] pb-24 pt-36 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 z-0 opacity-30">
          <MediaImage
            src={IMG_HERO}
            alt="Specialistische reiniging van moderne architectuur"
            loading="eager"
            className="h-full w-full"
          />
        </div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(11,29,51,0.96) 18%, rgba(11,29,51,0.82) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/65" aria-label="Kruimelpad">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'home' });
              }}
              className="transition-colors hover:text-[#00C8D4]"
            >
              Home
            </a>
            <span className="text-[#00C8D4]" aria-hidden="true">
              /
            </span>
            <span className="text-white">Diensten</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                Totaalonderhoud voor elk object
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.4vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
              Onze 11 specialistische reinigingsdiensten.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Voor elk type woning, bedrijfspand of VvE-complex bieden wij een duurzame,
              veilige en grondige reinigingsoplossing.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
          <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
        </div>
      </section>

      {/* Filter & Afwisselende Fotosecties */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {/* Interactive Segmented Filter Controls */}
          <div
            className="mb-16 flex flex-wrap items-center gap-3 border-b border-[#0B1D33]/10 pb-5 md:mb-24"
            role="tablist"
            aria-label="Filter diensten op categorie"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 font-[family-name:var(--font-display)] text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0B1D33] text-white'
                      : 'bg-[#F4F7FA] text-[#47596E] hover:bg-[#0B1D33]/8 hover:text-[#0B1D33]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-24 md:space-y-32">
            {visibleServices.map((service, index) => {
              const isReverse = index % 2 === 1;
              return (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  <div
                    className={`group relative lg:col-span-6 ${
                      isReverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <a
                      href={`#dienst/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate({ page: 'dienst', slug: service.slug });
                      }}
                      className="block overflow-hidden rounded-2xl"
                    >
                      <MediaImage
                        src={service.image}
                        alt={service.imageAlt}
                        className={isReverse ? 'aspect-[4/3]' : 'aspect-[16/10]'}
                        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </a>
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      isReverse ? 'lg:order-1 lg:pr-6' : 'lg:order-2 lg:pl-6'
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-2.5 text-xs font-medium text-[#52657A]">
                      <span className="tabular-nums font-[family-name:var(--font-display)] font-bold text-[#0099A3]">
                        {String(service.id).padStart(2, '0')}.
                      </span>
                      <span aria-hidden="true">/</span>
                      <span>{service.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.targetAudience}</span>
                    </div>

                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0B1D33] sm:text-3xl lg:text-[2.3rem] lg:leading-[1.12]">
                      {service.name}
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-[#47596E]">
                      {service.editorialIntro}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-6">
                      <a
                        href={`#dienst/${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ page: 'dienst', slug: service.slug });
                        }}
                        className="group/link inline-flex items-center gap-2.5 border-b border-[#0B1D33]/25 pb-1.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:border-[#00C8D4] hover:text-[#FF8500]"
                      >
                        <span>Bekijk details en werkwijze</span>
                        <ArrowRight className="h-4 w-4 text-[#FF8500] transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>

                      <a
                        href="#offerte"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ page: 'offerte', preselect: service.name });
                        }}
                        className="text-sm font-medium text-[#52657A] transition-colors hover:text-[#0B1D33]"
                      >
                        Direct offerte aanvragen
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CurveDivider fromColor="#FFFFFF" toColor="#0B1D33" variant="wave" />
      <OfferteCtaSection onNavigate={onNavigate} />
    </>
  );
}
