import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';
import PropertiesListingSection from './sections/PropertiesListingSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';
import FaqSection from './sections/FaqSection';
import GallerySlider from './sections/GallerySlider';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySlider  />
      <AboutUsSection />
      <PropertiesListingSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
