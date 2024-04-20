import react from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YosemiteImage from "../Images/Yosemite.png";
import ForestBearImage from "../Images/forest-bear.png";
import RedRockSpireImage from "../Images/red-rock-spire.png";

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
              <h1>HOME</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="slide">
            <img src={YosemiteImage} alt="Yosemite" className="slide-image" />
            <div className="slide-content">
              <h1>HOME 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="slide">
            <img src={YosemiteImage} alt="Yosemite" className="slide-image" />
            <div className="slide-content">
              <h1>HOME 3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="section">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <img src={ForestBearImage} alt="Bear in Green Forest" />
      </div>
      <div className="section">
        <h2>LANDSCAPE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <img src={RedRockSpireImage} alt="Red Rock Spire" />
      </div>
      <div className="section">
        <h2>WILDLIFE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <img src={RedRockSpireImage} alt="Red Rock Spire" />
      </div>
    </div>
  );
}

export default Home;
