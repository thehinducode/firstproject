import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [searchText, setSearchText] = useState('')

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body Rendered')

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText)
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 5
            )
            setFilteredRestaurant(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={'/restaurants/' + restaurant?.info.id}
            >
              <RestaurantCard resData={restaurant?.info} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Body
