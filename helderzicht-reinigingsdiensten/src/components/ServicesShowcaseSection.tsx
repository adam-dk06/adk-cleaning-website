import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { MediaImage } from './MediaImage';
import { CurveDivider } from './CurveDivider';
import type { AppRoute } from './Header';

interface ServicesShowcaseSectionProps {
  onNavigate: (route: AppRoute) => void;
}

const FEATURED_SHOWCASES = [
  {
    number: '01',
    slug: 'glasbewassing-binnen-en-buiten',
    eyebrow: 'Particulier, zakelijk en VvE',
    title: 'Glasbewassing binnen en buiten',
    description:
      'Streeploos heldere ramen, kozijnen en glaspartijen op iedere hoogte. Binnen traditioneel met de hand en buiten zowel klassiek als met gedemineraliseerd osmosewater.',
    cta: 'Bekijk glasbewassing',
    aspect: 'aspect-[16/10]',
    reverse: false,
  },
  {
    number: '02',
    slug: 'gevelreiniging',
    eyebrow: 'Exterieur en gevelbehoud',
    title: 'Gevelreiniging & Softwash',
    description:
      'Verwijder groene aanslag, roet en weersvervuiling zonder voegen of pleisterwerk te belasten. Zowel krachtige gevelreiniging als zachte lage-druk softwash voor kwetsbare gevels.',
    cta: 'Ontdek gevelreiniging',
    aspect: 'aspect-[4/3]',
    reverse: true,
  },
  {
    number: '03',
    slug: 'vloerreiniging',
    eyebrow: 'Interieur en oplevering',
    title: 'Vloerreiniging & Oplevering',
    description:
      'Machinale dieptereiniging en conservering van natuursteen, PVC en gietvloeren, of een volledige opleveringsschoonmaak tot in het kleinste detail na nieuwbouw of renovatie.',
    cta: 'Bekijk vloerreiniging',
    aspect: 'aspect-[16/10]',
    reverse: false,
  },
  {
    number: '04',
    slug: 'zonnepanelenreiniging',
    eyebrow: 'Rendement en dakonderhoud',
    title: 'Zonnepanelen, Dakkapellen & Dakgoten',
    description:
      'Krasvrij gereinigde zonnepanelen voor maximaal rendement, strakke dakkapellen en vrije dakgoten zonder bladeren of verstoppingen. Veilig verzorgd tot aan de nok.',
    cta: 'Bekijk zonnepanelenreiniging',
    aspect: 'aspect-[4/3]',
    reverse: true,
  },
];

export function ServicesShowcaseSection({ onNavigate }: ServicesShowcaseSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const activePreview = SERVICES[hoveredIndex] ?? SERVICES[0];

  return (
    <>
      {/* Deel A: Grote afwisselende fotografische secties (geen blokken/kaarten) */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-end gap-8 pb-16 md:grid-cols-12 md:pb-24">
            <div className="md:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                  Onze expertise
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1D33]">
                Uw pand verdient de beste verzorging.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-[#47596E] md:text-lg">
                Van kristalhelder glaswerk en gevelonderhoud tot dieptereiniging van vloeren en
                zonnepanelen. Elke opdracht krijgt een aanpak afgestemd op het materiaal.
              </p>
            </div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {FEATURED_SHOWCASES.map((item) => {
              const service = SERVICES.find((s) => s.slug === item.slug) ?? SERVICES[0];
              return (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  {/* Fotografie */}
                  <div
                    className={`group relative lg:col-span-7 ${
                      item.reverse ? 'lg:order-2' : 'lg:order-1'
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
                        className={item.aspect}
                        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </a>
                    {/* Overlappend architecturaal detail zonder logge kaart */}
                    <div
                      className={`mt-4 flex items-center justify-between border-b border-[#0B1D33]/12 pb-3 text-xs text-[#52657A] lg:absolute lg:-bottom-6 lg:mt-0 lg:w-72 lg:rounded-xl lg:border-b-0 lg:bg-[#0B1D33] lg:px-5 lg:py-3.5 lg:text-white/85 lg:shadow-[0_18px_38px_rgba(11,29,51,0.22)] ${
                        item.reverse ? 'lg:left-6' : 'lg:right-6'
                      }`}
                    >
                      <span className="tabular-nums font-[family-name:var(--font-display)] font-semibold text-[#00C8D4]">
                        {item.number}
                      </span>
                      <span className="truncate pl-3 font-medium">{service.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Tekstuele flow */}
                  <div
                    className={`lg:col-span-5 ${
                      item.reverse ? 'lg:order-1 lg:pr-4' : 'lg:order-2 lg:pl-4'
                    }`}
                  >
                    <div className="mb-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#FF8500] to-[#00C8D4]" />
                    <p className="text-sm font-medium text-[#0099A3]">{item.eyebrow}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0B1D33] sm:text-3xl lg:text-[2.2rem] lg:leading-[1.12]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#47596E]">
                      {item.description}
                    </p>
                    <div className="mt-8">
                      <a
                        href={`#dienst/${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate({ page: 'dienst', slug: service.slug });
                        }}
                        className="group/link inline-flex items-center gap-2.5 border-b border-[#0B1D33]/25 pb-1.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:border-[#00C8D4] hover:text-[#FF8500]"
                      >
                        <span>{item.cta}</span>
                        <ArrowRight className="h-4 w-4 text-[#FF8500] transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CurveDivider fromColor="#FFFFFF" toColor="#F4F7FA" variant="wave" />

      {/* Deel B: Interactieve index van alle 11 diensten (zonder vierkante kaarten) */}
      <section className="bg-[#F4F7FA] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-end gap-8 pb-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                  Volledig dienstenaanbod
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#0B1D33]">
                Alle 11 specialistische diensten.
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href="#diensten"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ page: 'diensten' });
                }}
                className="inline-flex items-center gap-2 border-b border-[#0B1D33]/25 pb-1.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:border-[#00C8D4] hover:text-[#FF8500]"
              >
                <span>Open uitgebreid dienstenoverzicht</span>
                <ArrowRight className="h-4 w-4 text-[#FF8500]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Haarlijn-directory van alle 11 diensten */}
            <div className="border-t border-[#0B1D33]/12 lg:col-span-7">
              {SERVICES.map((service, index) => {
                const isActive = index === hoveredIndex;
                return (
                  <a
                    key={service.slug}
                    href={`#dienst/${service.slug}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onFocus={() => setHoveredIndex(index)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ page: 'dienst', slug: service.slug });
                    }}
                    className={`group grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b py-4 transition-all duration-200 ${
                      isActive
                        ? 'border-[#00C8D4] pl-3'
                        : 'border-[#0B1D33]/12 hover:border-[#00C8D4] hover:pl-3'
                    }`}
                  >
                    <span className="tabular-nums font-[family-name:var(--font-display)] text-xs font-bold text-[#0099A3]">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span
                      className={`font-[family-name:var(--font-display)] text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                        isActive ? 'text-[#FF8500]' : 'text-[#0B1D33] group-hover:text-[#FF8500]'
                      }`}
                    >
                      {service.name}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#52657A] transition-colors group-hover:text-[#0B1D33]">
                      <span className="hidden sm:inline">Bekijk dienst</span>
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isActive
                            ? 'translate-x-1 text-[#FF8500]'
                            : 'text-[#52657A] group-hover:translate-x-1 group-hover:text-[#FF8500]'
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Vloeiende live fotovoorvertoning (desktop) */}
            <div className="hidden lg:sticky lg:top-28 lg:col-span-5 lg:block">
              <div className="overflow-hidden rounded-2xl">
                <MediaImage
                  src={activePreview.image}
                  alt={activePreview.imageAlt}
                  className="aspect-[4/3]"
                  imgClassName="transition-all duration-500 ease-out"
                />
              </div>
              <div className="mt-5 border-t border-[#0B1D33]/10 pt-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#52657A]">
                  <span className="text-[#0099A3]">{activePreview.categoryLabel}</span>
                  <span aria-hidden="true">/</span>
                  <span>{activePreview.targetAudience}</span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-[#384A5E]">
                  {activePreview.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider fromColor="#F4F7FA" toColor="#FFFFFF" variant="sweep" />
    </>
  );
}
