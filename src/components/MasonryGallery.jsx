import Masonry from 'react-masonry-css';
import "./MasonryGallery.css"
import { Image } from 'semantic-ui-react';

export default function MasonryGallery({ photos }) {
  const breakpointColumnsObj = {
    default: 3, // 3 columns normally
    1100: 2,    // 2 columns if screen width <= 1100px
    700: 1,     // 1 column if screen width <= 700px
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {photos.map((src, idx) => (
        <Image key={idx} src={src} style={{ width: '100%', marginBottom: '1rem' }} />
      ))}
    </Masonry>
  );
}