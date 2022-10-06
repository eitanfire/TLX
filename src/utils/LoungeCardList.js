import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
// import LoungeCard from './LoungeCard';

const LoungeCardList = ({ icon, title, content, image, subtitle }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="lounge-card-item">
        {/* <LoungeCard /> */}
      <div className="lounge-card-title" onClick={() => setIsActive(!isActive)}>
      <CardTitle>{icon}{title}
      {/* <span className='d-none d-md-block d-xxl-none' id='openCloseSymbols' style={{ color: 'red' }}>{isActive ? ' 🪐' : ' 🚀'}</span> */}
      </CardTitle>
      </div>
      <Card>
      <CardBody className="lounge-card-content-theme">
      {/* <CardImg> */}
        <div className='lounge-card-image'>{image}</div>
        {/* </CardImg> */}
        <div Classname="lounge-card-subtitle">{subtitle}</div>
        <div className="lounge-card-content" >{content}
        </div>
      </CardBody>
      </Card>
    </div>
  );
};

export default LoungeCardList