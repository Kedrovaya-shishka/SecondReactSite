import plate from '../../assets/hero-plate.png'
import './Sect1.scss'

export default function Sect1() {
  return (
    <section className="sect1">
      <div className="text">
        <span className="tag">Restaurant</span>
        <h2>
          Italian
          <br />
          Cuisine
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
          senectus dictum arcu sit tristique donec eget.
        </p>
        <div className="buttons">
          <button className="btn">Order now</button>
          <button className="btn green">Reservation</button>
        </div>
      </div>
      <img src={plate} alt="" />
    </section>
  )
}
