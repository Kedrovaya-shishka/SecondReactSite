import main from '../../assets/customer-main.png'
import row from '../../assets/customers-row.png'
import open from '../../assets/quote-open.png'
import close from '../../assets/quote-close.png'
import './Sect6.scss'

export default function Sect6() {
  return (
    <section className="sect6">
      <h2>Our customers say</h2>
      <img className="main" src={main} alt="" />
      <div className="who">
        <h3>Starla Virgoun</h3>
        <p>Financial advisor</p>
      </div>
      <div className="quote">
        <img src={open} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </p>
        <img src={close} alt="" />
      </div>
      <img className="row" src={row} alt="" />
    </section>
  )
}
