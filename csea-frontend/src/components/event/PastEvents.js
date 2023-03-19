import React, { useState } from 'react'
import EventCards from './EventCards'
import PlacementTalk from '../images/Notices/PlacementTalk.png'
import EventImages from './EventImages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import img1 from "../images/events/1.jpg";
import img2 from '../images/events/2.jpg';
import img3 from '../images/events/3.jpg';
import img4 from '../images/events/4.jpg';
import img5 from '../images/events/5.jpg';
import img6 from '../images/events/6.jpg';
let events = {
  event1: {
    background: PlacementTalk,
    title: "Go around the world",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,praesentium voluptatem omnis atque culpa repellendus.",
  },
};
function PastEvents() {
  const images = [
    { id: 1, src: img1, alt: "image1" },
    { id: 2, src: img2, alt: "image2" },
    { id: 3, src: img3, alt: "image3" },
    { id: 4, src: img4, alt: "image4" },
    { id: 5, src: img5, alt: "image5" },
    { id: 6, src: img6, alt: "image6" }
  ]

  const [show,setshow] = useState(false);
  return (
    <div className=''>
      <div className='text-black text-center text-4xl my-5 font-bold'>
          Past Events
      </div>
      <div className='p-8 h-[100%] min-h-screen flex flex-wrap gap-4 justify-center'>
        <div className='max-md:w-[100%] w-[48%] hover:cursor-pointer' onClick={()=>setshow(true)}>
          <EventCards events={events.event1} />
        </div>
        {/* <div className='w-[48%]'>
            <EventCards events = ""/>
        </div>
        <div className='w-[48%]'>
            <EventCards events = ""/>
        </div> */}
      </div>
      {
        show && 
        <div className=''>
          <div className='fixed z-30 top-[10%] right-8 text-black text-4xl hover:cursor-pointer' onClick={()=>setshow(false)}>
            <FontAwesomeIcon icon={faTimes} />
            {/* Hello World */}
          </div>
          <EventImages images={images} />
        </div>
      }
    </div>
  )
}

export default PastEvents