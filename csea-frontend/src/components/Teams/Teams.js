import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { Link } from "react-router-dom";

function Teams(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(3);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
    
  }, [props.offset, props.showArrows]);

  return (
    <div className="justify-center text-center">
      <div
        // style={{ width: props.width, height: props.height, margin: props.margin }}
        className="flex justify-evenly max-[850px]:flex-col px-8"
      >
        <div className="h-[540px] w-3/4 mx-32 mb-20 max-[850px]:mx-auto max-sm:w-[50%] max-sm:h-[400px]">
          <h1 className=" text-5xl font-bold text-center font-sans max-md:pb-8">Our Team</h1>
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
          />
        </div>
      </div>
      <Link to = '/Team'>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-5 px-10 border border-blue-500 hover:border-transparent rounded text-[1.5rem] my-8">
        OUR Full Committee
      </button>
      </Link>
      {/* <FullTeam/> */}
    </div>
  );
}


export default Teams;