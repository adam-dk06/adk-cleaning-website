import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IMG_HERO } from '../data/services';
import { MediaImage } from './MediaImage';
import { CurveDivider } from './CurveDivider';
import type { AppRoute } from './Header';

interface HeroSectionProps {
  onNavigate: (route: AppRoute) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#0B1D33] pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Volledige cinematografische achtergrondfoto zonder personen */}
      <div className="absolute inset-0 z-0">
        <MediaImage
          src={IMG_HERO}
          alt="Modern glazen kantoorgebouw met streeploos gereinigde gevelramen"
          loading="eager"
          className="h-full w-full"
          imgClassName="object-cover object-center transition-transform duration-[18s] ease-out scale-[1.03]"
        />
        {/* Subtiele dark navy gradiënt achter tekst voor optimale leesbaarheid */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(11,29,51,0.92) 0%, rgba(11,29,51,0.74) 48%, rgba(11,29,51,0.34) 100%), linear-gradient(180deg, rgba(11,29,51,0.45) 0%, transparent 28%, rgba(11,29,51,0.55) 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex flex-wrap items-center gap-3 text-white/90"
          >
            <span className="h-[2px] w-8 bg-[#00C8D4]" aria-hidden="true" />
            <span className="font-[family-name:var(--font-display)] text-sm font-medium tracking-wide">
              ADK Cleaning
            </span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-medium text-[#00C8D4]">
              <svg width="15" height="17" viewBox="0 0 24 28" fill="none" aria-hidden="true">
                <path
                  d="M14.2 1.8L18.5 3.6L20.4 7.8L19.1 11.4L22.2 14.5L20.3 18.8L16.8 20.6L17.4 25.4L13.4 26.2L11.6 22.8L7.4 22.4L3.8 19.6L4.6 14.8L2.8 12.2L6.4 7.2L10.8 3.2L14.2 1.8Z"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Actief door heel Nederland</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-[clamp(2.45rem,5.4vw,4.65rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          >
            Een schoon resultaat.
            <br />
            Tot in ieder detail<span className="text-[#FF8500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            Professionele reinigingsdiensten voor particulieren, bedrijven en VvE’s.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#offerte"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'offerte' });
              }}
              className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#FF8500] px-8 py-4 font-[family-name:var(--font-display)] text-[0.95rem] font-semibold text-white shadow-[0_14px_34px_-10px_rgba(255,133,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
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
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-white/35 bg-white/8 px-8 py-4 font-[family-name:var(--font-display)] text-[0.95rem] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00C8D4] hover:bg-[#00C8D4]/15"
            >
              Bekijk onze diensten
            </a>
          </motion.div>
        </div>
      </div>

      {/* Gebogen overgang onderaan de hero */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
        <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
      </div>
    </section>
  );
}
