import React from "react";
import { useEffect } from "react";
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
import Herosection from "../HeroSection";

//Notices
import PlacementTalk from "../images/Notices/PlacementTalk.png"
import { Link } from "react-router-dom";

let cards = [
  {
    key: uuidv4(),
    content: (
      <Card
        imagen="https://firebasestorage.googleapis.com/v0/b/csea-nitg.appspot.com/o/CoreMembers%2FAditya.jpg?alt=media&token=06bac3c8-3052-4cd6-959b-fd8140d776ce"
        title="Aditya"
        content="President"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen = "https://firebasestorage.googleapis.com/v0/b/csea-nitg.appspot.com/o/CoreMembers%2FJayendra.jpg?alt=media&token=8dc352af-bfad-47cd-b645-34de2ed36ba3"
        title="Jayendra"
        content="Vice President"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen = "https://firebasestorage.googleapis.com/v0/b/csea-nitg.appspot.com/o/CoreMembers%2FVaibhav.jpg?alt=media&token=5acdb81e-ec1c-401f-afc2-b8f3ba495d8c"
        title="Vaibhav Yadav"
        content="Dy. General Secretary"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen = "https://firebasestorage.googleapis.com/v0/b/csea-nitg.appspot.com/o/CoreMembers%2FAnn.jpg?alt=media&token=75df234f-bfb9-43e3-812e-a05e8591fd84"
        title="Ann Mariya Roy"
        content="General Secretary"
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        imagen = "https://firebasestorage.googleapis.com/v0/b/csea-nitg.appspot.com/o/CoreMembers%2FPritika.jpg?alt=media&token=a0f00e5e-65d5-44ed-a270-34c904f2459c"
        title="Pritika Barshilia"
        content="Joint Secretary"
      />
    ),
  },
];

let events = {
  event1: {
    background: PlacementTalk,
    title: "Go around the world",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,praesentium voluptatem omnis atque culpa repellendus.",
  },
};

function Home() {
  return (
    <>
      <Herosection/>
      <div className="mt-12">
        <Animation />
      </div>
      <div className="h-12" id="gallery"></div>
      <div className="mb-12">
        <Gallery />
      </div>
      <Teams cards={cards} offset={2} />
      <div id="features" className="h-[2rem]"></div>
      <div className="p-5 my-3 flex justify-evenly max-[1200px]:flex-col" id="features">
        <div className="flex-initial min-[1200px]:w-[55%]">
          <div className="m-2 mb-4 text-center font-bold text-7xl max-sm:text-5xl max-sm:mt-20 text-black">
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
      <div className="text-black text-center">
        <Link to={"/pastevents"}>
          <button className="bg-transparent hover:bg-zinc-900 font-semibold hover:text-white py-4 px-12 border border-black hover:border-transparent rounded text-3xl">
            Past Events
          </button>
        </Link>
      </div>
      <div id="news" className="h-[2rem]"></div>
      <div className="m-2 my-10 text-center font-bold text-7xl max-sm:text-5xl text-black">
        Our Blogs
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
