import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
const Body = () => {
  const [resList, setResList] = useState([]);
  const [resFilterList, setResFilterList] = useState([]);

  const [searchText, setSearchText] = useState('');
  const handleClick = () => {
    const filterList = resList.filter((res) => res.info.avgRating > 4);
    setResList(filterList);
  };
  useEffect(() => {
    getRestaurantsData();
  }, []);
  const getRestaurantsData = async () => {
    const response = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await response.json();
    console.log('json', json);
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResFilterList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleSearch = () => {
    console.log(searchText);
    const searchFilterList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText)
    );
    console.log(searchFilterList);
    setResFilterList(searchFilterList);
    setSearchText('');
  };
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search-res'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <button className='filter-btn' onClick={handleClick}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='res-container'>
        {resFilterList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
