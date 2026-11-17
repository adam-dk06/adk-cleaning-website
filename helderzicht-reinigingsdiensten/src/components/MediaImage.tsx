import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#071322] via-[#0B1D33] to-[#132B49] p-6 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #00C8D4 0%, transparent 70%)' }}
        />
        <Sparkles className="mb-3 h-7 w-7 text-[#00C8D4]" strokeWidth={1.6} />
        <p className="max-w-xs text-sm font-medium text-white/80">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#0B1D33] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
