import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Pencil, Plus, Star, Trash2, X } from 'lucide-react';
import { useCustomerReviews, type CustomerReview } from '../data/reviews';
import { IMG_HOUSE, SERVICES } from '../data/services';
import { MediaImage } from '../components/MediaImage';
import { CurveDivider } from '../components/CurveDivider';
import { OfferteCtaSection } from '../components/OfferteCtaSection';
import type { AppRoute } from '../components/Header';

interface ReviewsPageProps {
  onNavigate: (route: AppRoute) => void;
  initialOpenForm?: boolean;
}

type ReviewFilter = 'alle' | CustomerReview['clientType'];

const REVIEW_FILTERS: { id: ReviewFilter; label: string }[] = [
  { id: 'alle', label: 'Alle reviews' },
  { id: 'Particulier', label: 'Particulier' },
  { id: 'Zakelijk', label: 'Zakelijk' },
  { id: 'VvE', label: 'VvE' },
];

const REVIEW_SERVICE_OPTIONS: string[] = [
  ...(SERVICES[0] ? [SERVICES[0].name] : []),
  'Glasbewassing buiten',
  ...SERVICES.slice(1).map((item) => item.name),
];

export function ReviewsPage({ onNavigate, initialOpenForm = false }: ReviewsPageProps) {
  const { reviews, addReview, updateReview, deleteReview } = useCustomerReviews();
  const [filter, setFilter] = useState<ReviewFilter>('alle');
  const [formOpen, setFormOpen] = useState(initialOpenForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [manageMode, setManageMode] = useState(false);

  const [authorName, setAuthorName] = useState('');
  const [clientType, setClientType] = useState<CustomerReview['clientType']>('Particulier');
  const [service, setService] = useState(SERVICES[0]?.name ?? 'Glasbewassing binnen en buiten');
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5>(5);
  const [quote, setQuote] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [savedNotice, setSavedNotice] = useState('');

  useEffect(() => {
    if (initialOpenForm) {
      setFormOpen(true);
    }
  }, [initialOpenForm]);

  const resetForm = () => {
    setAuthorName('');
    setClientType('Particulier');
    setService(SERVICES[0]?.name ?? 'Glasbewassing binnen en buiten');
    setRating(5);
    setQuote('');
    setEditingId(null);
    setErrorMsg('');
  };

  const handleOpenAdd = () => {
    resetForm();
    setFormOpen(true);
    setSavedNotice('');
  };

  const handleStartEdit = (review: CustomerReview) => {
    setAuthorName(review.authorName);
    setClientType(review.clientType);
    setService(review.service);
    setRating(review.rating);
    setQuote(review.quote);
    setEditingId(review.id);
    setErrorMsg('');
    setSavedNotice('');
    setFormOpen(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = authorName.trim();
    const cleanQuote = quote.trim();
    const cleanService = service.trim();

    if (!cleanName || !cleanQuote) {
      setErrorMsg('Vul alstublieft zowel een naam als een reviewtekst in.');
      return;
    }

    if (editingId) {
      updateReview(editingId, {
        authorName: cleanName,
        clientType,
        service: cleanService || 'Reiniging op locatie',
        rating,
        quote: cleanQuote,
      });
      setSavedNotice('De review is bijgewerkt.');
    } else {
      addReview({
        authorName: cleanName,
        clientType,
        service: cleanService || 'Reiniging op locatie',
        rating,
        quote: cleanQuote,
      });
      setSavedNotice('De review is toegevoegd.');
    }

    resetForm();
    setFormOpen(false);
  };

  const filteredReviews =
    filter === 'alle'
      ? reviews
      : reviews.filter((item) => item.clientType === filter);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1D33] pb-24 pt-36 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 z-0 opacity-25">
          <MediaImage
            src={IMG_HOUSE}
            alt="Nederlandse woning met schone gevel en ramen"
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
            <span className="text-white">Reviews</span>
          </nav>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                  Klantbeoordelingen · ADK Cleaning
                </span>
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.4vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
                Ervaringen met ADK Cleaning.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                Duidelijke afspraken, nette communicatie en verzorgd werk door heel Nederland.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleOpenAdd}
                className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#FF8500] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(255,133,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
              >
                <Plus className="h-4 w-4" />
                <span>Review toevoegen</span>
              </button>

              {reviews.length > 0 && (
                <button
                  type="button"
                  onClick={() => setManageMode((prev) => !prev)}
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-5 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold transition-all duration-200 ${
                    manageMode
                      ? 'border-[#00C8D4] bg-[#00C8D4]/15 text-white'
                      : 'border-white/25 bg-white/5 text-white/85 hover:border-white/50 hover:text-white'
                  }`}
                >
                  <Pencil className="h-4 w-4 text-[#00C8D4]" />
                  <span>{manageMode ? 'Klaar met beheren' : 'Reviews beheren'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
          <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {savedNotice && (
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#00C8D4]/40 pb-4 text-sm font-medium text-[#0B1D33]">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[#0099A3]" />
                <span>{savedNotice}</span>
              </span>
              <button
                type="button"
                onClick={() => setSavedNotice('')}
                aria-label="Melding sluiten"
                className="text-[#52657A] hover:text-[#0B1D33]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Formulier om zelf reviews toe te voegen of te bewerken */}
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-16 rounded-2xl bg-[#F4F7FA] p-6 sm:p-10"
            >
              <div className="mb-8 flex items-start justify-between gap-4 border-b border-[#0B1D33]/12 pb-5">
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0B1D33]">
                    {editingId ? 'Review bewerken' : 'Nieuwe review toevoegen'}
                  </h2>
                  <p className="mt-1 text-sm text-[#52657A]">
                    Vul de gegevens hieronder in om de beoordeling direct op de website te plaatsen.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormOpen(false);
                    resetForm();
                  }}
                  aria-label="Formulier sluiten"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#52657A] transition-colors hover:bg-[#0B1D33]/10 hover:text-[#0B1D33]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <label
                    htmlFor="review-author"
                    className="mb-2 block font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]"
                  >
                    Naam klant *
                  </label>
                  <input
                    id="review-author"
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Naam van de klant"
                    className="w-full rounded-xl border border-[#0B1D33]/15 bg-white px-4 py-3 text-sm text-[#0B1D33] outline-none transition-colors focus:border-[#00C8D4]"
                  />
                </div>

                <div className="md:col-span-4">
                  <label
                    htmlFor="review-type"
                    className="mb-2 block font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]"
                  >
                    Type opdrachtgever
                  </label>
                  <select
                    id="review-type"
                    value={clientType}
                    onChange={(e) =>
                      setClientType(e.target.value as CustomerReview['clientType'])
                    }
                    className="w-full rounded-xl border border-[#0B1D33]/15 bg-white px-4 py-3 text-sm text-[#0B1D33] outline-none transition-colors focus:border-[#00C8D4]"
                  >
                    <option value="Particulier">Particulier</option>
                    <option value="Zakelijk">Zakelijk</option>
                    <option value="VvE">VvE</option>
                  </select>
                </div>

                <div className="md:col-span-4">
                  <label
                    htmlFor="review-service"
                    className="mb-2 block font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]"
                  >
                    Uitgevoerde dienst
                  </label>
                  <select
                    id="review-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-[#0B1D33]/15 bg-white px-4 py-3 text-sm text-[#0B1D33] outline-none transition-colors focus:border-[#00C8D4]"
                  >
                    {REVIEW_SERVICE_OPTIONS.map((serviceName) => (
                      <option key={serviceName} value={serviceName}>
                        {serviceName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-12">
                  <span className="mb-2 block font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                    Waardering
                  </span>
                  <div className="flex items-center gap-2">
                    {([1, 2, 3, 4, 5] as const).map((starValue) => (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setRating(starValue)}
                        aria-label={`${starValue} sterren`}
                        className="rounded-lg p-1.5 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            starValue <= rating
                              ? 'fill-[#FF8500] text-[#FF8500]'
                              : 'text-[#0B1D33]/20'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-[#52657A]">{rating} van 5 sterren</span>
                  </div>
                </div>

                <div className="md:col-span-12">
                  <label
                    htmlFor="review-quote"
                    className="mb-2 block font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]"
                  >
                    Reviewtekst *
                  </label>
                  <textarea
                    id="review-quote"
                    rows={4}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Schrijf of plak hier de reactie van de klant..."
                    className="w-full rounded-xl border border-[#0B1D33]/15 bg-white px-4 py-3 text-sm leading-relaxed text-[#0B1D33] outline-none transition-colors focus:border-[#00C8D4]"
                  />
                </div>

                {errorMsg && (
                  <div className="md:col-span-12">
                    <p className="text-sm font-medium text-[#D9534F]">{errorMsg}</p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 md:col-span-12">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FF8500] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(255,133,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E67600]"
                  >
                    <Check className="h-4 w-4" />
                    <span>{editingId ? 'Wijziging opslaan' : 'Review plaatsen'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormOpen(false);
                      resetForm();
                    }}
                    className="rounded-full px-5 py-3 text-sm font-semibold text-[#52657A] transition-colors hover:text-[#0B1D33]"
                  >
                    Annuleren
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {reviews.length > 0 ? (
            <>
              <div
                className="mb-14 flex flex-wrap items-center gap-3"
                role="tablist"
                aria-label="Filter klantreviews"
              >
                {REVIEW_FILTERS.map((tab) => {
                  const isActive = filter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setFilter(tab.id)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 font-[family-name:var(--font-display)] text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-[#0B1D33] text-white'
                          : 'bg-[#F4F7FA] text-[#47596E] hover:bg-[#0B1D33]/10 hover:text-[#0B1D33]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {filteredReviews.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-16 gap-y-2 border-t border-[#0B1D33]/12 md:grid-cols-2">
                  {filteredReviews.map((review, idx) => (
                    <motion.article
                      key={review.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between border-b border-[#0B1D33]/12 py-10"
                    >
                      <div>
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <div
                            className="flex items-center gap-1 text-[#FF8500]/90"
                            aria-label={`${review.rating} van 5 sterren`}
                          >
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-[#FF8500]" />
                            ))}
                          </div>

                          {manageMode && (
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleStartEdit(review)}
                                className="inline-flex items-center gap-1 rounded-full border border-[#0B1D33]/15 px-3 py-1 text-xs font-medium text-[#0B1D33] transition-colors hover:border-[#00C8D4] hover:text-[#0099A3]"
                              >
                                <Pencil className="h-3 w-3" />
                                <span>Bewerken</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteReview(review.id)}
                                className="inline-flex items-center gap-1 rounded-full border border-[#D9534F]/25 px-3 py-1 text-xs font-medium text-[#D9534F] transition-colors hover:bg-[#D9534F] hover:text-white"
                              >
                                <Trash2 className="h-3 w-3" />
                                <span>Verwijderen</span>
                              </button>
                            </div>
                          )}
                        </div>

                        <blockquote className="text-lg font-medium leading-relaxed text-[#0B1D33] sm:text-xl">
                          “{review.quote}”
                        </blockquote>
                      </div>

                      <div className="mt-6">
                        <p className="font-[family-name:var(--font-display)] text-base font-bold text-[#0B1D33]">
                          {review.authorName}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#52657A]">
                          <span>{review.clientType}</span>
                          <span aria-hidden="true">·</span>
                          <span>{review.service}</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="border-t border-[#0B1D33]/12 py-12">
                  <p className="text-base text-[#47596E]">
                    Er zijn nog geen reviews binnen deze categorie toegevoegd.
                  </p>
                </div>
              )}
            </>
          ) : (
            !formOpen && (
              <div className="border-t border-[#0B1D33]/12 py-16">
                <div className="max-w-xl">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#0B1D33]">
                    Voeg uw eigen klantreviews toe
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#47596E]">
                    Er staan op dit moment nog geen beoordelingen op deze pagina. Klik op de knop
                    hieronder om uw echte klantervaringen direct toe te voegen.
                  </p>
                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={handleOpenAdd}
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#FF8500] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(255,133,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Eerste review toevoegen</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <CurveDivider fromColor="#FFFFFF" toColor="#0B1D33" variant="wave" />
      <OfferteCtaSection onNavigate={onNavigate} />
    </>
  );
}
