import Rating from '../Rating';
import './driver.css';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driverCard">
      <div className="dc-image">
        <img src={img} alt="driver" className="driver-img" />
      </div>
      <div className="driver-details">
        <p>{name}</p>
        <Rating>{Number(rating)}</Rating>
        <p>{`${car.model} - ${car.licensePlate}`}</p>
      </div>
    </div>
  );
}

export default DriverCard;
