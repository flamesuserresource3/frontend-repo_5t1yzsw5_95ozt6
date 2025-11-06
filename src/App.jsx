import React, { useState } from 'react';
import Hero from './components/Hero';
import UploadPanel from './components/UploadPanel';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [items, setItems] = useState([]);

  const handleUpload = (newItems) => {
    setItems((prev) => [...newItems, ...prev]);
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      <Hero />
      <UploadPanel onUpload={handleUpload} />
      <Gallery items={items} />
      <Footer />
    </div>
  );
}
