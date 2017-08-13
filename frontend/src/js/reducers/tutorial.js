import lessons from 'js/utils/tutorial/lessons';

export default function tutorial(state = lessons, action) {
  switch (action.type) {
    case 'SET_EXERCISE_AS_DONE': 
      return state;
    default:
      return state; 
  }
}