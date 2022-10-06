import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';
import '../App.css';
// import '../features/SecretTeacher';

    const LoungeCard = ({ icon, title, content, image }) => {
      return (
        <div className="lounge-card-item">
          <div className="lounge-card-title">
          <CardTitle>{icon}{title}</CardTitle>
          </div>
          <Card >
          <CardBody className="lounge-card-content-theme">
          <CardImg> 
            {image} 
            </CardImg>
          <div className="lounge-card-content" >{content}
          </div>
          </CardBody>
          </Card>
        </div>
      );
    };

export default LoungeCard;