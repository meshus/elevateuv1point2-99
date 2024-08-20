import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Grid item ${index}`} className="w-full h-32 object-cover" />
      ))}
    </div>
  );
};

export default ImageGrid;