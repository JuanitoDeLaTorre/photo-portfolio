import MasonryGallery from '../../components/MasonryGallery';
import { useMemo } from 'react';

const images = import.meta.glob('../../photos/nature/*.{jpg,png}', { eager: true });
const allPhotos = Object.values(images).map((img) => img.default);

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Nature() {
  const photos = useMemo(() => {
    // Check if we already saved an order this session
    const stored = sessionStorage.getItem('nature-photos');
    if (stored) return JSON.parse(stored);

    // Shuffle once, then save to sessionStorage
    const shuffled = shuffleArray(allPhotos);
    sessionStorage.setItem('nature-photos', JSON.stringify(shuffled));
    return shuffled;
  }, []);

  return (
    <div style={{ padding: '0 2rem', margin: '10vh auto auto 50px' }}>
      <h1>Nature Photography</h1>
      <MasonryGallery photos={photos} />
    </div>
  );
}