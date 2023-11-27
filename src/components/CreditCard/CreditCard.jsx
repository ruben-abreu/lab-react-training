import './creditCard.css';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  const cardLogo =
    type === 'Visa' ? (
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/new-visa-logo-high-quality-png-latest.png"
        alt="Visa Logo"
        className="visa"
      />
    ) : type === 'Master Card' ? (
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png"
        alt="Mastercard Logo"
        className="mastercard"
      />
    ) : null;

  return (
    <div style={styles} id="creditCard">
      <p className="cardType">{cardLogo}</p>
      <p className="number"> •••• •••• •••• {number.slice(-4)}</p>
      <p className="date-expiration">
        Expires {expirationMonth}/{expirationYear} &nbsp;&nbsp;&nbsp; {bank}
      </p>
      <p className="owner">{owner}</p>
    </div>
  );
}

export default CreditCard;
