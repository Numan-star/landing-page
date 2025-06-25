// "use client";

// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[45vh] md:min-h-[80vh] w-full text-white overflow-hidden">
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full">
//         <div className="hidden md:flex items-center justify-center"></div>
//         <div className="flex items-center justify-center px-2 md:px-6 py-2 md:py-8">
//           <p
//             className="text-2xl md:text-5xl font-arabic font-bold text-right leading-loose max-w-lg"
//             dir="rtl"
//           >
//             إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ ۚ يَدُ
//             ٱللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ
//             نَفْسِهِۦ ۖ وَمَنْ أَوْفَىٰ بِمَا عَـٰهَدَ عَلَيْهُ ٱللَّهَ
//             فَسَيُؤْتِيهِ أَجْرًا عَظِيمًۭا
//           </p>
//         </div>

//         <div className="flex items-center justify-center px-2 md:px-6 py-2 md:py-7">
//           <div className="max-w-lg text-left">
//             <p className="text-base md:text-lg text-gray-200 leading-relaxed">
//               Surely those who pledge allegiance to you ˹O Prophet˺ are actually
//               pledging allegiance to Allah. Allah’s Hand is over theirs. Whoever
//               breaks their pledge, it will only be to their own loss. And
//               whoever fulfils their pledge to Allah, He will grant them a great
//               reward.
//             </p>
//             <p className="mt-4 text-white font-semibold">— Al-Fatah 48:10</p>
//           </div>
//         </div>
//       </div>

//       <div className="mb-5 md:mb-0 md:absolute bottom-0 right-4 z-10 flex items-center justify-end px-10 md:px-16">
//         <div className="flex items-end md:items-center flex-col md:flex-row gap-2">
//           <div className="animate-pulse">
//             <Image
//               src="/images/liveImage.png"
//               alt="Logo"
//               width={100}
//               height={100}
//               className="h-13 w-13"
//             />
//           </div>
//           <div className="text-sm">
//             <span className=" font-medium">Dr. Naushad Shaikh</span>
//             <br />
//             <span className="text-xs text-gray-200 font-semibold">
//               going Live in 72 hrs
//             </span>
//           </div>
//         </div>
//         <Image
//           src={"/images/muftiSahabImage.png"}
//           alt="User"
//           width={100}
//           height={100}
//           className="h-40 w-52 hidden md:block"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    arabic: `إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ يَدُ ٱللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِۦ ۖ وَمَنْ أَوْفَىٰ بِمَا عَـٰهَدَ عَلَيْهُ ٱللَّهَ فَسَيُؤْتِيهِ أَجْرًا عَظِيمًۭا ١٠
`,
    english:
      "Surely those who pledge allegiance to you ˹O Prophet˺ are actually pledging allegiance to Allah. Allah’s Hand is over theirs. Whoever breaks their pledge, it will only be to their own loss. And whoever fulfils their pledge to Allah, He will grant them a great reward.",
    reference: "— Al Fatah 48:10",
  },
  {
    arabic: `إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ يَدُ ٱللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِۦ ۖ وَمَنْ أَوْفَىٰ بِمَا عَـٰهَدَ عَلَيْهُ ٱللَّهَ فَسَيُؤْتِيهِ أَجْرًا عَظِيمًۭا ١٠
`,
    english:
      "Surely those who pledge allegiance to you ˹O Prophet˺ are actually pledging allegiance to Allah. Allah’s Hand is over theirs. Whoever breaks their pledge, it will only be to their own loss. And whoever fulfils their pledge to Allah, He will grant them a great reward.",
    reference: "— Al Fatah 48:10",
  },
  {
    arabic: `إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ يَدُ ٱللَّهِ فَوْقَ أَيْدِيهِمْ ۚ فَمَن نَّكَثَ فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِۦ ۖ وَمَنْ أَوْفَىٰ بِمَا عَـٰهَدَ عَلَيْهُ ٱللَّهَ فَسَيُؤْتِيهِ أَجْرًا عَظِيمًۭا ١٠
`,
    english:
      "Surely those who pledge allegiance to you ˹O Prophet˺ are actually pledging allegiance to Allah. Allah’s Hand is over theirs. Whoever breaks their pledge, it will only be to their own loss. And whoever fulfils their pledge to Allah, He will grant them a great reward.",
    reference: "— Al Fatah 48:10",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-[45vh] md:min-h-[80vh] w-full text-white overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full">
              <div className="hidden md:flex items-center justify-center" />
              <div className="flex items-center justify-center px-2 md:px-6 py-2 md:py-8">
                <p
                  className="text-2xl md:text-5xl font-arabic font-bold text-right leading-loose max-w-lg"
                  dir="rtl"
                >
                  {slide.arabic}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 md:px-6 py-2 md:py-7">
                <div className="max-w-lg text-left">
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                    {slide.english}
                  </p>
                  <p className="mt-4 text-white font-semibold">
                    {slide.reference}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`h-[2px] w-8 rounded-sm transition-all duration-300 ${
                          i === activeIndex ? "bg-white" : "bg-gray-500"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs text-white">
                      {activeIndex + 1}/3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-5 md:mb-0 md:absolute bottom-0 right-4 z-10 flex items-center justify-end px-10 md:px-16">
        <div className="flex items-end md:items-center flex-col md:flex-row gap-2">
          <div className="animate-pulse">
            <Image
              src="/images/liveImage.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-13 w-13"
            />
          </div>
          <div className="text-sm">
            <span className=" font-medium">Dr. Naushad Shaikh</span>
            <br />
            <span className="text-xs text-gray-200 font-semibold">
              going Live in 72 hrs
            </span>
          </div>
        </div>
        <Image
          src={"/images/muftiSahabImage.png"}
          alt="User"
          width={100}
          height={100}
          className="h-40 w-52 hidden md:block"
        />
      </div>
    </section>
  );
}
