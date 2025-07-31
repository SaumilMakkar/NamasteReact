import { useEffect, useState } from 'react';
import RestaurantCard,{withPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react'; 
import UserContext from '../utils/UserContext';

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);



  const [searchText, setSearchText] = useState('');
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered',listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    console.log(json);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
     const restaurants=json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus==false){
    return <h1>Looks like you are offline</h1>
  }
  const {loggedInUser,setUserInfo}=useContext(UserContext);

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter flex ">
        <div className="search m-4 p-4 bg-gray-100">
          <div className='search m-4 p-4 bg-gray-100'>
             <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className='px-4 py-2 bg-green-100 m-4 rounded-2xl'
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>

          </div>
         
        </div>
        <label>Username</label>
        <input className='border border-black' value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}></input>
      </div>
      <div className="res-container flex flex-wrap">
        

        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
          {
            restaurant.data.promoted?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard resData={restaurant}/>)
          }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
