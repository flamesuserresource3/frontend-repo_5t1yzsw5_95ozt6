import React from 'react';

export default function Gallery({ items }) {
  return (
    <section id="gallery" className="relative w-full bg-[#0b0b12] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45%_45%_at_20%_10%,rgba(56,189,248,0.22),transparent)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(35%_35%_at_90%_20%,rgba(168,85,247,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-white/90 md:text-3xl">Recent uploads</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.length === 0 && (
            <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-8 text-center text-white/60">
              Your gallery is empty. Upload your first project above.
            </div>
          )}
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  const isImage = item.type?.startsWith('image/');
  const isVideo = item.type?.startsWith('video/');
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="relative aspect-video w-full overflow-hidden">
        {isImage && (
          <img src={item.url} alt={item.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        )}
        {isVideo && (
          <video src={item.url} controls className="h-full w-full object-cover" />
        )}
        {!isImage && !isVideo && (
          <div className="flex h-full w-full items-center justify-center text-white/70">
            <span className="rounded bg-black/30 px-3 py-1 text-xs">{item.name}</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <p className="truncate text-sm text-white/80" title={item.name}>{item.name}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-indigo-300 hover:text-indigo-200"
        >
          Open
        </a>
      </div>
    </div>
  );
}
