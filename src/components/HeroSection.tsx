"use client";

import Image from "next/image";

export default function HeroSection() {
  const imageUrl = "https://randomuser.me/api/portraits/men/75.jpg";

  return (
    <section className="relative min-h-[80vh] w-full text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/kaaba.jpg"
          alt="Kaaba"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full">
        <div className="hidden md:flex items-center justify-center"></div>
        <div className="flex items-center justify-center px-6 py-10">
          <p
            className="text-2xl md:text-4xl font-arabic font-bold text-right leading-loose max-w-md"
            dir="rtl"
          >
            إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ ۚ يَدُ
            ٱللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ
            نَفْسِهِۦ ۖ وَمَنْ أَوْفَىٰ بِمَا عَـٰهَدَ عَلَيْهُ ٱللَّهَ
            فَسَيُؤْتِيهِ أَجْرًا عَظِيمًۭا
          </p>
        </div>

        <div className="flex items-center justify-center px-6 py-10">
          <div className="max-w-md text-left">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Surely those who pledge allegiance to you ˹O Prophet˺ are actually
              pledging allegiance to Allah. Allah’s Hand is over theirs. Whoever
              breaks their pledge, it will only be to their own loss. And
              whoever fulfils their pledge to Allah, He will grant them a great
              reward.
            </p>
            <p className="mt-4 text-orange-400 font-semibold">
              — Al-Fatah 48:10
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center"></div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
        <div className="flex items-center justify-center bg-red-600 text-white text-xs font-bold animate-pulse rounded-full w-9 h-9">
          LIVE
        </div>
        <div className="text-sm">
          <span className="font-semibold">Dr. Naushad Shaikh</span>
          <br />
          <span className="text-xs text-gray-200">going Live in 72 hrs</span>
        </div>
        <Image
          src={imageUrl || "/user.jpg"}
          alt="User"
          width={36}
          height={36}
          className="h-10 w-10 rounded-full  object-cover"
        />
      </div>
    </section>
  );
}
