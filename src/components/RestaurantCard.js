import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  



  const {
   cloudinaryImageID,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[200px] rouned-lg bg-gray-50 hover:bg-gray-200" 
    
    >
      <img
        className="rounded-lg"
         src={
   CDN_URL+cloudinaryImageID
  }
        alt="Biryani"
      />

      <div className="res-card-content">
        <h3 className="font-bold">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo} FOR TWO</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

//Higher Order Component
//tkaes input as restaurant card and returns promoted restaurant card

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>promoted</label>
        <RestaurantCard {...props}/> 
      </div>
    )
  }
}

export default RestaurantCard;
