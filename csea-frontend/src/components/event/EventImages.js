import React,{useRef} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
const EventImages = ({images}) => {
  console.log(images)
  const settings = {
    dots: false,
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
  if(images.length !== 0){

    return ( 
      <div className="my-9 mx-auto text-black relative">
          <div className="relative mx-auto">
            <Slider {...settings} ref={carouselRef} style={{ position: 'fixed', top: 0,left:0, width: '100%', height: '100%',display:'flex', justifyContent:'center',alignItems:'center', backgroundColor:'#ffffffb3'}}>
              {images.map((c)=>(
                <div key={c.id} className="">
                  <img src={c.src} alt={c.alt} className="mx-auto my-auto h-[70vh]  max-lg:h-auto max-lg:w-auto"/>
                  <h1 className="text-black text-center text-3xl max-sm:text-2xl">{c.id}</h1>
                </div>
              ))}
            </Slider>
          <button className="fixed top-[50%] left-4 z-30" onClick={handlePrevClick}><FontAwesomeIcon icon={faChevronLeft} size="2x" /></button>
          <button className="fixed top-[50%] right-4 z-30" onClick={handleNextClick}><FontAwesomeIcon icon={faChevronRight} size="2x" /></button>
          </div>
      </div>
    );
  };
}
  
  export default EventImages;