import { last } from 'lodash';
import { GET_CURRENT_EXERCISE } from './constants';

const getExercise = (exercise) => ({
  type: GET_CURRENT_EXERCISE,
  exercise,
});

export const getTutorialExercise = () => (dispatch, getState) => {
  const state = getState();
  const tutorial = state.tutorial;
  const nextExercise = tutorial.find(e => {
    if (!e.done) return e;
  });
  const exercise = nextExercise || last(tutorial);

  dispatch(getExercise(exercise));
} 

export default { getTutorialExercise };