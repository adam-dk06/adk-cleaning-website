import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/services';
import { MediaImage } from '../components/MediaImage';
import { CurveDivider } from '../components/CurveDivider';
import { OfferteCtaSection } from '../components/OfferteCtaSection';
import type { AppRoute } from '../components/Header';

interface DienstDetailPageProps {
  slug: string;
  onNavigate: (route: AppRoute) => void;
}

export function DienstDetailPage({ slug, onNavigate }: DienstDetailPageProps) {
  const index = SERVICES.findIndex((s) => s.slug === slug);
  const service = index >= 0 ? SERVICES[index] : SERVICES[0];
  const currentIdx = index >= 0 ? index : 0;
  const prevService = SERVICES[(currentIdx - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(currentIdx + 1) % SERVICES.length];

  return (
    <>
      {/* Full-width service hero */}
      <section className="relative overflow-hidden bg-[#0B1D33] pb-24 pt-36 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 z-0 opacity-30">
          <MediaImage
            src={service.image}
            alt={service.imageAlt}
            loading="eager"
            className="h-full w-full"
          />
        </div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(11,29,51,0.96) 18%, rgba(11,29,51,0.8) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/65" aria-label="Kruimelpad">
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
            <a
              href="#diensten"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'diensten' });
              }}
              className="transition-colors hover:text-[#00C8D4]"
            >
              Diensten
            </a>
            <span className="text-[#00C8D4]" aria-hidden="true">
              /
            </span>
            <span className="text-white">{service.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm text-white/80">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <span>{service.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{service.targetAudience}</span>
            </div>

            <motion.h1
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.5vw,3.85rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
            >
              {service.name}
            </motion.h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/82">
              {service.editorialIntro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#offerte"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ page: 'offerte', preselect: service.name });
                }}
                className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#FF8500] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(255,133,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
              >
                <span>Offerte aanvragen</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#diensten"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate({ page: 'diensten' });
                }}
                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-white/30 bg-white/8 px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-all duration-300 hover:border-[#00C8D4] hover:bg-[#00C8D4]/15"
              >
                Alle 11 diensten
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
          <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
        </div>
      </section>

      {/* Detail Split: Fotografie + Inhoud & Voordelen */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl">
                <MediaImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[4/3]"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                  Zorgvuldige uitvoering
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B1D33] sm:text-4xl">
                Wat u van ons mag verwachten.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#47596E]">
                {service.detailDescription}
              </p>

              <ul className="mt-8 divide-y divide-[#0B1D33]/10 border-y border-[#0B1D33]/10">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3.5 py-3.5 text-sm text-[#384A5E] sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF8500]" strokeWidth={2.2} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Werkwijze in 3 schone stappen (zonder kaart-boxen) */}
          <div className="mt-24 border-y border-[#0B1D33]/12 py-14 md:mt-28 md:py-16">
            <div className="mb-10 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
                Onze werkwijze in drie stappen
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              {service.steps.map((step, i) => (
                <div key={step.title}>
                  <span className="tabular-nums font-[family-name:var(--font-display)] text-sm font-bold text-[#0099A3]">
                    0{i + 1}.
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#47596E] sm:text-base">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vorige & Volgende dienst navigatie */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <a
              href={`#dienst/${prevService.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'dienst', slug: prevService.slug });
              }}
              className="group inline-flex items-center gap-2.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:text-[#FF8500]"
            >
              <ArrowLeft className="h-4 w-4 text-[#0099A3] transition-transform group-hover:-translate-x-1" />
              <span>Vorige: {prevService.name}</span>
            </a>

            <a
              href={`#dienst/${nextService.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'dienst', slug: nextService.slug });
              }}
              className="group inline-flex items-center gap-2.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:text-[#FF8500]"
            >
              <span>Volgende: {nextService.name}</span>
              <ArrowRight className="h-4 w-4 text-[#FF8500] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <CurveDivider fromColor="#FFFFFF" toColor="#0B1D33" variant="wave" />
      <OfferteCtaSection
        onNavigate={onNavigate}
        eyebrow={`Interesse in ${service.name.toLowerCase()}?`}
        preselectService={service.name}
      />
    </>
  );
}
