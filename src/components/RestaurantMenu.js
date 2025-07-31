import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'

const RestaurantMenu = () => {

  const [showIndex,setshowIndex]=useState(0);
const resId=useParams();
const {loggedInUser}=useContext(UserContext);

const resInfo=useRestaurantMenu(resId);

const categories=resInfo?.cards[6]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.filter(c=>c.card?.card?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
console.log(categories);

if(resInfo==null)return <Shimmer></Shimmer>

  return (
    <div className='menu text-center'>
        {restaurants.map((restaurant) => (
  <div key={restaurant.id}>
    <h2 className='font-bold my-6 text-2xl '>{restaurant.name}</h2>
    <h3>{cuisines.join(',')}</h3>
    <p>costForTwo:{restaurant.costForTwoMessage}</p>
    <h2>User:{loggedInUser}</h2>
    
    
  </div>
 
        ))}
        {categories.map((category,index)=>{
          <RestaurantCategory key={category?.card?.card?.title} data={RestaurantCategory?.card?.card} showItems={index==showIndex?true:false} setshowIndex={()=>setshowIndex(index)}/> 
        })}
        </div>
  
)
        
  
}


export default RestaurantMenu;