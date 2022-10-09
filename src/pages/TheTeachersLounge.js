import { Col, Row, Container } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import LoungeCardList from '../utils/LoungeCardList';
import { loungeData } from '../utils/teachersLoungeContent.js';

const TheTeachersLounge = () => {
    return (
        <Container>
                <Col>
         <h1>The Teachers Lounge</h1>
                </Col>
             <Col className="col-6 col-md-8 lounge-subtitle">
                <Card>
                    <CardBody>
         <h2>Know that dream where you show up for the final and realize you forgot to go to class? Yeah we have that too but were supposed to be teaching it!</h2>
                    </CardBody>
                 </Card>
                </Col>
            <Card>
           <CardBody>
            <Row>
        </Row>
        <Row>
        <Col className="card col-12 col-lg-9 ">
                    {loungeData.map(({ title, subtitle, content, image }) => (
                        <LoungeCardList title={title} subtitle={subtitle} content={content} image={image} />
                    ))}
                </Col>
        </Row>
        </CardBody>
        </Card>
        </Container>
    );
}

export default TheTeachersLounge