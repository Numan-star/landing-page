"use client";

import Image from "next/image";

const lectures = [
  {
    number: 1,
    titleAr: "محبت رسول ﷺ",
    titleEn: "Awail-ul-Khairat ﷺ",
    date: "Tag: Daily",
    duration: "",
    audio: "/audio/lecture1.mp3",
  },
  {
    number: 2,
    titleAr: "نماز کی اہمیت",
    titleEn: "Hisbulazam",
    date: "Tag: Weekly",
    duration: "",
    audio: "/audio/lecture2.mp3",
  },
  {
    number: 3,
    titleAr: "اخلاق اسلامی",
    titleEn: "Hisbulbahar",
    date: "Tag: Monthly",
    duration: "",
    audio: "/audio/lecture3.mp3",
  },
];

export default function AudioLectures() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white text-black">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Wazaif</h2>
        <a
          href="#"
          className="text-sm md:text-base text-gray-400 hover:text-gray-700"
        >
          View All
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-start w-full lg:w-3/4">
        {/* Featured Audio Card */}
        <div className="bg-gray-100 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-6  shadow mx-auto">
          {/* Quran Image */}
          <div className="relative w-32 h-32 mb-10 sm:mb-0 sm:h-[200px] sm:w-[180px] flex-shrink-0 overflow-visible">
            <div className="absolute sm:bottom-[-100px] left-0">
              <Image
                src="/images/logo1.jpg"
                alt="Quran with beads"
                width={200}
                height={250}
                className="object-contain"
              />
              {/* Bottom gradient for blend effect */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* Arabic Ayah */}
            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
              الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ
              أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
            </p>
            <p className="text-sm text-gray-700 mt-1">الرعد ٢٨</p>

            {/* English Translation */}
            <p className="text-sm md:text-base text-gray-600 mt-4">
              Those who believe and whose hearts find comfort in the remembrance
              of Allah. Surely in the remembrance of Allah do hearts find
              comfort.
            </p>
          </div>
        </div>

        {/* Lecture List */}
        <div className="space-y-6 w-full lg:w-1/4">
          {lectures.map((lec) => (
            <div key={lec.number} className="flex gap-3 sm:gap-4 items-center">
              <div className="bg-gray-100 text-gray-500 rounded-xl w-10 h-10 flex items-center justify-center text-sm font-bold">
                {lec.number.toString().padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-700 text-sm sm:text-base">
                  {lec.titleEn}
                </div>
                <div className="text-xs text-gray-500">{lec.date}</div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {lec.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
