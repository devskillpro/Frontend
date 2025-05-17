type CategoryCardProps = {
  image: string;
  title: string;
};

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
<div className="basis-[47%] sm:basis-1/3 md:basis-1/4 max-w-[47%] sm:max-w-1/3 md:max-w-1/4 group cursor-pointer hover:scale-105 transition-all duration-300">
<div className="relative bg-white rounded-t-[2rem] border-2 border-[#D4AF37] shadow-md p-6 flex flex-col items-center sm:h-50 md:70">
        <div className="w-32 h-32 flex items-center justify-center">
          <img src={image} alt={title} className="object-contain max-h-full max-w-full" />
        </div>
      </div>
      <div className="bg-[#D4AF37] text-center text-white py-3 rounded-b-[2rem] font-semibold text-lg">
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
