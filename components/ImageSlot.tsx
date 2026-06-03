interface Props {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageSlot({ label, className = '', style }: Props) {
  return (
    <div className={`image-slot ${className}`} style={style}>
      {label && <span className="image-slot__label">{label}</span>}
    </div>
  );
}
