import MasonryGallery from '../../components/MasonryGallery';
import { useMemo } from 'react';

// Import all images dynamically (Vite)
const images = import.meta.glob('../../photos/nature/*.{jpg,png}', { eager: true });
const allPhotos = Object.values(images).map(img => img.default);

// Simple shuffle function
function shuffleArray(array) {
  const shuffled = [...array]; // copy to avoid mutating original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Nature() {
  // Shuffle once per page render
  const photos = useMemo(() => shuffleArray(allPhotos), []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Nature Photography</h1>
      <MasonryGallery photos={photos} />
    </div>
  );
}