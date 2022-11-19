// import { LESSONPLANS } from '../utils/LESSONPLANS';
import { Col, Row } from 'reactstrap';
import LessonPlanCard from './LessonPlanCard';
import { selectAllLessonPlans } from './premiumContentSlice';

const LessonPlansList = ({ setLessonPlanId }) => {
    const lessonplans = selectAllLessonPlans();

    return (
        <Row className='row-content ms-auto'>
        {lessonplans.map((lessonplan) => {
            return (
                <Col 
                    md='5' 
                    className='m-4' 
                    key={lessonplan.id}
                    onClick={() => setLessonPlanId(lessonplan.id)}
                    >
                    <LessonPlanCard lessonplan={lessonplan} />
                </Col>
            );
        })}
    </Row>
    );
}

export default LessonPlansList;