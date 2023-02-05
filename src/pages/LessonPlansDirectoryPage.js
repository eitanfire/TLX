import { Container, Row, Col /*Button*/ } from "reactstrap";
import LessonPlanDetail from "../features/LessonPlanDetail";
import LessonPlansList from "../features/lessonplans/LessonPlansList";
import { useState } from "react";
// import { selectLessonPlanById } from '../features/lessonplans/LessonPlansList';
import { selectLessonPlanById } from "../features/lessonplans/premiumContentSlice";
import React from "react";

// import { selectRandomLessonPlan } from "./premiumContentSlice";
// t-league/src/pages/premiumContentSlice.js

const LessonPlansDirectoryPage = () => {
  const [lessonPlanId, setLessonPlanId] = useState(0);
  const selectedLessonPlan = selectLessonPlanById(lessonPlanId);

  return (
    <Container>
      <Row>
        <Col className="col col-xs-6">
          <LessonPlanDetail
            className="LessonPlanDetail"
            lessonplan={selectedLessonPlan}
          />
        </Col>
        <Col className="col col-6">
          <LessonPlansList setLessonPlanId={setLessonPlanId} />
        </Col>
      </Row>
    </Container>
  );
};

export default LessonPlansDirectoryPage;
