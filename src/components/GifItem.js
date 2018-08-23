import React from 'react';

const GifItem = (image) => {
  console.log(image);
  return (
    <div className="gif-item">
      
      <img src={image.gif.images.downsized.url} onClick={() => image.onGifSelect(image.gif)} />
    </div>
  )
};

export default GifItem;