import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const bgColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const clicks = () => {
    setLikes((prevLikes) => prevLikes + 1);

    setCurrentColorIndex((prevIndex) =>
      prevIndex + 1 === bgColors.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button
        onClick={clicks}
        id="button"
        style={{ backgroundColor: bgColors[currentColorIndex] }}
      >
        {likes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
