import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const LessonPlanDetail = ( {lessonplan} ) => {
    const { image, name, description } = lessonplan;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default LessonPlanDetail;