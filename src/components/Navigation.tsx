export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-md border-b border-outline-variant/50">
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto w-full">
        <div className="lp-subtitle text-on-surface uppercase">
          LUMINA SKIN
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            className="lp-small uppercase text-secondary border-b-2 border-secondary pb-1"
            href="#"
          >
            Science
          </a>
          <a
            className="lp-small uppercase text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#"
          >
            Products
          </a>
          <a
            className="lp-small uppercase text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#"
          >
            Our Story
          </a>
          <a
            className="lp-small uppercase text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#"
          >
            Reviews
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <span className="material-symbols-outlined text-surface-tint cursor-pointer">search</span>
          <span className="material-symbols-outlined text-surface-tint cursor-pointer">shopping_bag</span>
          <button className="lp-small uppercase bg-secondary-container text-on-secondary-container px-gutter py-2 hover:opacity-90 transition-opacity">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};
