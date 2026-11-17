import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import { SERVICES, IMG_HERO } from '../data/services';
import { MediaImage } from '../components/MediaImage';
import { CurveDivider } from '../components/CurveDivider';
import type { AppRoute } from '../components/Header';

interface OffertePageProps {
  preselectService?: string;
  onNavigate: (route: AppRoute) => void;
}

export function OffertePage({ preselectService, onNavigate }: OffertePageProps) {
  const [naam, setNaam] = useState('');
  const [klantType, setKlantType] = useState('Particulier');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [dienst, setDienst] = useState(preselectService || SERVICES[0].name);
  const [plaats, setPlaats] = useState('');
  const [bericht, setBericht] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectService) {
      setDienst(preselectService);
    }
  }, [preselectService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = naam.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = telefoon.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('Vul alstublieft uw volledige naam in.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg('Controleer alstublieft het ingevulde e-mailadres.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 9) {
      setErrorMsg('Vul alstublieft een geldig telefoonnummer in (minimaal 9 cijfers).');
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setNaam('');
    setEmail('');
    setTelefoon('');
    setPlaats('');
    setBericht('');
    setErrorMsg('');
    setSubmitted(false);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1D33] pb-24 pt-36 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 z-0 opacity-25">
          <MediaImage
            src={IMG_HERO}
            alt="Professionele glasbewassing"
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
            <span className="text-white">Offerte aanvragen</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                Vrijblijvende prijsopgave
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.4vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
              Vraag vrijblijvend een offerte aan.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Vertel ons kort wat wij voor u mogen reinigen. U ontvangt binnen 24 uur een heldere,
              vrijblijvende reactie op maat.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
          <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Linkerkolom: Contactinformatie */}
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                  Direct contact
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B1D33] sm:text-4xl">
                Snel schakelen, helder resultaat.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#47596E]">
                ADK Cleaning is landelijk actief en biedt professionele reinigingsdiensten aan
                particulieren, bedrijven en VvE’s door heel Nederland. Wij komen op locatie bij u
                langs, zowel voor eenmalige opdrachten als periodiek onderhoud.
              </p>

              <div className="mt-10 space-y-6 border-t border-[#0B1D33]/12 pt-8">
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#00C8D4]" />
                  <div>
                    <span className="block text-xs font-medium text-[#52657A]">Telefoon</span>
                    <a
                      href="tel:+31683662741"
                      className="tabular-nums font-[family-name:var(--font-display)] text-base font-semibold text-[#0B1D33] transition-colors hover:text-[#FF8500]"
                    >
                      06 83662741
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#00C8D4]" />
                  <div>
                    <span className="block text-xs font-medium text-[#52657A]">E-mailadres</span>
                    <a
                      href="mailto:contact.adkcleaning@gmail.com"
                      className="break-all font-[family-name:var(--font-display)] text-base font-semibold text-[#0B1D33] transition-colors hover:text-[#FF8500]"
                    >
                      contact.adkcleaning@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#00C8D4]" />
                  <div>
                    <span className="block text-xs font-medium text-[#52657A]">Werkgebied</span>
                    <span className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0B1D33]">
                      Actief door heel Nederland (service op locatie)
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/31683662741"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#0B1D33]/20 bg-[#F4F7FA] px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-all hover:-translate-y-0.5 hover:border-[#00C8D4] hover:bg-[#00C8D4]/10"
                  >
                    <MessageCircle className="h-4 w-4 text-[#0099A3]" />
                    <span>Stuur een WhatsApp-bericht</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Rechterkolom: Open formulier met haarlijnen (geen card box) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="border-y-2 border-[#00C8D4] py-10">
                  <div className="flex items-center gap-3 text-[#0099A3]">
                    <CheckCircle2 className="h-7 w-7" />
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold">
                      Aanvraag gereed voor verzending
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-[#0B1D33] sm:text-3xl">
                    Bedankt voor uw offerteaanvraag, {naam}.
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-[#47596E]">
                    Uw aanvraag voor <strong className="text-[#0B1D33]">{dienst}</strong> (
                    {klantType}) is gericht aan ADK Cleaning (
                    <a
                      href="mailto:contact.adkcleaning@gmail.com"
                      className="font-medium text-[#0B1D33] underline decoration-[#00C8D4]"
                    >
                      contact.adkcleaning@gmail.com
                    </a>
                    ). Wij nemen zo spoedig mogelijk contact met u op via{' '}
                    <span className="font-medium text-[#0B1D33]">{email}</span> of{' '}
                    <span className="tabular-nums font-medium text-[#0B1D33]">{telefoon}</span>.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <a
                      href={`mailto:contact.adkcleaning@gmail.com?subject=${encodeURIComponent(
                        `Offerteaanvraag ${dienst} - ${naam}`
                      )}&body=${encodeURIComponent(
                        `Naam: ${naam}\nType opdrachtgever: ${klantType}\nE-mail: ${email}\nTelefoon: ${telefoon}\nDienst: ${dienst}\nPlaats / Locatie: ${plaats || '-'}\n\nToelichting:\n${bericht || '-'}`
                      )}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FF8500] px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-white transition-colors hover:bg-[#E67600]"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Open direct in uw e-mailapp</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 border-b border-[#0B1D33]/25 pb-1 font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33] transition-colors hover:border-[#00C8D4] hover:text-[#FF8500]"
                    >
                      Nog een aanvraag invullen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="offerte-naam"
                        className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                      >
                        Naam *
                      </label>
                      <input
                        id="offerte-naam"
                        type="text"
                        required
                        value={naam}
                        onChange={(e) => setNaam(e.target.value)}
                        placeholder="Uw volledige naam"
                        className="mt-2 w-full border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] placeholder:text-[#8696A8] focus:border-[#00C8D4] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="offerte-klanttype"
                        className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                      >
                        Type opdrachtgever
                      </label>
                      <select
                        id="offerte-klanttype"
                        value={klantType}
                        onChange={(e) => setKlantType(e.target.value)}
                        className="mt-2 w-full border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] focus:border-[#00C8D4] focus:outline-none"
                      >
                        <option value="Particulier">Particulier</option>
                        <option value="Zakelijk / Bedrijf">Zakelijk / Bedrijf</option>
                        <option value="VvE / Vastgoedbeheer">VvE / Vastgoedbeheer</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="offerte-email"
                        className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                      >
                        E-mailadres *
                      </label>
                      <input
                        id="offerte-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="naam@voorbeeld.nl"
                        className="mt-2 w-full border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] placeholder:text-[#8696A8] focus:border-[#00C8D4] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="offerte-telefoon"
                        className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                      >
                        Telefoonnummer *
                      </label>
                      <input
                        id="offerte-telefoon"
                        type="tel"
                        required
                        value={telefoon}
                        onChange={(e) => setTelefoon(e.target.value)}
                        placeholder="06 - 12345678"
                        className="mt-2 w-full border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] placeholder:text-[#8696A8] focus:border-[#00C8D4] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="offerte-dienst"
                        className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                      >
                        Gewenste dienst *
                      </label>
                      <select
                        id="offerte-dienst"
                        value={dienst}
                        onChange={(e) => setDienst(e.target.value)}
                        className="mt-2 w-full border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] focus:border-[#00C8D4] focus:outline-none"
                      >
                        {SERVICES.map((service) => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                        <option value="Combinatie van meerdere diensten">
                          Combinatie van meerdere diensten
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="offerte-plaats"
                        className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                      >
                        Plaats / Locatie
                      </label>
                      <input
                        id="offerte-plaats"
                        type="text"
                        value={plaats}
                        onChange={(e) => setPlaats(e.target.value)}
                        placeholder="Uw plaats in Nederland"
                        className="mt-2 w-full border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] placeholder:text-[#8696A8] focus:border-[#00C8D4] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="offerte-bericht"
                      className="block font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-[#0B1D33]"
                    >
                      Toelichting op uw aanvraag
                    </label>
                    <textarea
                      id="offerte-bericht"
                      rows={4}
                      value={bericht}
                      onChange={(e) => setBericht(e.target.value)}
                      placeholder="Beschrijf kort uw woning of bedrijfspand, gewenste frequentie of eventuele bijzonderheden..."
                      className="mt-2 w-full resize-y border-b border-[#0B1D33]/25 bg-transparent py-3 text-base text-[#0B1D33] placeholder:text-[#8696A8] focus:border-[#00C8D4] focus:outline-none"
                    />
                  </div>

                  {errorMsg && (
                    <p role="alert" className="text-sm font-medium text-[#C9411A]">
                      {errorMsg}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 rounded-full bg-[#FF8500] px-8 py-4 font-[family-name:var(--font-display)] text-base font-semibold text-white shadow-[0_14px_34px_-10px_rgba(255,133,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E67600]"
                    >
                      <span>Offerteaanvraag versturen</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
