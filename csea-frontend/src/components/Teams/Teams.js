import Carousel from "react-spring-3d-carousel-nerdcoder";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { Link } from "react-router-dom";

function Teams(props) {
  
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);

  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);
  return (
    <div className="justify-center text-center" id ="team">
      <div
        // style={{ width: props.width, height: props.height, margin: props.margin }}
        className="flex justify-evenly max-[850px]:flex-col px-8"
      >
        <div className="h-[540px] w-[55%] mx-32 mb-20 max-[850px]:mx-auto max-sm:w-[50%] max-sm:h-[400px]">
          <h1 className=" text-5xl font-bold text-center font-sans pb-16 max-md:pb-8 text-black max-sm:mb-12">Our Team</h1>
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            goToSlideDelay={200}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
            autoPlay={true}
            interval={10}
            opacity={0.5}
          />
        </div>
      </div>
      {/* <Link to = '/Team'>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-5 px-10 border border-blue-500 hover:border-transparent rounded text-[1.5rem] my-8">
        OUR Full Committee
      </button>
      </Link> */}
      {/* <FullTeam/> */}
    </div>
  );
}


export default Teams;