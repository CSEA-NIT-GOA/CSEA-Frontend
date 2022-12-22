import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

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
    <div
      // style={{ width: props.width, height: props.height, margin: props.margin }}
      className="flex justify-evenly max-[850px]:flex-col"
    >
      <div className="h-[540px] w-3/4 mx-32 mb-20 max-[850px]:mx-auto">
        <h1 className=" text-5xl font-bold pb-8 text-center font-sans ">Our Team</h1>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}


export default Teams;