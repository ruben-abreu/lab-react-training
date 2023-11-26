function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const heightInMeters = `${height / 100}m`;

  return (
    <div id="id-card">
      <img src={picture} alt="person" />
      <ul>
        <li>
          <b>Last Name:</b> {lastName}
        </li>
        <li>
          <b>First Name:</b> {firstName}
        </li>
        <li>
          <b>Gender:</b> {gender}
        </li>
        <li>
          <b>Height:</b> {heightInMeters}
        </li>
        <li>
          <b>Birth:</b> {birth.toLocaleDateString()}
        </li>
      </ul>
    </div>
  );
}
export default IdCard;
