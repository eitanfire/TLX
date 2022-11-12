import { Container, Row, Col, /*Button*/ } from "reactstrap";
import LessonPlanDetail from '../features/LessonPlanDetail';
import LessonPlansList from "../pages/LessonPlansList";
import { useState } from "react";
import { selectLessonPlanById } from '../pages/premiumContentSlice';
import React from 'react';

// import { selectRandomLessonPlan } from "./premiumContentSlice";
// t-league/src/pages/premiumContentSlice.js

const LessonPlansDirectoryPage = () => {
    const [lessonPlanId, setLessonPlanId] = useState(0);
    const selectedLessonPlan = selectLessonPlanById(lessonPlanId);

    return (
        <Container>
            <Row>
            {/* <Col>
            <LessonPlansList setLessonPlanId={setLessonPlanId} />
            </Col>
                <Col sm='5' md='7'>
                    <LessonPlanDetail setLessonPlanId={setLessonPlanId} />
                </Col>
                <Col sm='7' md='5'>
                    <LessonPlanDetail lessonplan={selectedLessonPlan} />
                </Col> */}

                <Col sm='5'md='7'>
                    <LessonPlansList setLessonPlanId={setLessonPlanId}/>
                </Col>
                <Col sm='7' md='5'>
                    <LessonPlanDetail lessonplan={selectedLessonPlan} />
                </Col>
            </Row>
        </Container>
    );
};

export default LessonPlansDirectoryPage;