import React, { useState } from 'react'
import EventCards from '../EventCards'
import PlacementTalk from '../../images/Notices/PlacementTalk.png'
import EventImages from '../EventImages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import img1 from "../../images/events/1.jpg";
import img2 from '../../images/events/2.jpg';
import img3 from '../../images/events/3.jpg';
import img4 from '../../images/events/4.jpg';
import img5 from '../../images/events/5.jpg';
import img6 from '../../images/events/6.jpg';

import Sidebar from './SideBar';

let events = [
  {
    id: 1,
    background: PlacementTalk,
    title: "Placement Talk",
    date: "March 09, 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,praesentium voluptatem omnis atque culpa repellendus.",
    images: [
      { id: 1, src: img1, alt: "image1" },
      { id: 2, src: img2, alt: "image2" },
      { id: 3, src: img3, alt: "image3" },
      { id: 4, src: img4, alt: "image4" },
      { id: 5, src: img5, alt: "image5" },
      { id: 6, src: img6, alt: "image6" }]
  }
];
function PastEvents() {
  const images = [
    { id: 1, src: img1, alt: "image1" },
    { id: 2, src: img2, alt: "image2" },
    { id: 3, src: img3, alt: "image3" },
    { id: 4, src: img4, alt: "image4" },
    { id: 5, src: img5, alt: "image5" },
    { id: 6, src: img6, alt: "image6" }
  ]

  const [show, setshow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className='flex h-[100%] min-h-screen max-md:hidden'>
        <div className='flex-initial bg-zinc-700 pt-4'>
          {events.map((event) => (<Sidebar onSmash={() => { setDisplay(true); setIndex(event.id - 1) }} title={event.title} date={event.date} />))}
        </div>
        <div className='flex-auto'>
          <div className='text-black text-center text-4xl my-5 font-bold'>
            Past Events
          </div>
          <div className='p-8  flex flex-wrap gap-4 justify-center'>
            <div className='max-md:w-[100%] w-[48%] hover:cursor-pointer' onClick={() => {events[index].images.length !== 0 &&  setshow(true)}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <EventCards events={events[index]} />
            </div>
          </div>
          {
            show &&
            <div className=''>
              {events[index].images.length !== 0 && <div className='fixed z-30 top-[10%] right-8 text-black text-4xl hover:cursor-pointer' onClick={() => setshow(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>}
              <EventImages images={events[index].images} />
            </div>
          }
        </div>
        {hover && <div className='absolute right-[10%] top-[20%] animate-expand '>
          {events[index].images.map((img) => (
            <img src={img.src} alt="hoverImg" className='w-20 m-2' />
          ))}
        </div>}
      </div>
      {/* Mobile.... */}
      <div>
      <div className='flex-auto md:hidden h-[100%] min-h-screen'>
          <div className='text-black text-center text-4xl my-5 font-bold'>
            Past Events
          </div>
          <div className='p-8  flex flex-wrap gap-4 justify-center'>
              {events.map((event)=>(
                <div className='max-md:w-[100%] w-[48%] hover:cursor-pointer' onClick={() => {events[index].images.length !== 0 &&  setshow(true); setIndex(event.id-1)}}>
                  <EventCards events={event} />
                </div>
                ))}
          </div>
          {
            show &&
            <div className=''>
              {events[index].images.length !== 0 && <div className='fixed z-30 top-[10%] right-8 text-black text-4xl hover:cursor-pointer' onClick={() => setshow(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>}
              <EventImages images={events[index].images} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default PastEvents