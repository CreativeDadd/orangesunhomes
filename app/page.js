import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';
import PropertiesListingSection from './sections/PropertiesListingSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';
import FaqSection from './sections/FaqSection';
import GallerySlider from './sections/GallerySlider';
import FeaturedProperties from './sections/FeaturedProperties';
import TestimonialSection from './sections/TestimonialSection';
import StaffSection from './sections/StaffSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySlider  />
      <AboutUsSection />
      <PropertiesListingSection />
      <FaqSection />
      <BlogSection />
      <FeaturedProperties />
      <TestimonialSection />
      <StaffSection />
      <ContactSection />
    </>
  );
}
