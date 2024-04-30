import react from "react";
import "./Home.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YosemiteImage from "../Images/Yosemite.png";
import GrandCanyon from "../Images/grand-canyon.jpg";
import RoadLandscape from "../Images/road-landscape.jpg";

import AboutUs from "./AboutUs";
import Landscape from "./Landscape";
import Wildlife from "./Wildlife";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

function Home() {
  return (
    <div>
      <div className="hero-carousel">
        <Slider {...settings}>
          <div className="slide">
            <img src={YosemiteImage} alt="Yosemite" className="slide-image" />
            <div className="slide-content">
              <h1>WELCOME</h1>
              <p>
                "Welcome to the captivating world of landscapes and wildlife
                photography. Dive into a photographic journey that brings
                natural beauty to life."
              </p>
              <Link to="/shop" className="shop-now">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="slide">
            <img
              src={RoadLandscape}
              alt="desert road"
              className="slide-image"
            />
            <div className="slide-content">
              <h1>EXPERIENCE</h1>
              <p>
                "With over 40 years behind the lens, my passion for photography
                grows with each click. From the rugged peaks to the serene
                deserts, I've spent decades capturing the untamed heart of
                nature. Join me in exploring these spectacular scenes through my
                eyes."
              </p>
              <Link to="/shop" className="shop-now">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="slide">
            <img src={GrandCanyon} alt="Grand Canyon" className="slide-image" />
            <div className="slide-content">
              <h1>NEW ARRIVALS</h1>
              <p>
                "Looking for the latest in breathtaking photography? Visit our
                shop page to check out new photos and find the perfect piece of
                Utah to bring into your home or office. Our latest collection is
                just a click away!"
              </p>
              <Link to="/shop" className="shop-now">
                Shop Now
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <AboutUs />
      <Landscape />
      <Wildlife />
    </div>
  );
}

export default Home;
