function BoxColor({ r, g, b }) {
  const red = r.toString(16).padStart(2, '0');
  const green = g.toString(16).padStart(2, '0');
  const blue = b.toString(16).padStart(2, '0');
  const total = `#${red}${green}${blue}`;
  const style = {
    backgroundColor: `${total}`,
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    padding: '40px',
    margin: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <div style={style}>
      <p>
        rgb ({r}, {b}, {g})
      </p>
      {total}
    </div>
  );
}

export default BoxColor;
