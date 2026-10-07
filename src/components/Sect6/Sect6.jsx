import main from '../../assets/customer-main.png'
import row from '../../assets/customers-row.png'
import open from '../../assets/quote-open.png'
import close from '../../assets/quote-close.png'
import Yzbechka from '../../assets/Yzbechka.svg'
import BGirl from '../../assets/BGirl.svg'
import WGirl from '../../assets/WGirl.svg'
import Ochkarik from '../../assets/Ochkarik.svg'
import BBGirl from '../../assets/BBGirl.svg'
import BWGirl from '../../assets/BWGirl.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import './Sect6.scss'

export default function Sect6() {
  return (
    <section className="sect6">
      <h2>Our customers say</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
              <img className="Yzbechka" src={Yzbechka} alt="" />
          <div className="who">
            <h3>Yzbechka</h3>
            <p>Шаурма</p>
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
        </SwiperSlide>
        <SwiperSlide>
              <img className="BGirl" src={BGirl} alt="" />
          <div className="who">
            <h3>BGirl</h3>
            <p>Financial</p>
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
        </SwiperSlide>
        <SwiperSlide>
                <img className="WGirl" src={WGirl} alt="" />
            <div className="who">
              <h3>WGirl</h3>
              <p>Financial</p>
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
      </SwiperSlide>
        <SwiperSlide>
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
      </SwiperSlide>
        <SwiperSlide>
              <img className="Ochkarik" src={Ochkarik} alt="" />
          <div className="who">
            <h3>Ochkarik</h3>
            <p>Prosto Ochkarik</p>
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
        </SwiperSlide>
        <SwiperSlide>
              <img className="BBGirl" src={BBGirl} alt="" />
          <div className="who">
            <h3>BBGirl</h3>
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
        </SwiperSlide>
        <SwiperSlide>
              <img className="BWGirl" src={BWGirl} alt="" />
          <div className="who">
            <h3>BWGirl</h3>
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
        </SwiperSlide>
      </Swiper>
      <img className="row" src={row} alt="" />
    </section>
  )
}
