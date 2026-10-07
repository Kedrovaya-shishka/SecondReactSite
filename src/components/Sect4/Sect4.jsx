import reserve from '../../assets/reserve.png'
import './Sect4.scss'

export default function Sect4() {
  return (
    <section className="sect4">
      <img src={reserve} alt="" />
      <div className="text">
        <h2>
          Let's reserve
          <br />
          <span className="orange">a table</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </p>
        <button className="btn">Reservation</button>
      </div>
    </section>
  )
}
