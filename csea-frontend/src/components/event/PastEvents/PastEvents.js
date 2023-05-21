import React, { useEffect, useState } from 'react'
import EventCards from '../EventCards'
import PlacementTalk from '../../images/Notices/PlacementTalk.png'
import EventImages from '../EventImages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


import Sidebar from './SideBar';

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const getImages = async () => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const imagesRef = storageRef.child("Events");
  const imageUrls = await imagesRef.listAll();
  const urlPromises = imageUrls.items.map((imageRef) =>
    imageRef.getDownloadURL()
  );
  return Promise.all(urlPromises);
};

let events = [
  {
    id: 1,
    background: PlacementTalk,
    title: "Placement Talk",
    date: "March 09, 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,praesentium voluptatem omnis atque culpa repellendus.",
    images: []
  }
];
function PastEvents() {
  useEffect(() => {
    getImages().then((urls) => {
      events[0].images = urls.map((url, index) => ({
        id: index + 1,
        src: url,
        alt: `image${index + 1}`,
      }));
    });
    console.log(events)
  }, []);

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
        {hover && <div className='absolute right-[20%] top-[20%] animate-expand '>
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