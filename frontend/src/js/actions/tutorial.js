import { 
  SET_EXERCISE_DONE, COMPLETE_EXERCISE,
} from './constants';
import { getTutorialExercise } from './exercise';
import { cleanWokspace } from './workspace';


const finishExercise = () => ({
  type: COMPLETE_EXERCISE,
})

const setExerciseDone = (exerciseId) => ({
  type: SET_EXERCISE_DONE,
  exerciseId,
});

export const completeExercise = () => (dispatch, getState) => {
  const state = getState();
  const currentExerciseId = state.exercise.id;

  dispatch(finishExercise());
  dispatch(cleanWokspace());
  dispatch(setExerciseDone(currentExerciseId));
  dispatch(getTutorialExercise());
};

export default { completeExercise };