import salad from '../../assets/welcome-salad.png'
import './Sect2.scss'

export default function Sect2() {
  return (
    <section className="sect2">
      <img src={salad} alt="" />
      <div className="text">
        <h2>
          Welcome to
          <br />
          <span className="orange">delizioso</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam.
        </p>
        <button className="btn">See our menu</button>
      </div>
    </section>
  )
}
