import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";





const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {

      const data = await fetch(
      
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4794403&lng=77.5253962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        
      );

      const json = await data.json();

      //  https://localhost:5000/api/proxy/swiggy/restaurants/list/v5?lat=28.4794403&lng=77.5253962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

      // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
      async function checkJsonData(jsonData) {

        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurant(resData);
      setFilterdRestaurant(resData);
    } catch (error) {
      console.log(error);
    }

  }





  return (allRestaurant?.length === 0) ? (
    <Shimmer />

  ) : (
    // <>
    //   <div className="p-5 bg-pink-50 my-1 ">
    //     <input
    //       type="text"
    //       className="Search-input"
    //       placeholder="Search"
    //       value={searchText}
    //       onChange={(e) => {
    //         setSearchText(e.target.value);
    //       }}
    //     />


    //     <button
    //       className="p-3 m-2  bg-purple-600 text-white rounded-lg hover:bg-green-800"
    //       onClick={() => {
    //         const data = filterData(searchText, allRestaurant);
    //         setFilterdRestaurant(data);

    //       }}
    //     >Search</button>
    //   </div>
    <>
  <div className="p-5 bg-gray-300 my-1 flex justify-center items-center">
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="Search-input p-2 border border-gray-300 rounded-lg w-96"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="p-2 bg-purple-600 text-white rounded-lg hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        onClick={() => {
          const data = filterData(searchText, allRestaurant);
          setFilterdRestaurant(data);
        }}
      >
        Search
      </button>
    </div>
  </div>


      <div className="resturant-list flex flex-wrap bg-gray-100 p-4">
        {(filterdRestaurant?.length === 0 ? <h1>No data match your filter</h1> :
          filterdRestaurant?.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}

              >
                <RestrauntCard  {...restaurant?.info} />
              </Link>
            );
          })
        )}



      </div>

    </>

  )
};

export default Body; 
