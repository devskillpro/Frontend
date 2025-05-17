import ShippingInfo from "@/components/ShippingInfo";
import ImageCarousel from "@/components/ImageCarousel";
import { heroData } from "@/helpers/data";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Carousel */}
      <div className="mt-6">
        <ImageCarousel images={heroData.images} />
      </div>

      <ShippingInfo />
    </section>
  );
};

export default HeroSection;
