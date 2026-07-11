interface WaveDividerProps {
  fillTop?: string;
  fillBottom?: string;
  flip?: boolean;
}

export default function WaveDivider({ fillTop = '#fafafa', fillBottom = '#ffffff', flip = false }: WaveDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{
        transform: flip ? 'rotate(180deg)' : 'none',
        marginTop: flip ? 0 : -1,
        marginBottom: flip ? -1 : 0,
      }}
    >
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,20 C240,60 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z"
          fill={fillTop}
        />
        <path
          d="M0,35 C360,5 600,55 900,25 C1100,10 1300,45 1440,30 L1440,60 L0,60 Z"
          fill={fillBottom}
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
