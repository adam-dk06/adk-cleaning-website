import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header, type AppRoute } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DienstenOverviewPage } from './pages/DienstenOverviewPage';
import { DienstDetailPage } from './pages/DienstDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { OverOnsPage } from './pages/OverOnsPage';
import { OffertePage } from './pages/OffertePage';
import { PrivacyPage } from './pages/PrivacyPage';

function parseHashRoute(hash: string): AppRoute {
  const cleaned = hash.replace(/^#/, '').trim();
  if (cleaned.startsWith('dienst/')) {
    const slug = cleaned.slice('dienst/'.length);
    return { page: 'dienst', slug };
  }
  switch (cleaned) {
    case 'diensten':
      return { page: 'diensten' };
    case 'reviews':
      return { page: 'reviews' };
    case 'over-ons':
      return { page: 'over-ons' };
    case 'offerte':
      return { page: 'offerte' };
    case 'privacybeleid':
      return { page: 'privacybeleid' };
    default:
      return { page: 'home' };
  }
}

function routeToHash(route: AppRoute): string {
  switch (route.page) {
    case 'dienst':
      return `#dienst/${route.slug}`;
    case 'diensten':
      return '#diensten';
    case 'reviews':
      return '#reviews';
    case 'over-ons':
      return '#over-ons';
    case 'offerte':
      return '#offerte';
    case 'privacybeleid':
      return '#privacybeleid';
    default:
      return '#home';
  }
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() =>
    parseHashRoute(typeof window !== 'undefined' ? window.location.hash : '')
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((nextRoute: AppRoute) => {
    const targetHash = routeToHash(nextRoute);
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-white text-[#0B1D33]">
        <Header route={route} onNavigate={navigate} />

        <main className="flex-1">
          {route.page === 'home' && <HomePage onNavigate={navigate} />}
          {route.page === 'diensten' && <DienstenOverviewPage onNavigate={navigate} />}
          {route.page === 'dienst' && (
            <DienstDetailPage slug={route.slug} onNavigate={navigate} />
          )}
          {route.page === 'reviews' && (
            <ReviewsPage initialOpenForm={route.openForm} onNavigate={navigate} />
          )}
          {route.page === 'over-ons' && <OverOnsPage onNavigate={navigate} />}
          {route.page === 'offerte' && (
            <OffertePage preselectService={route.preselect} onNavigate={navigate} />
          )}
          {route.page === 'privacybeleid' && <PrivacyPage onNavigate={navigate} />}
        </main>

        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
