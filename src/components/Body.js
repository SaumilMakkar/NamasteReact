import RestaurantCard from "./RestaurantCard.js"
import { useState } from "react";
import resList from "../../utils/mockData.js";


const Body=()=>{
//Local State variable-Super powerful variable
let [listOfRestaurants,setlistOfRestaurants]=useState(
resList
)
        
        


    //Normal Js variable
//     let listOfRestaurants=[{
        
//         data: {
      
//       id: '121603',
//       name: 'Kannur Food Point',
      
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
//       deliveryTime: 24,
//       avgRating: '3.9',
//         },
//     },{
        
//         data: {
     
//       id: '121604',
//       name: 'KFC',
      
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['NonVeg', 'Chinese'],
//       deliveryTime: 25,
//       avgRating: '4.5',
//         },
//     },{
//      data: {
     
//       id: '121605',
//       name: 'Mcdie',
      
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['NonVeg', 'Chinese'],
//       deliveryTime: 25,
//       avgRating: '4.1',
//         },
//     }

// ]
    


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   //filter logic
                   const filteredList=listOfRestaurants.filter(res=>res.data.avgRating>4);
                   setlistOfRestaurants(filteredList);
                }}
               >Top Rated Resturants</button>
                <div className='res-container'>
{
  listOfRestaurants.map((restaurant)=>(<RestaurantCard resData={restaurant} id={restaurant.data.id}/>))
}
                </div>
            </div>
        </div>
    )
}
export default Body;
