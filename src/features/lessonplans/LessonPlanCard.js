import {Card, CardImg, CardImgOverlay, CardTitle }from 'reactstrap';

const LessonPlanCard = ({ lessonplan }) => {
    const { image, name } = lessonplan;
    return (
        <Card className="lessonplan-card-item col-12 col-lg-9" >
  <CardImg className='lessonplan-card-image' 
                width='100%'
                src={image}
                alt={name}
            />
        <CardImgOverlay className='card-img-overlay'>
            <CardTitle className='card-title'>{name}</CardTitle>
        </CardImgOverlay> 
        </Card>
    );
}
export default LessonPlanCard;