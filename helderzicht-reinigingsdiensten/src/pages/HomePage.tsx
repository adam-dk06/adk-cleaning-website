import { HeroSection } from '../components/HeroSection';
import { TrustBenefitsSection } from '../components/TrustBenefitsSection';
import { ServicesShowcaseSection } from '../components/ServicesShowcaseSection';
import { AboutEditorialSection } from '../components/AboutEditorialSection';
import { ReviewsEditorialSection } from '../components/ReviewsEditorialSection';
import { OfferteCtaSection } from '../components/OfferteCtaSection';
import type { AppRoute } from '../components/Header';

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <TrustBenefitsSection />
      <ServicesShowcaseSection onNavigate={onNavigate} />
      <AboutEditorialSection onNavigate={onNavigate} />
      <ReviewsEditorialSection onNavigate={onNavigate} />
      <OfferteCtaSection onNavigate={onNavigate} />
    </>
  );
}
