import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AudioLectures from "../components/AudioLectures";
import VideoLectures from "../components/VideoLectures";
import WazaifSection from "../components/WazaifSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="text-white min-h-screen flex flex-col">
      <div
        className="relative bg-cover bg-center min-h-[100vh]"
        style={{ backgroundImage: "url('/images/bgMainImage.png')" }}
      >
        <div className="absolute inset-0 bg-black/70 z-[-1]" />
        <div className="relative z-10">
          <Header />
          <HeroSection />
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        <AudioLectures />
        <VideoLectures />
        <WazaifSection />
      </main>
      <Footer />
    </div>
  );
}
