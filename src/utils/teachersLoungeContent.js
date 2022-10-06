// import LoungeCard from './LoungeCard';
import SecretTeacher from '../img/The-Secret-Teacher.webp';
import Rebuttal from '../img/moms-spaghetti.webp';
import Nerds from '../img/Nerds.jpeg';
import Homer from '../img/rantinghomer.gif';
import Snark from '../img/urges.jpeg';
import '../App.css'
// import { CardImg, CardText } from 'reactstrap';

export const loungeData = [
  {
    
      title: <span >The Rebuttal</span>,
      image: <img 
      className='lounge-card-image'
      src={Rebuttal} alt='The Rebuttal' />,
      subtitle: <span></span>,
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
            </div>
            </>
    },
    {
    // icon: <span className='icons'>📽</span>,
    title: <span >Secret Teacher</span>,
    image: <img
    // className="classImage mx-auto d-none d-xxl-block" 
    src={SecretTeacher} alt='The Secret Teacher' />,
    content:
      < >
      {/* <CardImg src="https://ichef.bbci.co.uk/images/ic/640xn/p08vy7s8.jpg"></CardImg> */}
                 The Secret Teacher is an anonymous blog from <span style={{fontStyle: 'italic'}}>The Guardian</span> where teachers can tell it like it is.
 <div className='btnStyle col-8'>
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
    // icon: <span className='icons'>📽</span>,
    title: <span >Snark</span>,
    image: <img
    // className="classImage mx-auto d-none d-xxl-block" 
    src={Snark} alt='Snark' 
    />,
    content:
      < >
      {/* <CardImg src="https://ichef.bbci.co.uk/images/ic/640xn/p08vy7s8.jpg"></CardImg> */}
                 {/* The Secret Teacher is an anonymous blog from <span style={{fontStyle: 'italic'}}>The Guardian</span> where teachers can tell it like it is. */}
 <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            More!
          </a>
          </div>
          </>
  }
  ,
  {
    // icon: <span className='icons'>📽</span>,
    title: <span >The Rant</span>,
    image: <img
    // className="classImage mx-auto d-none d-xxl-block" 
    src={Homer} alt='The Rant' />,
    subtitle: <span></span>,
    content:
      < >
    From the depths of r/Teachers <br></br><br></br>Infuse your teaching with insights from the cutting edge
 <div className='btnStyle col-8'>
          <a
            role='button'
            className='btn'
            href='https://www.theguardian.com/profile/the-secret-teacher' target="_blank" rel="noopener noreferrer">
            Get Up on That Soapbox
          </a>
          </div>
          </>
  }
  ,
  {
    // icon: <span className='icons'>📽</span>,
    title: <span >The Hot Take</span>,
    image: <img
    // className="classImage mx-auto d-none d-xxl-block" 
    src={Nerds} alt='The Hot Take' />,
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