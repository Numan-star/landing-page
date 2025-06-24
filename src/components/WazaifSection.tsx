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
    <section className="pt-20 pb-32 px-4 md:px-16 bg-white text-black">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Wazaif</h2>
        <a
          href="#"
          className="text-sm md:text-base text-gray-400 hover:text-gray-700"
        >
          View All
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-start w-full lg:w-4/5">
        <div className="bg-gray-100 rounded-2xl px-10 py-2 flex flex-col md:flex-row items-center gap-6  shadow mx-auto">
          <div className="relative w-32 h-32 mb-10 sm:mb-0 sm:h-[200px] sm:w-[180px] flex-shrink-0 overflow-visible">
            <div className="absolute sm:bottom-[-60px] left-5">
              <Image
                src="/images/quranTasbeehImge.png"
                alt="Quran with beads"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed">
              ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ
              أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ ٢٨
            </p>
            <p className="text-sm text-gray-900 mt-4">
              Those who believe and whose hearts find comfort in the remembrance
              of Allah. Surely in the remembrance of Allah do hearts find
              comfort.
            </p>
          </div>
        </div>

        <div className="space-y-6 w-full lg:w-1/5">
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
