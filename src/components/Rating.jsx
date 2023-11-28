function Rating({ children }) {
  let rating = Math.round(children);
  let stars = '';

  switch (rating) {
    case 5:
      stars = `★★★★★`;
      break;
    case 1:
      stars = `★☆☆☆☆`;
      break;
    case 2:
      stars = `★★☆☆☆`;
      break;
    case 3:
      stars = `★★★☆☆`;
      break;
    case 4:
      stars = `★★★★☆`;
      break;
    default:
      stars = `☆☆☆☆☆`;
      break;
  }

  return (
    <div id="rating">
      <p>{stars}</p>
    </div>
  );
}

export default Rating;
