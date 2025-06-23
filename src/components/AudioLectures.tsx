"use client";

import { Play, Pause, Download, Heart, Rss } from "lucide-react";
import Image from "next/image";

const lectures = [
  {
    number: 1,
    titleAr: "محبت رسول ﷺ",
    titleEn: "Love for the Prophet ﷺ",
    date: "10 June, 2024",
    duration: "23m",
    audio: "/audio/lecture1.mp3",
  },
  {
    number: 2,
    titleAr: "نماز کی اہمیت",
    titleEn: "Importance of Salah",
    date: "12 June, 2024",
    duration: "19m",
    audio: "/audio/lecture2.mp3",
  },
  {
    number: 3,
    titleAr: "اخلاق اسلامی",
    titleEn: "Islamic Ethics",
    date: "15 June, 2024",
    duration: "21m",
    audio: "/audio/lecture3.mp3",
  },
  {
    number: 4,
    titleAr: "قرآن کا پیغام",
    titleEn: "Message of the Quran",
    date: "18 June, 2024",
    duration: "25m",
    audio: "/audio/lecture4.mp3",
  },
];

export default function AudioLectures() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white text-black">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Audio Lectures
        </h2>
        <a
          href="#"
          className="text-sm md:text-base text-gray-400 hover:text-gray-700"
        >
          View All
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Featured Audio Card */}
        <div className="bg-gray-50 p-4 rounded-2xl shadow w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 items-center">
          <div className="bg-gray-200 p-4 sm:p-5 flex flex-col items-center gap-3 rounded-2xl w-full sm:w-auto">
            <div className="text-lg sm:text-xl font-arabic text-gray-600 text-center">
              حكمة القرآن الكريم
            </div>
            <Image
              src="/images/quran1.jpg"
              alt="Quran"
              width={200}
              height={210}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex-1 w-full sm:w-auto">
            <div className="text-base sm:text-lg font-semibold text-gray-600">
              Hikmah In The Quran
            </div>
            <div className="text-sm text-gray-500">Wednesday Lecture</div>

            <div className="w-full flex flex-col gap-2 mt-4">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue={40}
                className="w-full accent-gray-400"
              />

              <div className="flex justify-between text-xs text-gray-500">
                <span>1:03</span>
                <span>2:18</span>
              </div>

              <div className="flex justify-center sm:justify-start gap-4 sm:gap-6 mt-2 flex-wrap">
                <Pause className="w-5 h-5 text-gray-500" />
                <Play className="w-5 h-5 text-gray-500" />
                <Download className="w-5 h-5 text-gray-500" />
                <Heart className="w-5 h-5 text-gray-500" />
                <Rss className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div className="text-xs text-gray-600 mt-3">7 May, 2025</div>
          </div>
        </div>

        {/* Lecture List */}
        <div className="space-y-6 w-full lg:w-1/2">
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
