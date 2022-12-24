import React from 'react'
import Footer from '../Footer'
import Gallery from '../Gallery'
import '../HeroSection'
import Herosection from '../HeroSection'
import '../../index.css'
import Animation from '../animation'
import Card from '../Announcements/Card'

import { v4 as uuidv4 } from "uuid";
import EventCards from '../event/EventCards'
import Event from '../event/event'
import Teams from '../Announcements/Teams'
import Announcements from '../Announcements/Announcements'
import LetterCard from '../newsletter/LetterCard'
let cards = [
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
        title="Card1"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
        title="Card2"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
        title="Card3"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
        title="Card4"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
        title="Card5"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
        title="Card6"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
        title="Card7"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat."
      />
    )
  }
];

let events = {
  event1:
  {
    title: "Go around the world",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,praesentium voluptatem omnis atque culpa repellendus."
  }
}

function Home() {
  // (function(){
  //   ('a[href*=#]').on('click', function(e) {
  //       e.preventDefault();
  //       ('html, body').animate({ scrollTop: ((this).attr('href')).offset().top}, 500, 'linear');
  //     });
  //   });

  return (
    <>
      {/* <Event/>  */}
      <div className='p-4 my-2 flex-auto justify-items-center'>
        <Animation />
        <Gallery />
      </div>
      <Teams cards={cards} />
      <div className='p-5 flex justify-evenly max-[850px]:flex-col'>
        <div>
          <div className='m-2 font-mono text-center font-extrabold text-7xl'>upcomming events</div>
          <EventCards events={events.event1} />
          <br></br>
          <EventCards events={events.event1} />
        </div>
        <Announcements />
      </div>
      <div className='m-2 font-mono text-center font-extrabold text-7xl'>Our Newsletter</div>
      <LetterCard/>
      <LetterCard/>
      <Footer />
    </>
  )
}

export default Home