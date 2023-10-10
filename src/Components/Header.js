import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [btn, setBtn] = useState('login')
  console.log('header rendered')
  return (
    <>
      <div className='header'>
        <div className='img-container'>
          <img
            className='logo-img'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zhijzcj7410kggelpzv0'
          />
        </div>
        <div className='nav-items'>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/Menu'>MENU</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li> EMAIL</li>
            <button
              onClick={() =>
                btn === 'login' ? setBtn('logout') : setBtn('login')
              }
              className='login'
            >
              {btn}
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
