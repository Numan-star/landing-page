"use client";

const videos = [
  {
    id: 1,
    title: "Understanding Tawheed",
    thumbnail: "/video/thumb1.jpg",
    duration: "18:30",
  },
  {
    id: 2,
    title: "The Power of Dua",
    thumbnail: "/video/thumb2.jpg",
    duration: "22:10",
  },
];

export default function VideoLectures() {
  return (
    <section className="py-12 px-4 md:px-10 bg-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-400">
        Video Lectures
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white/5 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-orange-400 rounded-full p-3 shadow-lg">
                  <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <div className="font-semibold">{video.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
