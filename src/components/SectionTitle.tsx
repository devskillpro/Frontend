// components/SectionTitle.tsx
interface SectionTitleProps {
    title: string;
    subtitle?: string;
    showFilters?: boolean;
    showSort?: boolean;
  }
  
  const SectionTitle = ({
    title,
    subtitle,
    showFilters,
    showSort,
  }: SectionTitleProps) => {
    return (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 mb-6 gap-4">
        <div>
          {subtitle && (
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-bold text-[#D4AF37]">{title}</h2>
        </div>
  
        <div className="flex gap-3">
          {showFilters && (
            <select className="border rounded px-3 py-1 text-sm">
              <option>All</option>
              <option>Best Seller</option>
              <option>New</option>
              <option>Trending</option>
            </select>
          )}
          {showSort && (
            <select className="border rounded px-3 py-1 text-sm">
              <option>Sort by</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          )}
        </div>
      </div>
    );
  };
  
  export default SectionTitle;
  