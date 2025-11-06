import React, { useRef, useState } from 'react';
import { Upload, ImageIcon, Video, FileText, CheckCircle2, Loader2 } from 'lucide-react';

export default function UploadPanel({ onUpload }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

  const handleFiles = async (files) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setDone(false);
    // Simulate upload for now (no backend yet)
    await new Promise((res) => setTimeout(res, 1000));
    const items = Array.from(files).map((file) => ({
      id: `${file.name}-${Date.now()}`,
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));
    onUpload?.(items);
    setUploading(false);
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <section id="upload" className="relative w-full bg-[#0a0a10] py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(35%_35%_at_10%_10%,rgba(99,102,241,0.25),transparent)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(35%_35%_at_90%_20%,rgba(168,85,247,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div
            className={`group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 text-center transition ${
              dragOver ? 'border-indigo-400 bg-indigo-400/10' : 'border-white/10 bg-black/20'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFiles(e.dataTransfer.files);
            }}
            onClick={() => inputRef.current?.click()}
          >
            <div className="flex items-center gap-3 text-indigo-300">
              <Upload className="h-6 w-6" />
              <p className="text-lg font-semibold">Drag & drop files or click to upload</p>
            </div>
            <p className="text-sm text-white/60">Supports images, videos, and PDFs</p>
            <div className="mt-2 flex items-center gap-3 text-white/70">
              <ImageIcon className="h-5 w-5" />
              <Video className="h-5 w-5" />
              <FileText className="h-5 w-5" />
            </div>
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              multiple
              accept="image/*,video/*,application/pdf"
              onChange={(e) => handleFiles(e.target.files)}
            />
            {uploading && (
              <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">
                <Loader2 className="h-4 w-4 animate-spin" /> Uploading
              </div>
            )}
            {done && (
              <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">
                <CheckCircle2 className="h-4 w-4" /> Added
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
