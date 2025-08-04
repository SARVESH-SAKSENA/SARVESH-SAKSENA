import { APP_URL } from "../utils/constant";

const Rescard = (props) => {

  const {resData} = props;

  const { cloudinaryImageId , name , cuisines , avgRating , sla} = resData;


  return (
    <div className="bg-gray-200 w-64 p-4 m-4 h-100">
      <div>
        <img
          src={APP_URL + cloudinaryImageId}
          alt="res logo"
          className="w-56 object-cover h-44"
        />
      </div>
      <div className="rc-info">
        <h3 className="py-2 font-bold font-sans">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime}</h4>
      </div>
    </div>
  );
}

export const withOpenlabel = (Rescard) =>{
  return (props) =>{  //this return is returning the component 
    return (    //this return is returning updated jsx of component
      <div>
        <label className="absolute bg-black text-white p-2 rounded-xl" >Open</label>
        <Rescard {...props}/>
      </div>
    )
  }
}

export default Rescard;