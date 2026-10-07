import owner from '../../assets/owner.png'
import './Sect9.scss'

export default function Sect9() {
  return (
    <section className="sect9">
      <img src={owner} alt="" />
      <div className="text">
        <h2>
          <span className="orange">Owner</span> &amp;
          <br />
          Executive Chef
        </h2>
        <h3>Ismail Marzuki</h3>
        <p className="quote">
          <span>“</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span>”</span>
        </p>
      </div>
    </section>
  )
}
