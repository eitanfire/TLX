import { LESSONPLANS } from '../../utils/LESSONPLANS';

export const selectAllLessonPlans = () => {
    return LESSONPLANS;
};

// export const selectRandomLessonPlan = () => {
//     return LESSONPLANS[Math.floor(LESSONPLANS.length * Math.random())];
// };

export const selectLessonPlanById = (id) => {
    return LESSONPLANS.find(lessonplan => lessonplan.id === id);
};