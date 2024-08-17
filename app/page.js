import HeroSection from './sections/HeroSection';
import AboutUsSection from './sections/AboutUsSection';
import PropertiesListingSection from './sections/PropertiesListingSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <PropertiesListingSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
