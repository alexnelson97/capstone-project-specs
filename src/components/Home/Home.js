import react from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
};

function Home() {
  return (
    <div>
      <div className="hero-carousel">
        <Slider {...settings}>
          <div>
            <img src="your-image-1.jpg" alt="First slide" />
          </div>
          <div>
            <img src="your-image-2.jpg" alt="Second slide" />
          </div>
          <div>
            <img src="your-image-3.jpg" alt="Third slide" />
          </div>
        </Slider>
      </div>
      <div className="section">
        <p>Text here</p>
        <img src="path-to-your-image.jpg" alt="Description" />
      </div>
      <div className="section">
        <p>Text here</p>
        <img src="path-to-your-image.jpg" alt="Description" />
      </div>
      <div className="section">
        <p>Text here</p>
        <img src="path-to-your-image.jpg" alt="Description" />
      </div>
    </div>
  );
}

export default Home;
