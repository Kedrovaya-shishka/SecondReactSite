import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Page2">Menu</Link>
        </li>
        <li>
          <Link to="/Page3">About us</Link>
        </li>
        <li>
          <Link>Order online</Link>
        </li>
        <li>
          <Link>Reservation</Link>
        </li>
        <li>
          <Link>Contact us</Link>
        </li>
      </ul>
      <div className="right">
        <img src={cart} alt="" />
        <button>Log in</button>
      </div>
    </header>
  )
}
