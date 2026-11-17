import { motion } from 'motion/react';
import { ArrowRight, Plus, Star } from 'lucide-react';
import { useCustomerReviews } from '../data/reviews';
import { CurveDivider } from './CurveDivider';
import type { AppRoute } from './Header';

interface ReviewsEditorialSectionProps {
  onNavigate: (route: AppRoute) => void;
}

export function ReviewsEditorialSection({ onNavigate }: ReviewsEditorialSectionProps) {
  const { reviews } = useCustomerReviews();
  const featuredReviews = reviews.slice(0, 4);

  return (
    <>
      <CurveDivider fromColor="#FFFFFF" toColor="#F4F7FA" variant="arch" />

      <section className="bg-[#F4F7FA] py-20 md:py-28" aria-label="Klantreviews">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                  Reviews
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1D33]">
                Ervaringen van klanten.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#47596E]">
                {reviews.length > 0
                  ? 'Lees hoe particulieren, bedrijven en VvE’s de samenwerking en het resultaat van ADK Cleaning ervaren.'
                  : 'Heeft ADK Cleaning bij u mogen reinigen? Deel uw ervaring of voeg uw geplaatste klantreviews direct zelf toe.'}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate({ page: 'reviews' });
                  }}
                  className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#FF8500] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(255,133,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
                >
                  <span>Bekijk alle reviews</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'reviews', openForm: true })}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#0B1D33]/20 bg-white px-6 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-all duration-200 hover:border-[#00C8D4] hover:text-[#0099A3]"
                >
                  <Plus className="h-4 w-4 text-[#FF8500]" />
                  <span>Review toevoegen</span>
                </button>
              </div>
            </motion.div>

            <div className="border-t border-[#0B1D33]/12 lg:col-span-7">
              {featuredReviews.length > 0 ? (
                featuredReviews.map((review, idx) => (
                  <motion.article
                    key={review.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-[#0B1D33]/12 py-8 first:pt-6 last:pb-6"
                  >
                    <div
                      className="mb-3 flex items-center gap-1 text-[#FF8500]/90"
                      aria-label={`${review.rating} van 5 sterren`}
                    >
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#FF8500]" />
                      ))}
                    </div>

                    <blockquote className="text-lg font-medium leading-relaxed text-[#0B1D33] sm:text-xl">
                      “{review.quote}”
                    </blockquote>

                    <div className="mt-3.5 flex flex-wrap items-center gap-2 text-sm text-[#52657A]">
                      <span className="font-[family-name:var(--font-display)] font-semibold text-[#0B1D33]">
                        {review.authorName}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{review.clientType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{review.service}</span>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="border-b border-[#0B1D33]/12 py-10">
                  <p className="text-lg font-medium leading-relaxed text-[#0B1D33]">
                    Nog geen reviews toegevoegd.
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#52657A]">
                    Klik op “Review toevoegen” om uw eigen klantervaringen direct op de website te
                    plaatsen. Deze verschijnen meteen hier en op de reviewspagina.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CurveDivider fromColor="#F4F7FA" toColor="#0B1D33" variant="wave" />
    </>
  );
}
