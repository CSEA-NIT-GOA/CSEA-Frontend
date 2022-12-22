import React from 'react'
import Footer from '../Footer'
import Gallery from '../Gallery'
import '../HeroSection'
import Herosection from '../HeroSection'
import '../../index.css'
import Animation from '../animation'
import Announcement from '../Announcements/Announcement'
import Card from '../Announcements/Card'

import { v4 as uuidv4 } from "uuid";
import EventCards from '../event/EventCards'

let cards = [
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
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
  return (
    <>
      <Herosection/>
      <div className='p-4 my-2 flex-auto justify-items-center'>
        <Animation/>
        <Gallery/>
      </div>
      <Announcement cards ={cards} />
        <div className='m-2 font-mono text-center font-extrabold text-7xl'>upcomming events</div>
        <div className='p-5 flex justify-center'>
        <EventCards events={events.event1} />
        </div>
      <Footer/>
    </>
  )
}

export default Home