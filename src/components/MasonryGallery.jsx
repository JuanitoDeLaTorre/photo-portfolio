import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGallery.css'
import { Image, Modal } from 'semantic-ui-react';

export default function MasonryGallery({ photos }) {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleClick = (src) => {
    setSelectedPhoto(src);
    setOpen(true);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            onClick={() => handleClick(src)}
            style={{ width: '100%', marginBottom: '1rem', cursor: 'pointer' }}
          />
        ))}
      </Masonry>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeIcon
        size="large"
        dimmer="blurring"
        className = "black-modal"
      >
        <Modal.Content image style={{ display: 'flex', justifyContent: 'center' }}>
  <Image
    src={selectedPhoto}
    style={{ maxHeight: '80vh', objectFit: 'contain', boxShadow: "0 0 7px white" }}
  />
</Modal.Content>
      </Modal>
    </>
  );
}