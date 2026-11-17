import { useEffect, useState } from 'react';

export interface CustomerReview {
  id: string;
  authorName: string;
  clientType: 'Particulier' | 'Zakelijk' | 'VvE';
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  createdAt?: string;
}

const STORAGE_KEY = 'adk_cleaning_customer_reviews_v1';
const REVIEWS_EVENT = 'adk-reviews-updated';

/**
 * Optioneel kunt u hier ook vaste klantbeoordelingen in de code toevoegen.
 * Reviews die via de website worden toegevoegd, worden automatisch lokaal opgeslagen.
 */
export const INITIAL_REVIEWS: CustomerReview[] = [];

function readStoredReviews(): CustomerReview[] {
  if (typeof window === 'undefined') {
    return INITIAL_REVIEWS;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return INITIAL_REVIEWS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return INITIAL_REVIEWS;
    }
    return parsed.filter(
      (item): item is CustomerReview =>
        Boolean(item) &&
        typeof item.id === 'string' &&
        typeof item.authorName === 'string' &&
        typeof item.quote === 'string' &&
        typeof item.service === 'string'
    );
  } catch {
    return INITIAL_REVIEWS;
  }
}

function writeStoredReviews(reviews: CustomerReview[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    window.dispatchEvent(new Event(REVIEWS_EVENT));
  } catch {
    // Negeer opslagfouten in privémodus
  }
}

export function useCustomerReviews() {
  const [reviews, setReviews] = useState<CustomerReview[]>(() => readStoredReviews());

  useEffect(() => {
    const sync = () => setReviews(readStoredReviews());
    window.addEventListener(REVIEWS_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(REVIEWS_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const addReview = (input: Omit<CustomerReview, 'id' | 'createdAt'>) => {
    const newReview: CustomerReview = {
      ...input,
      id: `review-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
    };
    const next = [newReview, ...readStoredReviews()];
    writeStoredReviews(next);
    setReviews(next);
    return newReview;
  };

  const updateReview = (id: string, input: Omit<CustomerReview, 'id' | 'createdAt'>) => {
    const next = readStoredReviews().map((item) =>
      item.id === id ? { ...item, ...input } : item
    );
    writeStoredReviews(next);
    setReviews(next);
  };

  const deleteReview = (id: string) => {
    const next = readStoredReviews().filter((item) => item.id !== id);
    writeStoredReviews(next);
    setReviews(next);
  };

  return {
    reviews,
    addReview,
    updateReview,
    deleteReview,
  };
}
