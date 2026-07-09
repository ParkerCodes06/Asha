interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  subtitleFont?: string;
  subtitleSize?: string;
  subtitleColor?: string;
  titleFont?: string;
  titleSize?: string;
  titleColor?: string;
  titleLineHeight?: string;
  marginBottom?: number;
}

export default function SectionHeader({
  subtitle, title,
  subtitleFont = "'Gloria Hallelujah', cursive",
  subtitleSize = '18px',
  subtitleColor = '#C8962E',
  titleFont = "'Fredoka One', cursive",
  titleSize = '45px',
  titleColor = '#2D3047',
  titleLineHeight = '1.2em',
  marginBottom = 15,
}: SectionHeaderProps) {
  return (
    <div style={{ marginBottom }}>
      {subtitle && (
        <h2 style={{
          fontFamily: subtitleFont,
          fontSize: subtitleSize,
          fontWeight: 500,
          color: subtitleColor,
          marginBottom: 5,
        }}>
          {subtitle}
        </h2>
      )}
      <h2 style={{
        fontFamily: titleFont,
        fontSize: titleSize,
        fontWeight: 500,
        color: titleColor,
        lineHeight: titleLineHeight,
      }}>
        {title}
      </h2>
    </div>
  );
}
