interface SkeletonProps {
  type?: 'image' | 'text' | 'title' | 'avatar' | 'card';
  count?: number;
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({ type = 'text', count = 1, width, height }: SkeletonProps) {
  const baseStyle: React.CSSProperties = {
    width: width || '100%',
    height: height,
    marginBottom: type === 'text' ? 8 : 0,
  };

  const getClassName = () => {
    switch (type) {
      case 'image': return 'skeleton skeleton-image';
      case 'title': return 'skeleton skeleton-title';
      case 'avatar': return 'skeleton skeleton-avatar';
      case 'card': return 'skeleton';
      default: return 'skeleton skeleton-text';
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={getClassName()}
          style={{
            ...baseStyle,
            height: height || (type === 'image' ? 'auto' : type === 'avatar' ? 72 : type === 'card' ? 200 : 14),
          }}
        />
      ))}
    </>
  );
}

export function CourseCardSkeleton() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    }}>
      <div className="skeleton" style={{ height: 180 }} />
      <div style={{ padding: 16 }}>
        <div className="skeleton skeleton-title" style={{ width: '70%' }} />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" style={{ width: '80%' }} />
        <div className="skeleton" style={{ height: 44, borderRadius: 25, marginTop: 12 }} />
      </div>
    </div>
  );
}

export function TeamCardSkeleton() {
  return (
    <div style={{
      display: 'flex',
      gap: 16,
      background: '#fff',
      borderRadius: 12,
      padding: 16,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      alignItems: 'center',
    }}>
      <div className="skeleton skeleton-avatar" />
      <div style={{ flex: 1 }}>
        <div className="skeleton skeleton-title" style={{ width: '40%' }} />
        <div className="skeleton skeleton-text" style={{ width: '60%' }} />
        <div className="skeleton skeleton-text" style={{ width: '50%' }} />
      </div>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div style={{ background: '#fafafa', borderRadius: 12, overflow: 'hidden' }}>
      <div className="skeleton" style={{ height: 180, borderRadius: 0 }} />
      <div style={{ padding: 16 }}>
        <div className="skeleton skeleton-text" style={{ width: '30%' }} />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text" style={{ width: '80%' }} />
      </div>
    </div>
  );
}
