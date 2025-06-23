import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AudioLectures from "../components/AudioLectures";
import VideoLectures from "../components/VideoLectures";
import WazaifSection from "../components/WazaifSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AudioLectures />
        <VideoLectures />
        <WazaifSection />
      </main>
      <Footer />
    </div>
  );
}
