import {
  IMG_VW_TRANSPORTER,
  IMG_HOUSE,
  IMG_DRIVEWAY_EQUIPMENT,
} from '../data/services';
import { MediaImage } from '../components/MediaImage';
import { CurveDivider } from '../components/CurveDivider';
import { TrustBenefitsSection } from '../components/TrustBenefitsSection';
import { OfferteCtaSection } from '../components/OfferteCtaSection';
import type { AppRoute } from '../components/Header';

interface OverOnsPageProps {
  onNavigate: (route: AppRoute) => void;
}

export function OverOnsPage({ onNavigate }: OverOnsPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1D33] pb-24 pt-36 text-white md:pb-28 md:pt-44">
        <div className="absolute inset-0 z-0 opacity-30">
          <MediaImage
            src={IMG_VW_TRANSPORTER}
            alt="Standaard grijze Volkswagen Transporter van ADK Cleaning bij een modern pand"
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
            <span className="text-white">Over ons</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] text-sm font-medium text-white/80">
                Over ADK Cleaning
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.4vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
              Persoonlijke service. Professioneel resultaat.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Bij ADK Cleaning staat kwaliteit voorop. Persoonlijk contact en vakkundige reiniging
              voor uw woning, bedrijfspand of VvE-complex.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-px z-10">
          <CurveDivider fromColor="transparent" toColor="#FFFFFF" variant="arch" />
        </div>
      </section>

      <TrustBenefitsSection />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#00C8D4]" aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#0B1D33]">
                  Persoonlijke aanpak
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0B1D33] sm:text-4xl">
                Direct contact, korte lijnen en oog voor detail.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#47596E]">
                ADK Cleaning is landelijk actief en biedt professionele reinigingsdiensten aan
                particulieren, bedrijven en VvE’s door heel Nederland. Wanneer u contact opneemt,
                heeft u rechtstreeks contact en weet u precies wat u kunt verwachten.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#47596E]">
                Met mijn standaard grijze Volkswagen Transporter en professioneel
                reinigingsmaterieel kom ik bij u op locatie door heel Nederland. Elk raam, kozijn,
                terras en geveldeel krijgt de verzorging die het verdient.
              </p>
            </div>

            <div className="space-y-6 lg:col-span-6">
              <div className="overflow-hidden rounded-2xl">
                <MediaImage
                  src={IMG_VW_TRANSPORTER}
                  alt="Standaard grijze Volkswagen Transporter geparkeerd bij een modern gebouw"
                  className="aspect-[16/10]"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-xl">
                  <MediaImage
                    src={IMG_HOUSE}
                    alt="Moderne woning met streeploos schone ramen en verzorgde oprit"
                    className="aspect-[16/10]"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <MediaImage
                    src={IMG_DRIVEWAY_EQUIPMENT}
                    alt="Professioneel glasbewassingsmaterieel op een schone oprit"
                    className="aspect-[16/10]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-12 border-t border-[#0B1D33]/12 pt-16 md:grid-cols-3">
            <div>
              <span className="tabular-nums font-[family-name:var(--font-display)] text-sm font-bold text-[#0099A3]">
                01.
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
                Persoonlijk advies op locatie
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#47596E] sm:text-base">
                Ik bekijk uw pand of woning zorgvuldig en bespreek eerlijk welke aanpak en
                frequentie het beste resultaat geven.
              </p>
            </div>

            <div>
              <span className="tabular-nums font-[family-name:var(--font-display)] text-sm font-bold text-[#0099A3]">
                02.
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
                Zorgvuldig en streeploos uitgevoerd
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#47596E] sm:text-base">
                Met puur osmosewater, degelijk materieel en respect voor uw omgeving zorg ik dat
                alles keurig wordt opgeleverd.
              </p>
            </div>

            <div>
              <span className="tabular-nums font-[family-name:var(--font-display)] text-sm font-bold text-[#0099A3]">
                03.
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1D33]">
                Vaste afspraken zonder zorgen
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#47596E] sm:text-base">
                Zowel voor een eenmalige opdracht als voor terugkerend onderhoud door heel
                Nederland kunt u rekenen op heldere communicatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider fromColor="#FFFFFF" toColor="#0B1D33" variant="wave" />
      <OfferteCtaSection onNavigate={onNavigate} />
    </>
  );
}
