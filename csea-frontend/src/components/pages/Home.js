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
      <Herosection />
      {/* <Event/>  */}
      <div className='p-4 my-2 flex-auto justify-items-center'>
        <Animation />
        <Gallery />
      </div>
      <Teams cards={cards} />
      <div className='p-5 flex justify-evenly'>
        <div>
          <div className='m-2 font-mono text-center font-extrabold text-7xl'>upcomming events</div>
          <EventCards events={events.event1} />
        </div>
        <Announcements />   
      </div>
      <div className='p-6 flex justify-center items-center'>
      <div className='m-2 font-mono text-center font-extrabold text-7xl'>Our Newsletter</div>
          <article
            class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
          >
            <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                datetime="2022-10-10"
                class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
              >
                <span>2022</span>
                <span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                <span>Oct 10</span>
              </time>
            </div>

            <div class="hidden sm:block sm:basis-56">
              <img
                alt="Guitar"
                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                class="aspect-square h-full w-full object-cover"
              />
            </div>

            <div class="flex flex-1 flex-col justify-between">
              <div
                class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
              >
                <a href="#">
                  <h3 class="font-bold uppercase text-gray-900 dark:text-white">
                    Finding the right guitar for your style - 5 tips
                  </h3>
                </a>

                <p
                  class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                  dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                  sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                  voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                  Molestias explicabo corporis voluptatem?
                </p>
              </div>

              <div class="sm:flex sm:items-end sm:justify-end">
                <a
                  href="#"
                  class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
                >
                  Read Blog
                </a>
              </div>
            </div>
          </article>

        </div>
      <Footer />
    </>
  )
}

export default Home