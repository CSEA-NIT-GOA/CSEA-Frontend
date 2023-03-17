import React,{useRef} from "react";
import PropTypes from "prop-types";
import "./Newsletter.css";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const pages = [
  {id:1,src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*LZGw5v0-0tlsiKxR.png", alt:"images"},
  {id:2,src:"../../images/Events/1.jpg", alt:"images"},
  {id:3,src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*LZGw5v0-0tlsiKxR.png", alt:"images"},
  {id:4,src:"../../images/how_to_create_a_newsletter_t.png", alt:"images"}
]
const Newsletter = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  const carouselRef = useRef(null); // create a ref to the carousel component

  const handlePrevClick = () => {
    carouselRef.current.slickPrev(); // move to the previous slide
  };

  const handleNextClick = () => {
    carouselRef.current.slickNext(); // move to the next slide
  };
  return (
    <div className="m-5 my-10">
      {/* <!-- ... --> */}

      <div className="Newsletter_title ">
        <div className="Newsletter_title_textArea">
          <div className="m-2 font-mono text-center font-extrabold text-5xl max-sm:text-3xl">
            <h1>{props.title}</h1>
            <div className="date my-9 max-sm:my-0">Date: {props.date}</div>
          </div>
        </div>
      </div>


        <div className="Newsletter_container_Image my-9">
          <div className="relative mx-auto">
            <Slider {...settings} ref={carouselRef}>
              {pages.map((c)=>(
                <div key={c.id} className="">
                  <img src={c.src} alt={c.alt} className="mx-auto my-4 h-[100vh] w-[100vh] max-lg:h-auto max-lg:w-auto"/>
                  <h1 className="text-white text-center text-3xl max-sm:text-2xl">{c.id}</h1>
                </div>
              ))}
            </Slider>
          <button className="absolute top-[50%] left-4" onClick={handlePrevClick}><FontAwesomeIcon icon={faChevronLeft} size="2x" /></button>
          <button className="absolute top-[50%] right-4" onClick={handleNextClick}><FontAwesomeIcon icon={faChevronRight} size="2x" /></button>
          </div>
        </div>


      <div className="Newsletter_container my-5">
        <div align="center" className="Newsletter_container_textArea ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim autem
            minima itaque architecto voluptatum suscipit quasi beatae vitae
            veritatis ut odit, expedita, quia ratione temporibus. Enim, illo
            soluta nemo nostrum ad eos nobis distinctio?{" "}
          </p>
          <p> {props.aboutText}</p>
        </div>
      </div>
      <div className="button_container">
        <div class="sm:flex sm:justify-end">
          <a
            href="/"
            class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
          >
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

Newsletter.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Newsletter.defaultProps = {
  title: "The title will go here",
  aboutText: "The text will go here",
  date: "The date goes here",
  image:"csea-frontend\public\images\how_to_create_a_newsletter_t.png"
};
