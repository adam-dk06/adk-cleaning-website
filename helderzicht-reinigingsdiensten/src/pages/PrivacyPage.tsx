import { CurveDivider } from '../components/CurveDivider';
import type { AppRoute } from '../components/Header';

interface PrivacyPageProps {
  onNavigate: (route: AppRoute) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1D33] pb-20 pt-36 text-white md:pb-24 md:pt-44">
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
            <span className="text-white">Privacybeleid</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.1rem,4vw,3.4rem)] font-bold tracking-[-0.03em] text-white">
            Privacybeleid
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
          <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#0B1D33]">
              Zorgvuldige verwerking van persoonsgegevens
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#47596E]">
              ADK Cleaning verwerkt persoonsgegevens uitsluitend in overeenstemming met de Algemene
              Verordening Gegevensbescherming (AVG). Wij gaan vertrouwelijk om met alle gegevens die
              u via onze website, per e-mail of telefonisch aan ons verstrekt.
            </p>
          </div>

          <div className="border-t border-[#0B1D33]/10 pt-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
              Welke gegevens verzamelen wij en waarom?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#47596E]">
              Wanneer u een offerte aanvraagt of contact met ons opneemt, vragen wij om uw naam,
              e-mailadres, telefoonnummer, locatie en een toelichting op de gewenste dienst. Deze
              gegevens gebruiken wij uitsluitend om een passende prijsopgave op te stellen, met u te
              communiceren en de overeengekomen reinigingswerkzaamheden uit te voeren.
            </p>
          </div>

          <div className="border-t border-[#0B1D33]/10 pt-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
              Bewaartermijn en verstrekking aan derden
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#47596E]">
              Wij bewaren uw gegevens niet langer dan strikt noodzakelijk is om de doelen te
              realiseren waarvoor uw gegevens worden verzameld. Wij verkopen of delen uw
              persoonsgegevens nooit met derden, tenzij dit noodzakelijk is voor de uitvoering van
              onze overeenkomst of om te voldoen aan een wettelijke verplichting.
            </p>
          </div>

          <div className="border-t border-[#0B1D33]/10 pt-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
              Uw rechten
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#47596E]">
              U heeft te allen tijde het recht om uw persoonsgegevens in te zien, te laten
              corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via{' '}
              <a
                href="mailto:contact.adkcleaning@gmail.com"
                className="font-medium text-[#0B1D33] underline decoration-[#00C8D4] underline-offset-4"
              >
                contact.adkcleaning@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
