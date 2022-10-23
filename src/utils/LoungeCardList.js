import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const LoungeCardList = ({ icon, title, content, image, subtitle }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="lounge-card-item">
      <div className="lounge-card-title" 
      // onClick={() => setIsActive(!isActive)}
      >
        <CardTitle>{icon}{title}
        </CardTitle>
      </div>
      <Card>
        <CardBody className="lounge-card-content-theme">
        {/* {isActive ? 'welcome' : {image}} */}
          <div className='lounge-card-image' >{image}</div>
          <div Classname="lounge-card-subtitle">{subtitle}</div>
          <div className="lounge-card-content" >{content}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoungeCardList