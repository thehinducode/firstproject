import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null)
  const { resId } = useParams()
  console.log(resId)
  useEffect(() => {
    fetchMenu()
  }, [])
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId)
    const json = await data.json()
    setMenu(json?.data)
  }

  if (!menu) {
    // Render a loading indicator or some other fallback content here
    return <div>Loading...</div>
  }
  const { name, cuisines, costForTwoMessage, locality } =
    menu?.cards[0]?.card?.card?.info

  const { itemCards } =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  if (!itemCards) {
    return <div>no itemcards</div>
  }
  return (
    <>
      <div className='menu'>
        <h1> {name}</h1>
        <h3>
          {cuisines.join(',')} - {costForTwoMessage}
        </h3>
        <h3>{locality}</h3>
        <h3>Menu</h3>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default RestaurantMenu
