import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

function Announcement(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
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
      <div className="h-[500px] w-1/4 mx-32 mb-20 max-[850px]:mx-auto">

        <h1 className="text-xl font-bold pb-8 text-center ">Upcomming Events</h1>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
      <div>
        <div className="w-auto max-w-min">
          <h1 className="text-xl font-bold pb-8 text-center max-[850px]:pt-8">Announcements</h1>
          <table class="table-fixed max-[850px]:mx-auto mx-auto">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="grid grid-rows-2 grid-cols-2 group">
                    <div className="col-span-2">Announcement 1</div>
                    <div>lorem</div>
                    <div>ipsum</div>
                    <div className="col-span-2 hidden group-hover:block">Ut Lorem qui duis minim cillum ut sit reprehenderit voluptate culpa minim amet. Eiusmod occaecat cupidatat anim ullamco</div>
                  </div>
                </td>
              </tr>
              <tr>
              <td>
                  <div className="grid grid-rows-2 grid-cols-2 group">
                    <div className="col-span-2">Announcement 2</div>
                    <div>lorem</div>
                    <div>ipsum</div>
                    <div className="col-span-2 hidden group-hover:block">Ut Lorem qui duis minim cillum ut sit reprehenderit voluptate culpa minim amet. Eiusmod occaecat cupidatat anim ullamco</div>
                  </div>
                </td>
              </tr>
              <tr>
              <td>
                  <div className="grid grid-rows-2 grid-cols-2 group">
                    <div className="col-span-2">Announcement 3</div>
                    <div>lorem</div>
                    <div>ipsum</div>
                    <div className="col-span-2 hidden group-hover:block">Ut Lorem qui duis minim cillum ut sit reprehenderit voluptate culpa minim amet. Eiusmod occaecat cupidatat anim ullamco</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default Announcement;