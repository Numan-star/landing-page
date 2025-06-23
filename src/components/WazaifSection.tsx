"use client";

const wazaif = [
  {
    verse: "رَبِّ زِدْنِي عِلْمًا",
    meaning: "My Lord, increase me in knowledge.",
    tag: "Daily",
  },
  {
    verse: "اللهم اغفر لي ولوالدي",
    meaning: "O Allah, forgive me and my parents.",
    tag: "Weekly",
  },
];

export default function WazaifSection() {
  return (
    <section className="py-12 px-4 md:px-10 bg-gradient-to-b from-black via-gray-900 to-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-400">
        Wazaif
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img src="/quran.png" alt="Quran" className="w-32 h-32 mb-4" />
          <div className="font-arabic text-2xl mb-2">{wazaif[0].verse}</div>
          <div className="text-base text-gray-200">{wazaif[0].meaning}</div>
        </div>
        <div className="flex-1">
          <ul className="space-y-4">
            {wazaif.map((w, i) => (
              <li
                key={i}
                className="bg-white/5 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <div className="font-arabic text-lg">{w.verse}</div>
                  <div className="text-sm text-gray-300">{w.meaning}</div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    w.tag === "Daily"
                      ? "bg-orange-400 text-white"
                      : w.tag === "Weekly"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {w.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
