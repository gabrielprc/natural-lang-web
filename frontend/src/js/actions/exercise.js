import { GET_CURRENT_EXERCISE } from './constants';

const getExercise = (exercise) => ({
  type: GET_CURRENT_EXERCISE,
  exercise,
});


export const getTutorialExercise = () => (dispatch, getState) => {
  const state = getState();
  const tutorial = state.tutorial;
  const exercise = tutorial.find(e => {
    if (!e.done) return e;
  });

  dispatch(getExercise(exercise));
} 

export default { getTutorialExercise };