import React from "react";
import Footer from "../Footer";
import Gallery from "../utilities/Gallery";
import "../HeroSection";
import "../../index.css";
import Animation from "../utilities/animation";
import Card from "../Teams/Card";
import { v4 as uuidv4 } from "uuid";
import EventCards from "../event/EventCards";
import Teams from "../Teams/Teams";
import Announcements from "../Announcements/Announcements";
import LetterCard from "../newsletter/LetterCard";
let cards = [
  {
    key: uuidv4(),
    content: (
      <Card
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
        title="Card1"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
        title="Card2"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
        title="Card3"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
        title="Card4"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
        title="Card5"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    ),
  },
];

let events = {
  event1: {
    title: "Go around the world",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,praesentium voluptatem omnis atque culpa repellendus.",
  },
};

function Home() {

  return (
    <>
      <div className="mt-12 ">
        <Animation />
      </div>
      <div className="h-12" id="gallery"></div>
      <div className="mb-12">
        <Gallery />
      </div>
      <Teams cards={cards} />
      <div id="features" className="h-[2rem]"></div>
      <div className="p-5 my-3 flex justify-evenly max-[1200px]:flex-col" id="features">
        <div>
          <div className="m-2 font-mono text-center font-extrabold text-7xl max-sm:text-5xl">
            Upcoming events
          </div>
          <EventCards events={events.event1} />
          <br></br>
          <EventCards events={events.event1} />
        </div>
        <Announcements />
      </div>
      <div id="news" className="h-[2rem]"></div>
      <div className="m-2 my-10 font-mono text-center font-extrabold text-7xl max-sm:text-5xl">
        Our Newsletter
      </div>
      <div className="my-10">
        <LetterCard />
        {/* </div> */}
        <LetterCard />
      </div>
      <Footer />
    </>
  );
}

export default Home;
