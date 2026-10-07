import spaghetti from '../../assets/dish-spaghetti.png'
import gnocchi from '../../assets/dish-gnocchi.png'
import rovioli from '../../assets/dish-rovioli.png'
import penne from '../../assets/dish-penne.png'
import risotto from '../../assets/dish-risotto.png'
import pizza from '../../assets/dish-pizza.png'
import stars from '../../assets/stars.png'
import left from '../../assets/arrow-left.png'
import right from '../../assets/arrow-right.png'
import './Sect3.scss'

export default function Sect3({ title }) {
  return (
    <section className="sect3">
      <h2>{title}</h2>

      <div className="tabs">
        <button className="dark">All catagory</button>
        <button>Dinner</button>
        <button>Lunch</button>
        <button>Dessert</button>
        <button>Drink</button>
      </div>

      <div className="grid">
        <div className="card">
          <img className="dish" src={spaghetti} alt="" />
          <h3>Spaghetti</h3>
          <img className="stars" src={stars} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="bottom">
            <b>$12.05</b>
            <button className="btn">Order now</button>
          </div>
        </div>
        <div className="card">
          <img className="dish" src={gnocchi} alt="" />
          <h3>Gnocchi</h3>
          <img className="stars" src={stars} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="bottom">
            <b>$12.05</b>
            <button className="btn">Order now</button>
          </div>
        </div>
        <div className="card">
          <img className="dish" src={rovioli} alt="" />
          <h3>Rovioli</h3>
          <img className="stars" src={stars} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="bottom">
            <b>$12.05</b>
            <button className="btn">Order now</button>
          </div>
        </div>
        <div className="card">
          <img className="dish" src={penne} alt="" />
          <h3>Penne Alla Vodak</h3>
          <img className="stars" src={stars} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="bottom">
            <b>$12.05</b>
            <button className="btn">Order now</button>
          </div>
        </div>
        <div className="card">
          <img className="dish" src={risotto} alt="" />
          <h3>Risotto</h3>
          <img className="stars" src={stars} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="bottom">
            <b>$12.05</b>
            <button className="btn">Order now</button>
          </div>
        </div>
        <div className="card">
          <img className="dish" src={pizza} alt="" />
          <h3>Splitza Signature</h3>
          <img className="stars" src={stars} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="bottom">
            <b>$12.05</b>
            <button className="btn">Order now</button>
          </div>
        </div>
      </div>

      <div className="pages">
        <button className="pg dark">
          <img src={left} alt="" />
        </button>
        <button className="pg">1</button>
        <button className="pg">2</button>
        <button className="pg">3</button>
        <span>...</span>
        <button className="pg dark">
          <img src={right} alt="" />
        </button>
      </div>
    </section>
  )
}
