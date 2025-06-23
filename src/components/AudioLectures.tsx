"use client";

const lectures = [
  {
    number: 1,
    titleAr: "محبت رسول ﷺ",
    titleEn: "Love for the Prophet ﷺ",
    date: "2024-06-10",
    duration: "23:15",
    audio: "/audio/lecture1.mp3",
  },
  {
    number: 2,
    titleAr: "نماز کی اہمیت",
    titleEn: "Importance of Salah",
    date: "2024-06-12",
    duration: "19:40",
    audio: "/audio/lecture2.mp3",
  },
];

export default function AudioLectures() {
  return (
    <section className="py-12 px-4 md:px-10 bg-gradient-to-b from-black via-gray-900 to-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-400">
        Audio Lectures
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {lectures.map((lec) => (
          <div
            key={lec.number}
            className="bg-white/5 rounded-lg p-6 flex flex-col gap-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs bg-orange-400 text-white px-2 py-1 rounded">
                {lec.number}
              </span>
              <span className="text-xs text-gray-400">{lec.date}</span>
            </div>
            <div className="font-arabic text-lg">{lec.titleAr}</div>
            <div className="text-base font-semibold">{lec.titleEn}</div>
            <audio controls src={lec.audio} className="w-full mt-2" />
            <div className="text-xs text-gray-300 mt-1">
              Duration: {lec.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
