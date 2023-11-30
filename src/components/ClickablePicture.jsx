import { useState } from 'react';
function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevIsClicked) => !prevIsClicked);
  };

  const picture = clicked ? imgClicked : img;

  return (
    <div>
      <img src={picture} onClick={handleClick} alt="Maxence" width="200px" />
    </div>
  );
}

export default ClickablePicture;
