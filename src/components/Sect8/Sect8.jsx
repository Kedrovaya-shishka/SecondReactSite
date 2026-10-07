import about1 from '../../assets/about-1.png'
import about2 from '../../assets/about-2.png'
import './Sect8.scss'

export default function Sect8() {
  return (
    <section className="sect8">
      <div className="row">
        <div className="circle">
          <img src={about1} alt="" />
        </div>
        <div className="text">
          <h2>
            <span className="orange">Our</span>
            <br />
            restautant
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="text left">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <div className="circle">
          <img src={about2} alt="" />
        </div>
      </div>
    </section>
  )
}
