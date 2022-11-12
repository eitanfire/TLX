import {Card, CardImg, CardImgOverlay, CardTitle }
from 'reactstrap';

const LessonPlanCard = ({ lessonplan }) => {
    const { image, name } = lessonplan;
    return (
        <Card>
  <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
        <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
        </CardImgOverlay> 
        </Card>
    );
}
export default LessonPlanCard;