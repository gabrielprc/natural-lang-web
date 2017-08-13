import { 
  START_TUTORIAL, GET_EXERCISE, FINISH_EXERCISE, GET_NEXT_EXERCISE 
} from './constants';


const startTutorial = () => ({
  type: START_TUTORIAL,
});

const finishExercise = (id) => ({
  type: FINISH_EXERCISE,
  id,
});

const getNextExercise = (id) => ({
  type: GET_NEXT_EXERCISE,
  id,
});


export const getInitialExercise = () => (dispatch, getState) => {
  dispatch(startTutorial());
};

export const completeExercise = (id) => (dispatch, getState) => {
  dispatch(finishExercise(id));
};


export default { getInitialExercise, completeExercise };