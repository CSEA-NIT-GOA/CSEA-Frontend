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

//Core Members
import Aditya from "../images/Core members/Aditya.jpg"
import Jayendra from "../images/Core members/Jayendra.jpg"
import Pritika from "../images/Core members/Pritika.jpg"
import Ann from "../images/Core members/Ann.jpg"
import Vaibhav from "../images/Core members/Vaibhav.jpg"

//Notices
import PlacementTalk from "../images/Notices/PlacementTalk.png"

let cards = [
  {
    key: uuidv4(),
    content: (
      <Card
        imagen={Aditya}
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
        imagen={Jayendra}
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
        imagen={Vaibhav}
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
        imagen={Ann}
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
        imagen={Pritika}
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
    background : PlacementTalk,
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
      <Teams cards={cards} offset={2}/>
      <div id="features" className="h-[2rem]"></div>
      <div className="p-5 my-3 flex justify-evenly max-[1200px]:flex-col" id="features">
        <div className="flex-initial min-[1200px]:w-[55%]">
          <div className="m-2 mb-4 text-center font-bold text-7xl max-sm:text-5xl text-black">
            Upcoming events
          </div>
          <EventCards events={events.event1} />
          {/* <br></br>
          <EventCards events={events.event1} /> */}
        </div>
        <div className="flex-none min-[1200px]:w-[30%]">
          <Announcements />
        </div>
      </div>
      <div id="news" className="h-[2rem]"></div>
      <div className="m-2 my-10 text-center font-bold text-7xl max-sm:text-5xl text-black">
        Our Newsletter
      </div>
      <div className="my-10">
        <LetterCard />
        {/* </div> */}
        {/* <LetterCard /> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
