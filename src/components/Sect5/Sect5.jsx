import chef1 from '../../assets/chef-1.png'
import chef2 from '../../assets/chef-2.png'
import chef3 from '../../assets/chef-3.png'
import './Sect5.scss'

export default function Sect5() {
  return (
    <section className="sect5">
      <h2>Our greatest chef</h2>
      <div className="chefs">
        <div className="chef">
          <img src={chef1} alt="" />
          <h3>Betran Komar</h3>
          <p>Head chef</p>
        </div>
        <div className="chef">
          <img src={chef2} alt="" />
          <h3>Ferry Sauwi</h3>
          <p>Chef</p>
        </div>
        <div className="chef">
          <img src={chef3} alt="" />
          <h3>Iswan Dracho</h3>
          <p>Chef</p>
        </div>
      </div>
      <button className="btn">View all</button>
    </section>
  )
}
