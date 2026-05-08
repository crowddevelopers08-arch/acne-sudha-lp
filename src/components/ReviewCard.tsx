interface ReviewCardProps {
  rating: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const ReviewCard = ({ rating, quote, name, title, image }: ReviewCardProps) => {
  return (
    <div className="glass-card p-10 border border-surface-container-highest flex flex-col h-full">
      <div className="flex mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>

      <p className="lp-body italic mb-8">{quote}</p>

      <div className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
          <img alt={name} className="w-full h-full object-cover" src={image} />
        </div>
        <div>
          <p className="lp-small">{name}</p>
          <p className="lp-small text-primary uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
};
