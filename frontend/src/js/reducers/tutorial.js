import { SET_EXERCISE_DONE } from 'js/actions/constants';
import lessons from 'js/utils/tutorial/lessons';

export default function tutorial(state = lessons, action) {
  switch (action.type) {
    case SET_EXERCISE_DONE: 
      const currentState = state.map(exercise => {
        if (exercise.id === action.exerciseId) exercise.done = true;
        return exercise;
      });
      return currentState;
    default:
      return state; 
  }
}