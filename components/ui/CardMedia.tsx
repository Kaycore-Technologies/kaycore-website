import Image from 'next/image';

/*
 * Full-colour photo band for the top of a light card. A light logo-colour tint keeps the
 * photos cohesive, and a short fade joins the band to the card's white text area, so the
 * image stands out without ever sitting behind text.
 */
export function CardMedia({
  src,
  alt,
  sizes,
  className = 'h-40 sm:h-44',
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover saturate-[1.15] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-c1/25 via-transparent to-c2/30 mix-blend-multiply pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface to-transparent pointer-events-none" aria-hidden="true" />
    </div>
  );
}
