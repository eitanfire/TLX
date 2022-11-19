import SecretTeacher from '../img/The-Secret-Teacher.webp';
import Rebuttal from '../img/moms-spaghetti.webp';
// import Nerds from '../img/Nerds.jpeg';
import Homer from '../img/rantinghomer.gif';
import Snark from '../img/urges.jpeg';
import HotTake from '../img/HotTake.jpeg';
import '../App.css'
// import { Container, Row, Col } from 'react-dom';
// import ImageComponent from '../components/snarkModal';
// import Modal from '../components/Modal';
// import React, { useState } from 'react';


export const loungeData = [
  { 
    id: "The Rebuttal",
    title: <span >The Rebuttal</span>,
    image: <img
      className='lounge-card-image'
      src={Rebuttal} alt='The Rebuttal' />,
    content:
      < >
        What the teachers are saying.<br></br><br></br>Teachers pushing back against the infantilization of the profession
        <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.cpr.org/2022/03/22/denver-public-schools-teachers-burnout-mental-health-pandemic/' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>,
      </>
  },
  {
    id: 'The Secret Teacher',
    title: <span >Secret Teacher</span>,
    image: <img
      src={SecretTeacher} alt='The Secret Teacher' />,
    content:
      < >
        The Secret Teacher is an anonymous blog from <span style={{ fontStyle: 'italic' }}>The Guardian</span> where teachers can tell it like it is.
        <div className='btnStyle'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </>
  },
  {
    id: 'Snark',
    title: <span style={{ fontStyle: 'italic'
                          //  width:20rem
                          }}>Snark</span>,
    image: 
        <img 
        id='snarkImg'
        src={Snark} alt='Snark'
        />,
    // modal: < />,
    content:
    < >
        The Secret Teacher is an anonymous blog from <span style={{ fontStyle: 'italic' }}>The Guardian</span> where teachers can tell it like it is.
        <div className='btnStyle'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </>
  },
  {
    id: 'The Rant',
    title: <span >The Rant</span>,
    image: <img className='Homer' src={Homer} alt='The Rant' />,
    content:
      < >
         Get Up on That Soapbox in r/Teachers

        <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
              Read More
          </a>
        </div>
      </>
  }
  ,
  {
    id: 'The Hot Take',
    title: <span >The Hot Take</span>,
    image: <img className='hotTake'
      src={HotTake} alt='The Hot Take' />,
    content:
      < >
        Infuse your teaching with insights from the cutting edge

        <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </>
  }
];