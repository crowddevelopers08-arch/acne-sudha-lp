
import FAQ from '@/components/faq';
import Navbar from '@/components/navbar';
import VoiceOfSatisfaction from '@/components/reviews';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { VideoSection } from '@/components/VideoSection';
import { LuminaDifference } from '@/components/LuminaDifference';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { RitualSection } from '@/components/RitualSection';
import { SocialProof } from '@/components/SocialProof';
import { NewsletterSection } from '@/components/NewsletterSection';
import { ConsultationMapSection } from '@/components/ConsultationMapSection';
import MobileActionBar from '@/components/fat-mobile-action-bar';

export default function Home() {
  return (
    <main className="w-full">
      <MobileActionBar />
      <BookingModal />
      <Navbar />
      <HeroSection />
      <LuminaDifference />
      <VideoSection />
      <FeaturedCollection />
      <RitualSection />
      <SocialProof />
      <NewsletterSection />
      <VoiceOfSatisfaction />
      <FAQ />
      <ConsultationMapSection />
      <Footer />
    </main>
  );
}
