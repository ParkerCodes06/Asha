import { useEffect, useRef, type ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'pageFadeIn 0.35s ease-out forwards';
  }, [children]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: 'pageFadeIn 0.35s ease-out forwards',
      }}
    >
      {children}
    </div>
  );
}
