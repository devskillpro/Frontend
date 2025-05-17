import HeroSection from "@/modules/HeroSection";
// import CategorySection from "@/modules/CategorySection";
import WhyTrustUs from "@/modules/WhyTrustUs";
import FragranceBanner from "@/modules/FragranceBanner";
import NewArrivalsProducts from "@/modules/NewArrivals";
import TrendingAttarSection from "@/modules/Trending";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivalsProducts/>
      <FragranceBanner/>
      {/* <CategorySection/> */}
      <WhyTrustUs/>
      <TrendingAttarSection/>
    </>
  );
}
