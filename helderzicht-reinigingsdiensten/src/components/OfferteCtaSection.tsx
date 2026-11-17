import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import type { AppRoute } from './Header';

interface OfferteCtaSectionProps {
  onNavigate: (route: AppRoute) => void;
  eyebrow?: string;
  preselectService?: string;
}

export function OfferteCtaSection({
  onNavigate,
  eyebrow = 'Vrijblijvend advies en prijsopgave',
  preselectService,
}: OfferteCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1D33] py-24 text-white md:py-32">
      {/* Subtiele architecturale lichtaccenten in turquoise en oranje */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #00C8D4 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[400px] w-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #FF8500 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              Op zoek naar een betrouwbare reinigingspartner?
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Wij zorgen voor een schoon en representatief resultaat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end"
          >
            <a
              href="#offerte"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ page: 'offerte', preselect: preselectService });
              }}
              className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full bg-[#FF8500] px-8 py-4 font-[family-name:var(--font-display)] text-base font-semibold text-white shadow-[0_14px_34px_-10px_rgba(255,133,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
            >
              <span>Vraag vrijblijvend een offerte aan</span>
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <Check className="h-4 w-4 text-[#00C8D4]" />
              <span>Binnen 24 uur een heldere prijsopgave op maat</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
