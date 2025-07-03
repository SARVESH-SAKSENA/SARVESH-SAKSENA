import { APP_URL } from "../utils/constant";

const Rescard = (props) => {

  const {resData} = props;

  const { cloudinaryImageId , name , cuisines , avgRating , sla} = resData;


  return (
    <div className="res-card">
      <div className="rc-img">
        <img
          src={APP_URL + cloudinaryImageId}
          alt="res logo"
          className="res-logo"
        />
      </div>
      <div className="rc-info">
        <h3 >{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime}</h4>
      </div>
    </div>
  );
}

export default Rescard;