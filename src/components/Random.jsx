function Random({ min, max }) {
  const randomNumber = Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
  );

  return (
    <div>
      <p>{`Random value between ${min} and ${max} => ${randomNumber}`}</p>
    </div>
  );
}

export default Random;
