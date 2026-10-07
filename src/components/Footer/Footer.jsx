import logo from '../../assets/logo-light.png'
import twitter from '../../assets/icon-twitter.png'
import instagram from '../../assets/icon-instagram.png'
import facebook from '../../assets/icon-facebook.png'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="about">
          <img src={logo} alt="" />
          <p>
            Viverra gravida morbi egestas facilisis tortor netus nuis duis
            tempor.
          </p>
          <div className="icons">
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="col">
          <h4>Page</h4>
          <p>Home</p>
          <p>Menu</p>
          <p>Order online</p>
          <p>Catering</p>
          <p>Reservation</p>
        </div>
        <div className="col">
          <h4>Information</h4>
          <p>About us</p>
          <p>Testimonial</p>
          <p>Event</p>
        </div>
        <div className="col wide">
          <h4>Get in touch</h4>
          <p>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
          <p>delizioso@gmail.com</p>
          <p>+123 4567 8901</p>
        </div>
      </div>
      <p className="copy">Copyright © 2022 Delizioso</p>
    </footer>
  )
}
