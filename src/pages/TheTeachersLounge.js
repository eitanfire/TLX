import { Col, Row, Container } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import LoungeCardList from '../utils/LoungeCardList';
import { loungeData } from '../utils/teachersLoungeContent.js';
// import ImageComponent from '../components/snarkModal';

const TheTeachersLounge = () => {
    return (
        <Container>
            <Col>
                <h1>The Teachers Lounge</h1>
                {/* <ImageComponent /> */}
            </Col>
            <Col className="lounge-subtitle col-6 col-md-8">
                <Card>
                    <CardBody>
                        <h2>Know that dream where you show up for the final and realize you forgot to go to class?
                            <br></br><br></br>Yeah, we have that too but were supposed to be teaching it!</h2>
                    </CardBody>
                </Card>
            </Col>
            <Card>
                <CardBody>
                    <Row>
                    </Row>
                    <Row>
                        <Col className="card col-12 col-lg-9">
                            {loungeData.map(({ title, content, image, modal, id }) => (
                                <LoungeCardList title={title} content={content} image={image} modal={modal} key={id}/>
                            ))}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default TheTeachersLounge