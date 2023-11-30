import { useState } from 'react';

function Carousel({ images }) {
  const [picture, setPicture] = useState(images[0]);

  const handleClickLeft = () => {
    const currentIndex = images.indexOf(picture);
    let newIndex = currentIndex - 1;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    }

    setPicture(images[newIndex]);
  };

  const handleClickRight = () => {
    const currentIndex = images.indexOf(picture);
    let newIndex = currentIndex + 1;

    if (newIndex > images.length - 1) {
      newIndex = 0;
    }

    setPicture(images[newIndex]);
    console.log(images[newIndex]);
  };

  return (
    <div>
      <img src={picture} alt="person" />
      <div>
        <button onClick={handleClickLeft}>Left</button>
        <button onClick={handleClickRight}>Right</button>
      </div>
    </div>
  );
}

export default Carousel;
