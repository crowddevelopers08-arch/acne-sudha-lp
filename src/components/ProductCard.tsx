interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export const ProductCard = ({
  title,
  description,
  price,
  image,
  badge,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/5] bg-surface-container-high mb-6 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          src={image}
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="lp-small bg-white px-3 py-1 uppercase">
              {badge}
            </span>
          </div>
        )}
      </div>
      <h4 className="lp-subtitle mb-1">{title}</h4>
      <p className="lp-body text-primary mb-stack-sm">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="lp-body">{price}</span>
        <button className="lp-button border border-outline px-6 py-2 uppercase hover:bg-on-surface hover:text-white transition-colors">
          Add to Bag
        </button>
      </div>
    </div>
  );
};
