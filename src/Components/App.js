import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'
import About from './About'
import Error from './Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'

//not using key (not acceptable)<<<index as key <<<unique id as key (best practice)
//key={restaurant.data.id} we can also do  key ={index} but pass the index with restaurant. but this is bad practice. always pass a unique id.

const App = () => {
  return (
    <>
      <div className='main'>
        <Header />
        <Body />
      </div>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/restaurants/:resId', // dyanamic path, the restaurants has its own resid which is unique
    element: <RestaurantMenu />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
