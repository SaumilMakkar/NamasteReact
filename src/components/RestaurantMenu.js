import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../../utils/constants'

const RestaurantMenu = () => {

const resId=useParams();

const resInfo=useRestaurantMenu(resId);

   

if(resInfo==null)return <Shimmer></Shimmer>

  return (
    <div className='menu'>
        {restaurants.map((restaurant, index) => (
  <div key={restaurant.id}>
    <h2>{restaurant.name}</h2>
    <h3>{cuisines.join(',')}</h3>
    <p>costForTwo:{restaurant.costForTwoMessage}</p>
    
    
  </div>
))}
        <ul>
            <li>Burger</li>
            <li>Pepsi</li>
            <li>Coffee</li>
        </ul>
    </div>
  )
}


export default RestaurantMenu